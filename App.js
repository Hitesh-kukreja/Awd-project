import './index.css'
import React,{useState} from 'react'

export default function App() {
  const [weight,setWeight] = useState(0)
const [height,setHeight] = useState(0)
const [bmi,setBmi] = useState('')
const [message,setMessage] = useState('Enter The Data Above to Get ur BMI')


let calcBmi = (event) =>{
  event.preventDefault()

  if(weight===0 || height===0){
  alert('Please Enter a Valid Weight or Height')
  }
  else{
    let bmi=(weight/(height*height))
    setBmi(bmi.toFixed(1))

    if(bmi<18.5)
    setMessage("You Are Under-Weight")
    else if(bmi<25)
    setMessage("You Are Normal-Weight")
    else if(bmi<30)
    setMessage("You are Over-Weight")
    else
    setMessage("Obese")
  }
}



  return(
  <div className="App">
    <div className="container">
    <h2 className="center">BMI CALCULATOR</h2>
      <form onSubmit={calcBmi}>
        <div>
            <div>
              <label>Weight(KG)</label>
              <input value={weight} onChange={(event) => setWeight(event.target.value)} />
            </div>
              <div>
                <label>Height(M)</label>
                <input value={height} onChange={(event) => setHeight(event.target.value)}/>
              </div>
        </div>
        <button className='btn' type='submit'>SUBMIT</button>
      </form>
      <div className="center">
        <h3> Your BMI is : {bmi}</h3>
        <p><strong>{message}</strong></p>
      </div>
      </div>
  </div>
  )
}