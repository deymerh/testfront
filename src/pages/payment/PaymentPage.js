import React from 'react';
import BackButtonComponent from '../../components/back-button/BackButtonComponent';
import HeaderComponent from '../../components/header/HeaderComponent';
import './PaymentPage.css';

//icons
import Familia from '../../assets/img2/p1.png';
import Arrowicon from '../../assets/arrow-icon.svg';
import Alone from '../../assets/img/p1.png';
import ButtonComponent from '../../components/button/ButtonComponent';
import { Link } from 'react-router-dom';

const PaymentPage = () => {
  return (
    <>
      <HeaderComponent
        subTitle="Formulario"
      />
      <div className="Payment">
        <BackButtonComponent />
        <div className="Payment__card">
          <p className="Payment__card-text1">¿Cómo quiere pagar su seguro?</p>
          <div className="Payments__radio">
            <label className="radio">
              <input type="radio" checked="checked" name="radio" />
              Mensual
            </label>
            <label className="radio">
              <input type="radio" name="radio" />
              Anual
            </label>
          </div>
          <p className="Payment__card-text2">Seleccione el tipo de cobertura que desea adquirir:</p>
          <div className="Payment__item">
            <label >
              <div className="Payment__item-price">
                <input type="radio" name="radio2" />
                <div>
                  <p>Cobertura familiar</p>
                  <p>$106.200</p>
                </div>
              </div>
              <figure className="Payment__item-figure">
                <img src={Familia} alt={Familia} />
              </figure>
            </label>
            <div className="info">
              <p>Ver más información</p>
              <figure className="info__figure">
                <img src={Arrowicon} alt={Arrowicon} />
              </figure>
            </div>
          </div>
          <div className="Payment__item">
            <label >
              <div className="Payment__item-price">
                <input type="radio" name="radio2" />
                <div>
                  <p>Cobertura familiar</p>
                  <p>$106.200</p>
                </div>
              </div>
              <figure className="Payment__item-figure">
                <img src={Alone} alt={Alone} />
              </figure>
            </label>
            <div className="info">
              <p>Ver más información</p>
              <figure className="info__figure">
                <img src={Arrowicon} alt={Arrowicon} />
              </figure>
            </div>
          </div>
        </div>

        <Link to="/success">
          <ButtonComponent />
        </Link>
      </div>
    </>
  )
}

export default PaymentPage
