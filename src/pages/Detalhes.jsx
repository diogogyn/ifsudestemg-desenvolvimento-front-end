import { useParams, useNavigate, Link } from 'react-router-dom';
import './Detalhes.css';

function Detalhes({ livros, onDeletar, onToggleFavorito }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const livro = livros.find((l) => l.id === id);

  if (!livro) {
    return (
      <div className="empty-state">
        <span className="empty-icon">-</span>
        <h2>Livro não encontrado</h2>
        <Link to="/" className="btn-primary">Voltar ao início</Link>
      </div>
    );
  }

  const handleDeletar = async () => {
    if (window.confirm(`Excluir "${livro.titulo}"?`)) {
      await onDeletar(livro.id);
      navigate('/');
    }
  };

  return (
    <div>
      <button className="btn-voltar" onClick={() => navigate('/')}>
        ← Voltar
      </button>

      <div className="detalhes-card">
        <div className="detalhes-hero">
          <div className="capa-grande">{livro.titulo.charAt(0)}</div>
          <div className="detalhes-titulo">
            <h1>{livro.titulo}</h1>
            <p className="autor">por {livro.autor}</p>
            <div className="meta-badges">
              <span className="tag">{livro.genero || 'Sem gênero'}</span>
              <span className="tag-ano">{livro.ano}</span>
              {livro.favorito && <span className="tag-fav">Favorito</span>}
            </div>
          </div>
        </div>

        {livro.resenha && (
          <section className="resenha-section">
            <h2>Resenha</h2>
            <p>{livro.resenha}</p>
          </section>
        )}

        <div className="detalhes-acoes">
          <button
            className="btn-fav"
            onClick={() => onToggleFavorito(livro.id)}
          >
            {livro.favorito ? 'Remover dos favoritos' : 'Favoritar'}
          </button>
          <Link to={`/editar/${livro.id}`} className="btn-editar">
            Editar
          </Link>
          <button className="btn-deletar" onClick={handleDeletar}>
            Excluir
          </button>
        </div>
      </div>
    </div>
  );
}

export default Detalhes;