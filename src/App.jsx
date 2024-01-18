import React, { useState } from 'react';
import './App.css';


const App = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [calculate, setCalculate] = useState('');
  const [reset, setReset] = useState(0);

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };

  const calculateBMI = (event) => {
    event.preventDefault();
    const heightInMeters = height * 0.3048;
    const calculatedBMI = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setCalculate(calculatedBMI);
  };

  const clear = (event) => {
    event.preventDefault();
    setWeight('');
    setHeight('');
    setCalculate('');
    setReset(reset + 1);
  };

  return (
    <>
      <h1>Calculate Your BMI</h1>
      <form>
        <div className='container1'>
          <label>Weight:</label>
          <input type="text" value={weight} onChange={handleWeightChange} />
        </div>
        <div className='container2'>
          <label>Height:</label>
          <input type="text" value={height} onChange={handleHeightChange} />
        </div>
        <button className='calc' onClick={calculateBMI}>
          Calculate
        </button>
        <button className='clr' onClick={clear}>
          Reset
        </button>
        <h4>Your BMI is: {calculate} </h4>
        <div className='cat1'>
           <h3>BMI Categories</h3>
          <li>Underweight = 18.5</li>
          <li>Normal weight = 18.5 – 24.9</li>
          <li>Overweight = 25 – 29.9</li>
          <li>Obesity = BMI of 30 or greater</li>
         </div>
      </form>
    </>
  );
};

export default App;
