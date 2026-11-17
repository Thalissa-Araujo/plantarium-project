import React from 'react';
import PlantCard from './PlantCard';

export default function PlantList({ plants, isLoading }) {
  if (isLoading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-success" role="status">
          <span className="visually-hidden">Carregando...</span>
        </div>
        <p className="mt-2 text-muted">Carregando catálogo de plantas...</p>
      </div>
    );
  }

  if (plants.length === 0) {
    return (
      <div className="alert alert-secondary text-center" role="alert">
        Nenhuma planta cadastrada no momento.
      </div>
    );
  }

  return (
    <div className="row row-cols-1 row-cols-md-2 g-4">
      {plants.map((plant) => (
        <div className="col" key={plant.id}>
          <PlantCard plant={plant} />
        </div>
      ))}
    </div>
  );
}