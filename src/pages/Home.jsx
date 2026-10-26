import { Link } from 'react-router-dom';
import LivroCard from '../components/LivroCard';
import './Home.css';

function Home({ livros }) {
  return (
    <div>
      <header className="page-header">
        <h1>IFSUDESTE DE MG - Aplicativo de Biblioteca</h1>
        <p className="page-subtitle">
          {livros.length} livro{livros.length !== 1 ? 's' : ''} na estante
        </p>
      </header>

      {livros.length === 0 ? (
        <div className="empty-state">
          <span className="empty-icon"></span>
          <h2>Nenhum livro cadastrado ainda</h2>
          <p>Comece adicionando seu primeiro livro!</p>
          <Link to="/adicionar" className="btn-primary">
            Adicionar livro
          </Link>
        </div>
      ) : (
        <div className="grid-livros">
          {livros.map((livro) => (
            <LivroCard key={livro.id} livro={livro} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;