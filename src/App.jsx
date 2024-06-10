import './index.css';
import { useState } from 'react';
import { IoMdCreate } from "react-icons/io";
import { FaDatabase } from "react-icons/fa";
import { GrUpdate } from "react-icons/gr";
import Cadastro from './Forms/formCadastro';

function App() {
  const [componenteAtual, setComponenteAtual] = useState(null);

  const renderizarComponente = () => {
    switch (componenteAtual) {
      case 'cadastrar':
        return <Cadastro voltar={() => setComponenteAtual(null)} />;
      case 'mostrar':
        return <MostrarDados voltar={() => setComponenteAtual(null)} />;
      case 'atualizar':
        return <AtualizarDados voltar={() => setComponenteAtual(null)} />;
      default:
        return null;
    }
  };

  return (
    <div className='App'>
      <div className='logo'><a href='home'>
        <img src="mplogo.png" alt="logo" /></a>
      </div>
      <div className='content'>
        {componenteAtual === null ? (
          <>
            <div className='titulo'>
              <h1>Cadastrar Dívidas</h1>
              <button className='front' onClick={() => setComponenteAtual('cadastrar')}><IoMdCreate size={50} /></button>
            </div>
            <div className='titulo'>
              <h1>Visualizar Dados</h1>
              <button className='front' onClick={() => setComponenteAtual('mostrar')}><FaDatabase size={50} /></button>
            </div>
            <div className='titulo'>
              <h1>Atualizar/Deletar</h1>
              <button className='front' onClick={() => setComponenteAtual('atualizar')}><GrUpdate size={50} /></button>
            </div>
          </>
        ) : (
          renderizarComponente()
        )}
      </div>
    </div>
  );
}

export default App;

