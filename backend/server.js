const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const items = [
  {
    id: 1,
    commonName: 'Rosa',
    scientificName: 'Rosa spp.',
    family: 'Rosaceae',
    genus: 'Rosa',
    imageUrl: 'https://images.unsplash.com/photo-1762328870833-d3a1fa28dd10?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    observations: 'Planta ornamental clássica, requer poda regular e bastante luz solar direta.'
  },
  {
    id: 2,
    commonName: 'Botão-de-ouro',
    scientificName: 'Ranunculus repens',
    family: 'Ranunculaceae',
    genus: 'Ranunculus',
    imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7a/Ranunculus_repens_prysky%C5%99n%C3%ADk_plaziv%C3%BD_4.jpg/960px-Ranunculus_repens_prysky%C5%99n%C3%ADk_plaziv%C3%BD_4.jpg?utm_source=pt.wikipedia.org&utm_campaign=parser&utm_content=thumbnail',
    observations: 'Planta herbácea rasteira com flores amarelas brilhantes, muito comum em solos úmidos.'
  },
  {
    id: 3,
    commonName: 'Costela-de-adão',
    scientificName: 'Monstera deliciosa',
    family: 'Araceae',
    genus: 'Monstera',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJcAxdA95S07rnTN1W0yb5DC2cfi4cNzu2aN2dGXGV5Q&s=10',
    observations: 'Planta tropical de folhagem exuberante, adapta-se muito bem a ambientes internos com luz indireta.'
  }
];

app.get('/itens', (req, res) => {
  res.status(200).json(items);
});

app.post('/itens', (req, res) => {
  const { commonName, scientificName, family, genus, imageUrl, observations } = req.body;

  if (!commonName || !scientificName) {
    return res.status(400).json({ message: 'Os campos Nome Comum e Nome Científico são obrigatórios.' });
  }

  const newItem = {
    id: items.length + 1,
    commonName,
    scientificName,
    family: family || 'Não informada',
    genus: genus || 'Não informado',
    imageUrl: imageUrl || 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=600&q=80',
    observations: observations || 'Sem observações adicionais.'
  };

  items.unshift(newItem);

  res.status(201).json(newItem);
});

app.listen(PORT, () => {
  console.log(`Servidor executando na porta ${PORT}`);
});