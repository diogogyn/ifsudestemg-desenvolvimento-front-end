import { useState } from 'react';
import Home from './components/Home';
import Cadastro from './components/Cadastro';
import Detalhes from './components/Detalhes';
import './App.css';

function App() {
  const [telaAtual, setTelaAtual] = useState('home');
  const [imovelSelecionado, setImovelSelecionado] = useState(null);

  // Requisito 3: Cadastrar previamente pelo menos 3 imóveis
  const [imoveis, setImoveis] = useState([
    {
      id: 1,
      titulo: "Casa Térrea com Quintal",
      descricao: "Linda casa com 2 quartos, sala ampla e quintal espaçoso. Pronta para morar.",
      valor: "350.000,00"
    },
    {
      id: 2,
      titulo: "Apartamento Centro",
      descricao: "Apartamento de 3 quartos, próximo ao comércio e transporte público.",
      valor: "280.000,00"
    },
    {
      id: 3,
      titulo: "Chácara nas Montanhas",
      descricao: "Excelente chácara com 2.000m², pomar e casa sede. Ideal para lazer.",
      valor: "450.000,00"
    }
  ]);

  const irParaCadastro = () => setTelaAtual('cadastro');

  const irParaDetalhes = (imovel) => {
    setImovelSelecionado(imovel);
    setTelaAtual('detalhes');
  };

  const voltarParaHome = () => {
    setTelaAtual('home');
    setImovelSelecionado(null);
  };

  const salvarImovel = (dados) => {
    const novoImovel = {
      id: imoveis.length > 0 ? Math.max(...imoveis.map(i => i.id)) + 1 : 1,
      ...dados
    };
    setImoveis([...imoveis, novoImovel]);
    alert("Imóvel cadastrado com sucesso!");
    voltarParaHome();
  };

  const excluirImovel = (id) => {
    if (window.confirm("Tem certeza que deseja excluir este imóvel?")) {
      setImoveis(imoveis.filter(imovel => imovel.id !== id));
      voltarParaHome();
    }
  };

  return (
    <div className="app-root">
      {telaAtual === 'home' && (
        <Home 
          imoveis={imoveis} 
          onCadastrarClick={irParaCadastro} 
          onImovelClick={irParaDetalhes} 
        />
      )}

      {telaAtual === 'cadastro' && (
        <Cadastro 
          onVoltar={voltarParaHome} 
          onSalvar={salvarImovel} 
        />
      )}

      {telaAtual === 'detalhes' && imovelSelecionado && (
        <Detalhes 
          imovel={imovelSelecionado} 
          onVoltar={voltarParaHome} 
          onExcluir={excluirImovel} 
        />
      )}
    </div>
  );
}

export default App;