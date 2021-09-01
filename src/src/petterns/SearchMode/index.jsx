import React from 'react';
import ButtonCustom from '../../components/ButtonCustom';
import InputCustom from '../../components/InputCustom';
import { handleTime } from '../../utils/utilsFunction';

import './SearchMode.scss';

function SearchMode() {
  const [time, setTime] = React.useState('');

  const refTime = React.useRef(null);

  return (
    <div className="srcMode">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleTime(refTime);
        }}
      >
        <h1>Tempo</h1>
        <div className="container_form">
          <InputCustom
            id="timeUser"
            label="Tempo"
            value={time}
            setValue={setTime}
            refInput={refTime}
          />
          <ButtonCustom type="submit"> Ativar </ButtonCustom>
        </div>
      </form>
    </div>
  );
}

export default SearchMode;
