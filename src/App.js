import './App.css';
import { useState } from 'react';

function App() {
  const [font, setFont] = useState("Roboto");
  return (
    <div className="container">
      <h1 style={{ fontFamily: font}}>Hello World</h1>
      <select onChange={(e) => setFont(e.target.value)}>
        <option value= "Roboto">Roboto</option>
        <option value= "Playfair Display">Playfair Display</option>
        <option value= "Pacifico">Pacifico</option>
        <option value= "Montserrat">Montserrat</option>
        <option value= "Source Code Pro">Source Code Pro</option>
        </select>
    </div>
  );
}

export default App;