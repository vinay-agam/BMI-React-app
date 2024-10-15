import React, { useState } from 'react'

const App = () => {

  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState("");
  const [error, setError] = useState("")

  function calculateBmi() {
    const validateHeight = /^\d+$/.test(height);
    const validateWeight = /^\d+$/.test(weight);


    if(validateHeight && validateWeight){ 
      const heightInMetre = height/100;
      const bmiValue = weight / (heightInMetre * heightInMetre) 
       setBmi(bmiValue.toFixed(2));

       if (bmiValue < 18.5){
        setStatus("Under Weight")
       }else if(bmiValue >= 18.5 && bmiValue < 24.9){
        setStatus("Normal Weight")
       }else if(bmiValue >= 25 && bmiValue < 29){
        setStatus("Over Weight")
       }else{
        setStatus("obese")
       }
    }
    else{
      setBmi(null);
      setStatus("")
      setError("Please enter the valid input height and weight")
    }
  }

  function clear() {
    setBmi(null);
    setStatus("")
    setHeight("")
    setWeight("")
    setError("")
    
  }


  return (
    <>
      <div className='max-w-screen-md w-[500px] mx-auto p-12 rounded-md bg-gray-300'>
        <h1 className='text-blue-800 font-bold text-2xl'>BMI Calculator</h1>
        <div className='my-4 flex flex-col items-center justify-center w-full'>
          <p className='text-red-700 text-left w-full'>{error}</p>
          <label htmlFor="height" className='w-full text-left' >Height (cm)</label>
          <input type="text" id='height' onChange={(e)=>{setHeight(e.target.value)}} value={height} className='w-full rounded-md mt-2 mb-4 outline-none p-2 bg-slate-100' />
          <label htmlFor="weight" className='w-full text-left'>weight (kg)</label>
          <input type="text" id='weight' onChange={(e)=>{setWeight(e.target.value)}} value={weight} className='w-full rounded-md mt-2 mb-4 outline-none p-2 bg-slate-100' />
        <div className='flex gap-4 w-full'>
          <button onClick={calculateBmi} className='bg-blue-700 hover:bg-blue-800 text-white w-full p-2 rounded-md'>Caluculate BMI</button>
          <button onClick={clear} className='bg-red-700 hover:bg-red-800 text-white w-full p-2 rounded-md'>Clear BMI</button>
        </div> 
          {
            bmi !== null && (<div className='my-4 text-left border-blue-800 border-2 p-2 w-full '>
            <p className='text-blue-800 font-bold'>Your BMI is: {bmi}</p>
            <p>status: {status}</p>
          </div>)
          }
          
        </div>
      </div>
    </>
  )
}

export default App