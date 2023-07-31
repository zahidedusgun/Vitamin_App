import { useEffect,useState } from 'react';
import Vitamins from './components/Vitamins';
import './App.css';
import Loading from './components/Loading';


function App() {
const [vitamins, setVitamins] = useState([]);
const [loading, setLoading] = useState(true);

const remove = (id) => {//silme
  const newVitamins = vitamins.filter((vitamin) => vitamin.id !== id);
  setVitamins(newVitamins);
}


  const fetchVitamins = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:3000/vitamins');
      const responseJson = await response.json();
      setVitamins(responseJson);
      setLoading(false);
    }
    catch (error) {
      console.log(error);
      setLoading(false);
    }
    
    debugger;
  };

useEffect(() => {
  fetchVitamins();
}, []);//bir kere çağrılacak.

  return (
    
    <div className="App">
       {loading ?(
        <Loading />) : (
        <>
        {
          vitamins.length === 0 ? (

        <div className='Refresh'>
            <h1>No Vitamin!!</h1>
            <br></br>
            <button className='btn btn-success' 
            onClick={() => {fetchVitamins();}}>Refresh</button>
        </div>  
          ) : (

            <Vitamins vitamins={vitamins} remove={remove}/> 

          )
        }
      
        </>
        )}

    </div>);}

export default App;
