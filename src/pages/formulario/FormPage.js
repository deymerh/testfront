import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import BackButtonComponent from '../../components/back-button/BackButtonComponent'
import ButtonComponent from '../../components/button/ButtonComponent';
import HeaderComponent from '../../components/header/HeaderComponent'
import InputsContainerComponent from '../../components/inputs-container/InputsContainerComponent'
import Modal from 'react-modal';
import './FormPage.css';

// icons
import Family from '../../assets/family.svg';
import IconFlecha from '../../assets/icon-flecha.svg';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: '0',
    marginRight: '-50%',
    transform: 'translate(-50%,  0)',
    background: "rgba(238, 238, 238, 1)",
  },
};

Modal.setAppElement('#root');

const FormPage = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const OpenModal = () => {
    setIsOpen(true);
    console.log("true")
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <HeaderComponent
        subTitle="Formulario"
      />
      <div className="ContainerFom">
        <Link to="/">
          <BackButtonComponent />
        </Link>
        <InputsContainerComponent />
        <ButtonComponent onClick={OpenModal} />
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="Modal">
          <div className="Modal__header">
            <figure>
              <img src={Family} alt={Family} />
            </figure>
            <h3>Seguro Vida Online</h3>
          </div>
          <div className="Modal__container">
            <div className="Modal__ad">
              <h4>¿Quiere proteger a su familia?</h4>
              <p>Cubra los gastos de su hogar en caso de:</p>
            </div>
            <div className="Modal__item">
              <figure>
                <img src={IconFlecha} alt={IconFlecha} />
              </figure>
              <p>Muerte por cualquier causa.</p>
            </div>
            <div className="Modal__item">
              <figure>
                <img src={IconFlecha} alt={IconFlecha} />
              </figure>
              <p>Incapacidad total y permanente.</p>
            </div>
            <div>
              <div className="Modal__polity">
                <Link to="*">
                  <p>Ver Términos y Condiciones</p>
                </Link>
              </div>
              <div className="Modal__btns">
                <button className="Modal__btns-1">Omitir</button>
                <Link to="payment">
                  <button className="Modal__btns-2">Adquirir</button>
                </Link>
              </div>
              <div className="Modal__bottom">
                <p>Este seguro es expedido por</p>
                <p><strong> Seguros Bolivar S.A.</strong></p>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default FormPage
