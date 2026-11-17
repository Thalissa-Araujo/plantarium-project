import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success shadow-sm mb-4">
      <div className="container">
        <span className="navbar-brand fw-bold">Plantarium</span>
        <span className="navbar-text text-white-50">
          Sistema de Catalogação Botânica
        </span>
      </div>
    </nav>
  );
}