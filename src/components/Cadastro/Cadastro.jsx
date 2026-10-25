import { useState } from 'react';
import './Cadastro.module.css';

function Cadastro({ onVoltar, onSalvar }) {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!titulo || !descricao || !valor) {
      alert("Preencha todos os campos!");
      return;
    }
    onSalvar({ titulo, descricao, valor });
  };

  return (
    <div className="container cadastro-container">
      <header className="header">
        <div className="telhado">🏠 🏠 🏠</div>
        <h1>Cadastrar Imóvel</h1>
      </header>

      <main className="form-content">
        <form onSubmit={handleSubmit}>
          <table class="tg">
            <thead>
              <div className="form-group">
                <tr>
                  <th class="tg-0lax"><label htmlFor="titulo">Título:</label></th>
                  <th class="tg-lg91">
                    <input
                      id="titulo"
                      type="text"
                      value={titulo}
                      onChange={(e) => setTitulo(e.target.value)}
                      placeholder="Título do anúncio"
                    />
                  </th>
                </tr>
              </div>

            </thead>
            <tbody>
              <div className="form-group">
                <tr>
                  <td class="tg-9crw"><label htmlFor="descricao">Descrição:</label></td>
                  <td class="tg-xj23">
                    <textarea
                      id="descricao"
                      value={descricao}
                      onChange={(e) => setDescricao(e.target.value)}
                      placeholder="Breve descrição do anúncio"
                      rows="3"
                    />
                  </td>
                </tr>
              </div>
              <div className="form-group">
                <tr>
                  <td class="tg-9crw"><label htmlFor="valor">Valor R$:</label></td>
                  <td class="tg-xj23">
                    <input
                      id="valor"
                      type="number"
                      value={valor}
                      onChange={(e) => setValor(e.target.value)}
                      placeholder="Valor do anúncio"
                    />
                  </td>
                </tr>
              </div>
              <div className="form-group">
                <tr>
                  <td class="tg-9crw"></td>
                  <td class="tg-xj23"><button type="submit" className="btn-salvar">Cadastrar</button></td>
                </tr>
              </div>
            </tbody>
          </table>
        </form>

        <button className="btn-voltar" onClick={onVoltar}>
          Voltar para Início
        </button>
      </main>
    </div>
  );
}

export default Cadastro;