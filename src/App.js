import './App.css';
import useFetch from './useFetch';

function App() {
  const BASE_URL = "https://inshortsapi.vercel.app/news?category=science";

   const {data, loading, error} = useFetch(BASE_URL);

   
  return (
    <div className="App">
      <h2>Learning Custom Hooks</h2>
      {loading && <h3>Loading...</h3>}
      {error && <h3>Error: something went wrong</h3>}
      
      <div>
         <pre>{JSON.stringify(data, undefined, 2)}</pre>
      </div>
    </div>
  );
}

export default App;
