import React, { useRef } from 'react';
import './App.css';
import Modal from './Modal';

const App = () => {
  const modalRef = useRef();

  const openModal = () => {
    modalRef.current.openModal();
  };

  return (
    <div className="App">
      <button onClick={openModal}>Open Modal</button>
      <Modal ref={modalRef}>
        <h1>Modal Header</h1>
        <p>
          Mussum Ipsum, cacilds vidis litro abertis. Nullam volutpat risus nec
          leo commodo, ut interdum diam laoreet. Sed non consequat odio. Nec
          orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non
          ipsum felis. Pra lá , depois divoltis porris, paradis. Interagi no mé,
          cursus quis, vehicula ac nisi. Copo furadis é disculpa de bebadis,
          arcu quam euismod magna. Não sou faixa preta cumpadi, sou preto
          inteiris, inteiris. Leite de capivaris, leite de mula manquis sem
          cabeça. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua
          vidis. Aenean aliquam molestie leo, vitae iaculis nisl. Mé faiz
          elementum girarzis, nisi eros vermeio. Suco de cevadiss, é um leite
          divinis, qui tem lupuliz, matis, aguis e fermentis. Per aumento de
          cachacis, eu reclamis.
        </p>
      </Modal>
    </div>
  );
};

export default App;
