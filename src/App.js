import  {useEffect } from 'react';
import './App.css';
import SearchIcon from  './search.svg';
const API_URL = 'http://www.omdbapi.com/?apikey=193381e9';


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
  
          
            
        </div>
    );
};
export default App;