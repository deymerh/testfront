import React from 'react';
import BackButtonComponent from '../../components/back-button/BackButtonComponent';
import BenefitsComponents from '../../components/benefits/BenefitsComponents';
import HeaderComponent from '../../components/header/HeaderComponent';
import { Link } from 'react-router-dom';
import './HomePage.css';

//icons
import Iconmoney from '../../assets/icon-money.svg'
import Iconphone from '../../assets/icon-phone.svg'
import Lowcredit from '../../assets/icon-lowcredit.svg'
import Pension from '../../assets/icon-pension.svg'
import ButtonComponent from '../../components/button/ButtonComponent';
//text
const MoneyText = "Reciba el pago de su pensión y otros depósitos en su cuenta.";
const PhoneText = "Programe de forma automática sus transferencias, el pago de productos y servicios.";
const LowcreditText = "Podrá obtener beneficios con aliados y tasas especiales en créditos para pensionados.";
const PensionText = "Podrá acceder a un cupo de adelanto de pensión y a los productos móviles que le ofrece Davivienda.";

const HomePage = () => {
  return (
    <>
      <HeaderComponent />
      <div className="ContainerHome">
        <Link to="/">
          <BackButtonComponent />
        </Link>
        <BenefitsComponents
          icon={Iconmoney}
          text={MoneyText}
        />
        <BenefitsComponents
          icon={Iconphone}
          text={PhoneText}
        />
        <BenefitsComponents
          icon={Lowcredit}
          text={LowcreditText}
        />
        <BenefitsComponents
          icon={Pension}
          text={PensionText}
        />
        <p className="Ad">Este producto cuenta con el seguro de depósitos <span>FOGAFIN</span> </p>
        <Link to="/form">
          <ButtonComponent />
        </Link>
      </div>
    </>
  );
};

export default HomePage;
