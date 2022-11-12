import React, {useEffect } from 'react';




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
  
          
            
        </div>
    );
};
export default App;