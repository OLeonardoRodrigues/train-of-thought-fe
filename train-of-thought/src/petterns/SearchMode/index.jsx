import React from 'react';
import InputCustom from '../../components/InputCustom';

function SearchMode() {
  const [urlText, setUrlText] = React.useState('');
  return (
    <div>
      Seach
      <InputCustom
        id="urlText"
        label="Url"
        value={urlText}
        setValue={setUrlText}
      />
    </div>
  );
}

export default SearchMode;
