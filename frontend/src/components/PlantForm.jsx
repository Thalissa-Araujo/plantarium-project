import React, { useState } from 'react';

const initialFormState = {
  commonName: '',
  scientificName: '',
  family: '',
  genus: '',
  imageUrl: '',
  observations: ''
};

export default function PlantForm({ onAddPlant }) {
  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previousData) => ({
      ...previousData,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      await onAddPlant(formData);
      setFormData(initialFormState);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="card shadow-sm border-0">
      <div className="card-header bg-white border-bottom-0 pt-4 pb-0">
        <h5 className="card-title fw-bold text-dark">Cadastro de Planta</h5>
        <p className="text-muted small mb-0">Preencha os dados para adicionar ao catálogo</p>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="commonName" className="form-label small fw-semibold">
              Nome Comum *
            </label>
            <input
              type="text"
              className="form-control"
              id="commonName"
              name="commonName"
              placeholder="Ex: Margarida"
              value={formData.commonName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="scientificName" className="form-label small fw-semibold">
              Nome Científico *
            </label>
            <input
              type="text"
              className="form-control"
              id="scientificName"
              name="scientificName"
              placeholder="Ex: Bellis perennis"
              value={formData.scientificName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="family" className="form-label small fw-semibold">
                Família
              </label>
              <input
                type="text"
                className="form-control"
                id="family"
                name="family"
                placeholder="Ex: Asteraceae"
                value={formData.family}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label htmlFor="genus" className="form-label small fw-semibold">
                Gênero
              </label>
              <input
                type="text"
                className="form-control"
                id="genus"
                name="genus"
                placeholder="Ex: Bellis"
                value={formData.genus}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="imageUrl" className="form-label small fw-semibold">
              URL da Imagem
            </label>
            <input
              type="url"
              className="form-control"
              id="imageUrl"
              name="imageUrl"
              placeholder="https://exemplo.com/foto-planta.jpg"
              value={formData.imageUrl}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="observations" className="form-label small fw-semibold">
              Observações
            </label>
            <textarea
              className="form-control"
              id="observations"
              name="observations"
              rows="3"
              placeholder="Características da planta, habitat ou cuidados..."
              value={formData.observations}
              onChange={handleChange}
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn btn-success w-100 fw-semibold"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Salvando...' : 'Adicionar ao Catálogo'}
          </button>
        </form>
      </div>
    </div>
  );
}