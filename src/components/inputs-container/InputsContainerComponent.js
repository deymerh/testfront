import React from 'react';
import './InputsContainerComponent.css';

import Icondv from '../../assets/icon-dv-edit.svg';

const InputsContainerComponent = () => {

  return (
    <div className="InputsContainer">
      <p>Indique los siguientes datos para continuar con la solicitud de su adelanto de pensión:</p>
      <label>
        ¿Cuál es el valor total de sus ingresos mensuales?
      <input type="text" />
      </label>
      <label>
        ¿Cuál es su actividad laboral actual?
        <select name="" id="" className="Input__option">
          <option value="Seleccione una opción">Seleccione una opción</option>
        </select>
      </label>
      <label>
        ¿Cuál es el nombre de su empresa?
      <input type="text" />
      </label>
      <label>
        ¿Qué tipo de contrato tiene?
        <select name="" id="" className="Input__option">
          <option value="Seleccione una opción">Seleccione una opción</option>
        </select>
      </label>

      <label>
        ¿Cuál es su ciudad de residencia?
      <input type="text" />
      </label>
      <label className="Icon__dv-edi">
        ¿Cuál es su dirección de residencia?
      <input type="text" placeholder="Carrera 9 # 116 -08, Bogotá" />
        <div>
          <button>
            <img src={Icondv} alt={Icondv} />
          </button>
        </div>
      </label>
      <label className="Icon__dv-edi2">
        Si está recibiendo ayuda de un <strong>Asesor del Banco</strong>, ingrese el código del asesor:
      <input type="text" placeholder="Opcional" />
        <div>
          <button>?</button>
        </div>
      </label>
      <label></label>
    </div>
  )
}

export default InputsContainerComponent
