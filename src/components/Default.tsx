import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { IAlbums } from '../types/IAlbums';

const Default = () => {
    const [albums, setAlbums] = useState<IAlbums[] | null>(null);
    const [isLoading, setLoading] = useState(true);
    const [isError, setError] = useState(false);

    useEffect(() => {
        fetchAlbums();
      }, [])

    const fetchAlbums = async () => {
        try {
          const { data } = await axios.get<IAlbums[]>("https://jsonplaceholder.typicode.com/albums?limit=10");
          setAlbums(data);
        } catch (error) {
          setError(true);
        } finally {
          setLoading(false);
        }
    }

    if (isLoading) {
        return <h3>Идёт загрузка...</h3>
    }

    if (isError) {
        return <h3>Ошибка при получении данных</h3>
    }

    if (!albums) {
        return <h3>Нет данных</h3>
    }

    return (
        <div>
            {albums?.map(item =>
                <div>
                    {item.title}
                </div>
            )}
        </div>
    );
};

export default Default;