let analysisTimeout;
let timeoutValue = 5000;

chrome.tabs.onActivated.addListener(activeInfo => makeAnalysis());

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.url) {
    makeAnalysis();
  }
});

function makeAnalysis(){
  clearTimeout(analysisTimeout);

  analysisTimeout = setTimeout(function(){
    getCurrentTab().then(tab => {
      if(tab) {
        console.log("Url capturada: " + tab.url);
        console.log('Timeout ' + timeoutValue);
      }
    });
  },timeoutValue);
}

async function getCurrentTab() {;
  fetch('http://localhost:3000/', {mode: 'cors'})
  .then(res => res.text())
  .then(text => console.log(text));

  let queryOptions = { active: true, currentWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}

chrome.runtime.onMessage.addListener(
  function(request) {
    timeoutValue = request[1]*1000;
    console.log('valor do timeout ' + timeoutValue + " definido via: " + request[0]);
  }
);
