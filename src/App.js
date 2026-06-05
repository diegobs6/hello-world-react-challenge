import './App.css';
import { useState } from 'react';

function App() {
  const [font, setFont] = useState("Roboto");
  const [isBold, setIsBold] = useState(false);
  const [textColor, setTextColor] = useState("#000000");
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [text, setText] = useState("Hello World");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tempText, setTempText] = useState("");
  return (
    <>
    <div className="container" style= {{ backgroundColor: backgroundColor}}>
      <h1 style={{ 
        fontFamily: font,
        fontWeight: isBold ? "bold" : "normal",
        color: textColor
      }}>{text}</h1>
      <select onChange={(e) => setFont(e.target.value)}>
        <option value= "Roboto">Roboto</option>
        <option value= "Playfair Display">Playfair Display</option>
        <option value= "Pacifico">Pacifico</option>
        <option value= "Montserrat">Montserrat</option>
        <option value= "Source Code Pro">Source Code Pro</option>
      </select>
      <button onClick={() => setIsBold(!isBold)}>
        {isBold ? "Sacar negrita" : "Negrita"}
      </button>
      <input
        type="color"
        onChange={(e) => setTextColor(e.target.value)}
        />
      <input
        type="color"
        onChange={(e) => setBackgroundColor(e.target.value)}
        />
      </div>
      <button className= "edit-button" onClick={() => setIsModalOpen(true)}>
        ✏️
      </button>
      {isModalOpen && (
      <div className='modal'>
        <p>Editar texto</p>
        <input
          type="text"
          value={tempText}
          onChange={(e) => setTempText(e.target.value)}
        />
        <button onClick={() => {
          setText(tempText);
          setIsModalOpen(false);
      }}>Confirmar</button>
      <button onClick={() => setIsModalOpen(false)}>Cancelar</button>
    </div>
      )}
    </>
  );
}

export default App;