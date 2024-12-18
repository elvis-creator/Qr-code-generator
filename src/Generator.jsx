import React, { useState } from 'react';
import QRCode from 'react-qr-code';

const Generator = () => {

  const [qrCode, setQrCode] = useState(''); // State for storing QR code value
  const [input, setInput] = useState('');  // State for storing input text

  // Function to generate QR code from the input value
  const handleGenerateQrCode = () => {
    setQrCode(input); // Set the input value to qrCode state
    setInput('')
  };

  return (
    <>
      <div className="qr-generator-container">
        <h1 className="title">QR Code Generator</h1>
        <div className="input-container">
          <input 
            onChange={(e) => setInput(e.target.value)} 
            type="text" 
            name="Qr code" 
            value={input}
            placeholder="Enter your value..." 
            className="input-field" 
          />
          <button 
            disabled={input && input.trim() !== '' ? false : true}
            onClick={handleGenerateQrCode} 
            className="generate-button"
          >
            Generate
          </button>
        </div>
        <div className="qr-code-container">
          <QRCode id="qr-code-value" value={qrCode} />
        </div>
      </div>
    </>
  );
};

export default Generator;
