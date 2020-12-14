import React from 'react';
import HeaderComponent from '../../components/header/HeaderComponent';
import './SuccessPage.css';

// icons
import Checkout from '../../assets/checkout.svg';
import { Link } from 'react-router-dom';
import ButtonComponent from '../../components/button/ButtonComponent';

const SuccessPage = () => {
  return (
    <>
      <HeaderComponent
        title="Compra de Cartera Móvil"
        subTitle="Resultado"
      />
      <div className="Success">
        <div className="Success__container">
          <div className="Success__header">
            <p>Adelanto de pensión y seguro</p>
          </div>
          <div className="Succes__message">
            <div>
              <figure>
                <img src={Checkout} alt={Checkout} />
              </figure>
              <p className="Succes__message-text1">Los productos fueron aprobados satisfactoriamente.</p>
            </div>
            <p className="Succes__message-text2">En un un plazo máximo de <strong>5 días calendario</strong>, se le informará por medio de un mensaje de texto el estado de sus productos.</p>
          </div>
          <div className="Success__details-container">
            <div className="Success__details">
              <div>
                <p><strong>Adelanto de pensión: </strong></p>
                <p>Aprobado</p>
              </div>
            </div>
            <div className="Success__details">
              <div>
                <p><strong>Tipo de seguro:</strong></p>
                <p>Familiar - 106.200 mensual</p>
              </div>
            </div>
            <div className="Success__details">
              <div>
                <p><strong>Fecha y hora:</strong></p>
                <p>29/01/2020, 09:41 a.m.</p>
              </div>
            </div>
          </div>
        </div>
        <Link to="/">
          <ButtonComponent />
        </Link>
      </div>
    </>
  )
}

export default SuccessPage;
