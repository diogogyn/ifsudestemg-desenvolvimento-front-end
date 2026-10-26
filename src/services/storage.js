const KEY = 'minha-biblioteca:livros';

// Simula leitura assíncrona (como AsyncStorage)
export const getLivros = async () => {
  await new Promise((r) => setTimeout(r, 100));
  const raw = localStorage.getItem(KEY);
  return raw ? JSON.parse(raw) : [];
};

export const saveLivros = async (livros) => {
  await new Promise((r) => setTimeout(r, 100));
  localStorage.setItem(KEY, JSON.stringify(livros));
};

// Sementes iniciais na primeira execução
export const seedLivros = async () => {
  const existentes = await getLivros();
  if (existentes.length > 0) return existentes;

  const sementes = [
    {
      id: crypto.randomUUID(),
      titulo: 'O Hobbit',
      autor: 'J.R.R. Tolkien',
      ano: 1937,
      genero: 'Fantasia',
      favorito: true,
      resenha: 'Uma aventura encantadora pelas terras da Terra-média.',
    },
    {
      id: crypto.randomUUID(),
      titulo: '1984',
      autor: 'George Orwell',
      ano: 1949,
      genero: 'Distopia',
      favorito: false,
      resenha: 'Uma crítica profunda ao totalitarismo e à vigilância.',
    },
    {
      id: crypto.randomUUID(),
      titulo: 'Dom Casmurro',
      autor: 'Machado de Assis',
      ano: 1899,
      genero: 'Romance',
      favorito: false,
      resenha: 'Clássico brasileiro sobre ciúme e memória.',
    },
  ];

  await saveLivros(sementes);
  return sementes;
};