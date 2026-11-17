import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import PlantList from './components/PlantList';
import PlantForm from './components/PlantForm';
import { fetchItems, createItem } from './services/itemService';

export default function App() {
  const [plants, setPlants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    loadInitialPlants();
  }, []);

  const loadInitialPlants = async () => {
    try {
      setIsLoading(true);
      const data = await fetchItems();
      setPlants(data);
      setErrorMessage('');
    } catch (error) {
      setErrorMessage('Não foi possível conectar ao servidor Node.js');
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddPlant = async (newPlantData) => {
    try {
      const createdPlant = await createItem(newPlantData);
      setPlants((previousPlants) => [createdPlant, ...previousPlants]);
      setErrorMessage('');
    } catch (error) {
      setErrorMessage('Erro ao salvar a planta. Tente novamente.');
      throw error;
    }
  };

  return (
    <div className="min-vh-100 d-flex flex-column">
      <Navbar />
      
      <main className="container mb-5 flex-grow-1">
        {errorMessage && (
          <div className="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        )}

        <div className="row g-4">
          <div className="col-lg-4">
            <PlantForm onAddPlant={handleAddPlant} />
          </div>
          
          <div className="col-lg-8">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="fw-bold text-dark mb-0">Lista de Plantas</h4>
              <span className="badge bg-success rounded-pill">
                {plants.length} {plants.length === 1 ? 'registro' : 'registros'}
              </span>
            </div>
            <PlantList plants={plants} isLoading={isLoading} />
          </div>
        </div>
      </main>
    </div>
  );
}