const API_URL = 'http://localhost:3001/itens';

export async function fetchItems() {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Erro ao buscar os registros no servidor.');
  }
  return response.json();
}

export async function createItem(itemData) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(itemData),
  });

  if (!response.ok) {
    throw new Error('Erro ao cadastrar o novo registro no servidor.');
  }
  return response.json();
}