import {useState, useEffect} from "react";
import MovieCard from "./MovieCard";
//c00a648b
import './App.css';
import searchIcon from './search.svg';
const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=c00a648b';

const movie1 = {
  Title:  "Guardians of the Galaxy Vol. 2",
  Type: "movie",
  Year: "2017",
  imdbID: "tt3896198",
  Poster: "N/A"
  }
const App = () => {
  
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }
  useEffect(()=>{
    searchMovies('Batman');
    
}, []);


  return(
<div className="app">
<h1>FLIM JOURNEY</h1>

<div className="search">
  <input
      placeholder="search for movies"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}

      />
      <img
      src={searchIcon}
      alt="search"
      onClick={() => searchMovies(searchTerm)} 
      />
</div>


  {movies?.length > 0
  ? (
  <div className="container">
     {movies.map((movie) => (
  <MovieCard movie={movie}/>
 ))}
  </div>
  ) : (
    <div className="empty">
      <h2>no movies found</h2>
    </div>
  )
  }




    </div>
  );
}

export default App;
