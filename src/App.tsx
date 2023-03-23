import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { IAlbums } from './types/IAlbums';

function App() {
  // const [albums, setAlbums] = useState<IAlbums[] | null>(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(false);
  
  // useEffect(() => {
  //   fetchAlbumsQuery();
  // }, [])
  
  // const fetchAlbums = async () => {
  //   try {
  //     const { data } = await axios.get<IAlbums[]>("https://jsonplaceholder.typicode.com/albums?limit=10");
  //     setAlbums(data);
  //   } catch (error) {
  //     setError(true);
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  const fetchAlbumsQuery = async () => {
    const { data } = await axios.get<IAlbums[]>("https://jsonplaceholder.typicode.com/albums?limit=10");

    return data;
  }

  if (loading) {
    return <h3>Идёт загрузка...</h3>
  }

  if (error) {
    return <h3>Ошибка при получении данных</h3>
  }

  if (!albums) {
    return <h3>Нет данных</h3>
  }
    
  return (
    <div>
      {albums.map(item =>
        <div>
          {item.id}
        </div>
      )}
    </div>
  );
}

export default App;
