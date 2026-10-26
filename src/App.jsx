import { useState, useEffect, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FormLivro from './pages/FormLivro';
import Detalhes from './pages/Detalhes';
import Favoritos from './pages/Favoritos';
import BottomTabs from './components/BottomTabs';
import { getLivros, saveLivros, seedLivros } from './services/storage';
import './App.css';

function App() {
  const [livros, setLivros] = useState([]);
  const [carregando, setCarregando] = useState(true);

  // Carrega dados iniciais
  useEffect(() => {
    (async () => {
      const dados = await seedLivros();
      setLivros(dados);
      setCarregando(false);
    })();
  }, []);

  // Persiste qualquer mudança
  const persistir = useCallback(async (lista) => {
    setLivros(lista);
    await saveLivros(lista);
  }, []);

  // CRIAR
  const criarLivro = async (dados) => {
    const novo = { id: crypto.randomUUID(), favorito: false, ...dados };
    await persistir([novo, ...livros]);
  };

  // ATUALIZAR
  const atualizarLivro = async (id, dados) => {
    const lista = livros.map((l) => (l.id === id ? { ...l, ...dados } : l));
    await persistir(lista);
  };

  // DELETAR
  const deletarLivro = async (id) => {
    await persistir(livros.filter((l) => l.id !== id));
  };

  // Alternar favorito (parte do UPDATE)
  const toggleFavorito = async (id) => {
    const lista = livros.map((l) =>
      l.id === id ? { ...l, favorito: !l.favorito } : l
    );
    await persistir(lista);
  };

  if (carregando) {
    return (
      <div className="loading-screen">
        <div className="spinner" />
        <p>Carregando biblioteca...</p>
      </div>
    );
  }

  return (
    <div className="app-layout">
      <main className="app-content">
        <Routes>
          <Route path="/" element={<Home livros={livros} />} />
          <Route
            path="/adicionar"
            element={<FormLivro onSalvar={criarLivro} />}
          />
          <Route
            path="/editar/:id"
            element={
              <FormLivro livros={livros} onSalvar={atualizarLivro} isEdicao />
            }
          />
          <Route
            path="/detalhes/:id"
            element={
              <Detalhes
                livros={livros}
                onDeletar={deletarLivro}
                onToggleFavorito={toggleFavorito}
              />
            }
          />
          <Route
            path="/favoritos"
            element={<Favoritos livros={livros} />}
          />
        </Routes>
      </main>

      <BottomTabs />
    </div>
  );
}

export default App;