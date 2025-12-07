import React, { useState } from 'react'

const App = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState("");
  const [color, setColor] = useState("");

  const calculateBMI = () => {
    if (!height || !weight) {
      setResult("Please enter both height and weight");
      setColor("gray");
      return;
    }

    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);

    let category = "";
    let resultColor = "";

    if (bmi < 18.5) {
      category = "Underweight";
      resultColor = "blue";
    } else if (bmi < 25) {
      category = "Normal Weight";
      resultColor = "green";
    } else if (bmi < 30) {
      category = "Overweight";
      resultColor = "orange";
    } else {
      category = "Obese";
      resultColor = "red";
    }

    setColor(resultColor);
    setResult(`Your BMI is ${bmi}. You are ${category}.`);
  };

  const resetFields = () => {
    setHeight("");
    setWeight("");
    setResult("");
    setColor("");
  };

  return (
    <div className='container'>
      <div className='content'>
        <p>BMI-Calculator</p>

        <label htmlFor="height">Height (cm)</label>
        <input
          type="number"
          id="height"
          placeholder="e.g. 165"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />

        <label htmlFor="weight">Weight (kg)</label>
        <input
          type="number"
          id="weight"
          placeholder="e.g. 60"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />

        <div className="btn-row">
          <button onClick={calculateBMI}>Submit</button>
          <button className="reset-btn" onClick={resetFields}>Reset</button>
        </div>

        <div className='result' style={{ color: color }}>
          {result}
        </div>
      </div>
    </div>
  );
}

export default App;