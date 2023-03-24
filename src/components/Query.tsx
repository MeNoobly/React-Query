import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { IAlbums } from '../types/IAlbums';
import Button from './UI/Button/Button';

const Query = () => {
    const fetchAlbums = async (page: number): Promise<IAlbums[]> => {
        const { data } = await axios.get<IAlbums[]>("https://jsonplaceholder.typicode.com/albums", {
          params: { _limit: 5, _page: page }
        });
        return data;
    }
    
    const [page, setPage] = useState(0);
    const { data, isLoading, isError } = useQuery(
        ["albums", page], 
        () => fetchAlbums(page),
        {
          keepPreviousData: true, // Поддергивание при загрузке
          refetchOnWindowFocus: false // При фокусировке на приложене запрос отправляется еще раз
        }
    );

    if (isLoading) {
        return <h3>Идёт загрузка...</h3>
    }

    if (isError) {
        return <h3>Ошибка при получении данных</h3>
    }

    if (!data) {
        return <h3>Нет данных</h3>
    }
      
    return (
        <div>
            {data?.map(item =>
                <div>
                    {item.title}
                </div>
            )}
            <Button 
                onClick={() => setPage(p => p - 2)}
                disabled={!page}
                text="Назад"
            />
            <Button 
                onClick={() => setPage(p => p + 2)}
                text="Далее"
            />
        </div>
    );
};

export default Query;