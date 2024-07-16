import React, { useState } from 'react';
import './App.css';
import data from './data.json';
import Main from './Main';
import Nav from './Nav';

function App() {
  const [paint, setPaint] = useState(0);
 
const nextPaint = () => {
  setPaint((paint) => {
    paint++;
    if (paint > data.length - 1) {
      paint = 0;
    }
    return paint;
  })
};

const prevPaint = () => {
  setPaint((paint) => {
    paint--;

    if (paint < 0) {
      return data.length - 1;
    }
    return paint
  })
}

  return (
    <div className="App">
      <Nav nextPaint={nextPaint} prevPaint={prevPaint} />
      <Main data={data[paint]} />
    </div>
  );
}

export default App;
