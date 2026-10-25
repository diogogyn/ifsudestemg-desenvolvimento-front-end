import './Home.module.css';

function Home({ imoveis, onCadastrarClick, onImovelClick }) {
  return (
    <div className="container home-container">
      <header className="header">
        <div className="telhado">🏠 🏠 🏠</div>
        <h1>3 Cores Imobiliária</h1>
        <button className="btn-cadastrar" onClick={onCadastrarClick}>
          Cadastrar novo imóvel
        </button>
      </header>

      <main>
        <h2 className="section-title">Nossos imóveis:</h2>
        <div className="lista-imoveis">
          {imoveis.length === 0 ? (
            <p className="lista-vazia">Nenhum imóvel cadastrado.</p>
          ) : (
            imoveis.map((imovel) => (
              <div
                key={imovel.id}
                className="card-imovel"
                onClick={() => onImovelClick(imovel)}
              >
                <div className="imagem-placeholder"><img src="https://dummyimage.com/40x40/000/fff&text=foto"></img></div>
                <div className="info-imovel">
                  <h3>{imovel.titulo}</h3>
                  <p>{imovel.descricao}</p>
                  <span className="valor">R$ {imovel.valor}</span>
                </div>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
}

export default Home;