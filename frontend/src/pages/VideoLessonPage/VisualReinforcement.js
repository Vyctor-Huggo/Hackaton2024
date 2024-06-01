import React from 'react';

const VisualReinforcement = ({ images }) => {
  return (
    <div className="visual-reinforcement">
      <h2>Relembre:</h2>
      <div className="image-grid">
        {images.map((image, index) => (
          <img key={index} src={image.src} alt={image.alt} className="img-fluid" />
        ))}
      </div>
    </div>
  );
};

export default VisualReinforcement;
