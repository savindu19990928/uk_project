import React from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const FilterButton = ({ onClick, btnLabel }) => {
  return (
    <button
      className="d-inline-block border rounded-pill fs-sm fw-medium text-body text-decoration-none py-1 px-2 me-2 mb-2 chat-button"
      onClick={onClick}
    >
      <span className="d-inline-flex align-items-center text-nowrap px-1 textcr">
        {btnLabel}
        <i className="ai-circle-x fs-base ms-1"></i>
      </span>
    </button>
  );
};

export default FilterButton;