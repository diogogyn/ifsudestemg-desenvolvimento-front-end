import LivroCard from '../components/LivroCard';
import { Link } from 'react-router-dom';
import './Favoritos.css';

function Favoritos({ livros }) {
  const favoritos = livros.filter((l) => l.favorito);

  return (
    <div>
      <header className="page-header">
        <h1>Favoritos</h1>
        <p className="page-subtitle">
          {favoritos.length} livro{favoritos.length !== 1 ? 's' : ''} marcado
          {favoritos.length !== 1 ? 's' : ''}
        </p>
      </header>

      {favoritos.length === 0 ? (
        <div className="empty-state">
          <span className="empty-icon"></span>
          <h2>Nenhum favorito ainda</h2>
          <p>Abra um livro e marque como favorito para adicioná-lo aqui.</p>
          <Link to="/" className="btn-primary">Ver todos os livros</Link>
        </div>
      ) : (
        <div className="grid-livros">
          {favoritos.map((livro) => (
            <LivroCard key={livro.id} livro={livro} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favoritos;