import { Link } from 'react-router-dom';
import './LivroCard.css';

function LivroCard({ livro }) {
  return (
    <Link to={`/detalhes/${livro.id}`} className="livro-card">
      <div className="livro-capa">
        <span>{livro.titulo.charAt(0).toUpperCase()}</span>
        {livro.favorito && <span className="badge-fav"></span>}
      </div>
      <div className="livro-info">
        <h3>{livro.titulo}</h3>
        <p className="livro-autor">{livro.autor}</p>
        <div className="livro-meta">
          <span className="tag">{livro.genero}</span>
          <span className="ano">{livro.ano}</span>
        </div>
      </div>
    </Link>
  );
}

export default LivroCard;