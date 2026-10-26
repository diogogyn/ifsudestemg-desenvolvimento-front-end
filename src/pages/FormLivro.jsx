import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './FormLivro.css';

function FormLivro({ livros, onSalvar, isEdicao = false }) {
  const navigate = useNavigate();
  const { id } = useParams();

  const [form, setForm] = useState({
    titulo: '',
    autor: '',
    ano: new Date().getFullYear(),
    genero: '',
    resenha: '',
  });
  const [erro, setErro] = useState('');

  useEffect(() => {
    if (isEdicao && id) {
      const livro = livros.find((l) => l.id === id);
      if (livro) {
        setForm({
          titulo: livro.titulo,
          autor: livro.autor,
          ano: livro.ano,
          genero: livro.genero,
          resenha: livro.resenha || '',
        });
      }
    }
  }, [id, isEdicao, livros]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.titulo.trim() || !form.autor.trim()) {
      setErro('Título e autor são obrigatórios.');
      return;
    }
    if (isEdicao) {
      await onSalvar(id, form);
    } else {
      await onSalvar(form);
    }
    navigate('/');
  };

  return (
    <div>
      <header className="page-header">
        <h1>{isEdicao ? 'Editar livro' : 'Novo livro'}</h1>
      </header>

      <form className="form-livro" onSubmit={handleSubmit}>
        {erro && <div className="form-erro">{erro}</div>}

        <div className="form-group">
          <label htmlFor="titulo">Título *</label>
          <input
            id="titulo"
            name="titulo"
            value={form.titulo}
            onChange={handleChange}
            placeholder="Ex.: O Hobbit"
          />
        </div>

        <div className="form-group">
          <label htmlFor="autor">Autor *</label>
          <input
            id="autor"
            name="autor"
            value={form.autor}
            onChange={handleChange}
            placeholder="Ex.: J.R.R. Tolkien"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="ano">Ano</label>
            <input
              id="ano"
              name="ano"
              type="number"
              value={form.ano}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="genero">Gênero</label>
            <select
              id="genero"
              name="genero"
              value={form.genero}
              onChange={handleChange}
            >
              <option value="">Selecione...</option>
              <option>Fantasia</option>
              <option>Romance</option>
              <option>Distopia</option>
              <option>Ficção Científica</option>
              <option>Terror</option>
              <option>Biografia</option>
              <option>Técnico</option>
              <option>Outro</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="resenha">Resenha</label>
          <textarea
            id="resenha"
            name="resenha"
            rows="4"
            value={form.resenha}
            onChange={handleChange}
            placeholder="O que você achou do livro?"
          />
        </div>

        <div className="form-acoes">
          <button type="button" className="btn-secondary" onClick={() => navigate(-1)}>
            Cancelar
          </button>
          <button type="submit" className="btn-primary">
            {isEdicao ? 'Salvar alterações' : 'Cadastrar livro'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormLivro;