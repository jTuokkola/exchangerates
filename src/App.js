
import './App.css';
import { useState } from 'react';
const URL = "https://api.exchangerate.host/latest"

function App() {
  const [eur, setEur] = useState(0)
  const [gbp, setGbp] = useState(0)
  const [rate, setRate] = useState(0)

  async function Convert(e){
    e.preventDefault()
    try{
      const address = URL
      const response = await fetch(address)
      if(response.ok){
        const json = await response.json()
        setRate(json.rates.GBP)
        setGbp(eur*json.rates.GBP)
      }else{
        alert("Error retrieving data.")
      }
    }catch(err){
      alert(err)
    }
  }

  return (
    <div>
      <form onSubmit={Convert}>
        <div>
          <h3> Exchange rates </h3>
          <label>Eur </label>
          <input type="number" step="0.01" value={eur} onChange={e=>setEur(e.target.value)}/>
          <div>
          <label>Rate </label>
          <output>{rate}</output>
          </div>
        </div>
        <div class="gbpcontainer">
         <label>GBP </label>
         <output>{gbp.toFixed(2)}</output>
        </div>
        <button>Calculate</button>
      </form>
    </div>
  );
}

export default App;
