import React from 'react';

export default function CustomButton({ text, onClick }) {
  return (
    <button className="custom-button btn btn-info m-2" onClick={onClick}>
      {text}
    </button>
  );
}
