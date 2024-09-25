import React from 'react';

export default function CustomButton({ text }) {
  return (
    <button className="custom-button btn btn-info m-2">
      {text}
    </button>
  );
}
