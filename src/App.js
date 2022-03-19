import { useEffect, useState } from 'react';

const App = () => {
  let [pokeData, setPokeData] = useState();

  useEffect(() => {
      const fetchData = async () => {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
        console.log(response)
        const data = await response.json();
        console.log(data)
        setPokeData(data.name);
      }
      fetchData();    
  }, []);
  
  return (
    <p>{pokeData}</p>
  );
}

export default App;