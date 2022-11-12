import  {useEffect } from 'react';
import MovieCard from './MovieCard';
import './App.css';
import SearchIcon from  './search.svg';
const API_URL = 'http://www.omdbapi.com/?apikey=193381e9';

const movie1 ={
  
    "Title": "Amazing Spiderman Syndrome",
    "Year": "2012",
    "imdbID": "tt2586634",
    "Type": "movie",
    "Poster": "N/A"

}

const App =() => {
    
    const searchMovies = async (title) =>{
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data.Search)
    };
    useEffect(()=>{searchMovies('Spiderman');},[]);

    return(
        <div className="app">
            <h1>MovieWorld</h1>
            <div className ="search">
                <input 
                  value = ''
                  onChange ={()=> {}}
                  placeHolder ="Search"
                />
                <img
                  src ={SearchIcon}
                  alt =  "search"
                  onClick ={()=> {}}
                />
            </div>

            <div className = "container">
        
                <MovieCard movie1 ={movie1} />
               

            </div>
  
          
            
        </div>
        
    );
};
export default App;