import React from 'react';

export default function PlantCard({ plant }) {
  return (
    <div className="card h-100 shadow-sm border-0">
      <img
        src={plant.imageUrl}
        className="card-img-top"
        alt={plant.commonName}
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-success fw-bold mb-1">{plant.commonName}</h5>
        <h6 className="card-subtitle mb-3 text-muted fst-italic">{plant.scientificName}</h6>
        
        <div className="mb-2 small">
          <strong>Família:</strong> {plant.family} <br />
          <strong>Gênero:</strong> {plant.genus}
        </div>
        
        <p className="card-text small text-secondary mt-auto mb-0">
          {plant.observations}
        </p>
      </div>
    </div>
  );
}