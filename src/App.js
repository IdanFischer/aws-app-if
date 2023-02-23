import { useEffect } from 'react';
import './App.css';

function App() {
  console.log(process.env.REACT_APP_API_ENDPOINT)

  useEffect(() => {
    fetch(process.env.REACT_APP_API_ENDPOINT)
    .then(res => res.json())
    .then(data => console.log('data from server -->', data))
    .catch(console.error)
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <h1>hi class</h1>
      </header>
    </div>
  );
}

export default App;
