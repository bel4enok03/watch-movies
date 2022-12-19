import { useState } from 'react';
import { data } from './data';
import './App.css';


function App() {
  const [movie, setMovie] = useState(0);
  const {id, name, genre, year, image } = data[movie];
  const previousMovie = () => { 
    setMovie ((movie => {
      movie --;
      if (movie < 0) {
        return data.length - 1;
      }
      return movie;
    }))
  }

  const nextMovie = () => {
    setMovie ((movie => {
      movie ++;
      if (movie > data.length - 1) {
        movie = 0;
      }
      return movie;
    }))
  }

  return (
    <div>
      <div className='container'>
        <h1>Viewing list of {data.length} movies</h1>
      </div>
      <div className='container'>
        <img src={image} width='300px' height='450px' alt='movie' />
      </div>
      <div className='container'>
      <h2>{id} - {name}</h2>
      </div>
      <div className='container'>
        <p>{genre}</p>
      </div>
      <div className='container'>
      <p>{year}</p>
      </div>
    <div className='btn container'>
      <button onClick={previousMovie}>Previous</button>
      <button onClick={nextMovie}>Next</button>
    </div>
    </div>
  );
}

export default App;
