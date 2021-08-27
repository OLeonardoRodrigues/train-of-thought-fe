import React from 'react';

import './InputCustom.scss';

function InputCustom({ classInput, id, type, label, value, setValue }) {
  function handleValue(e) {
    setValue(e.target.value);
  }

  return (
    <div className={`inputCustom ${classInput && classInput}`}>
      <input
        type={type ? type : 'text'}
        id={id}
        value={value}
        onChange={handleValue}
      />
      <label htmlFor={id} className={value ? 'onValue' : ''}>
        {label}
      </label>
    </div>
  );
}

export default InputCustom;
