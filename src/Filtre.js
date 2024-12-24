import React from "react";

function Filtre({ filter, onFilterChange }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onFilterChange({ ...filter, [name]: value });
  };

  return (
    <div className="row mb-4">
      <div className="col-md-6">
        <input
          type="text"
          name="title"
          className="form-control"
          placeholder="Rechercher par titre..."
          value={filter.title}
          onChange={handleChange}
        />
      </div>
      <div className="col-md-6">
        <input
          type="number"
          name="rating"
          className="form-control"
          placeholder="Rechercher par note..."
          value={filter.rating}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default Filtre;
