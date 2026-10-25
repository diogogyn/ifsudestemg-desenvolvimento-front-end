import './Detalhes.module.css';

function Detalhes({ imovel, onVoltar, onExcluir }) {
  return (
    <div className="container detalhes-container">
      <header className="header">
        <div className="telhado">🏠 🏠 🏠</div>
        <h1>Detalhes do imóvel</h1>
      </header>

      <main className="detalhes-content">
        <div className="imagem-placeholder-grande">ESPAÇO PARA IMAGEM</div>

        <div className="info-detalhes">
          <h2>{imovel.titulo}</h2>
          <p className="descricao-longa">{imovel.descricao}</p>
          <h3 className="valor-destaque">R$ {imovel.valor}</h3>
        </div>

        <div className="acoes">
          <button className="btn-excluir" onClick={() => onExcluir(imovel.id)}>
            Excluir imóvel
          </button>
          <button className="btn-voltar" onClick={onVoltar}>
            Voltar para Início
          </button>
        </div>
      </main>
    </div>
  );
}

export default Detalhes;