import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { IAlbums } from '../types/IAlbums';
import PostForm from './UI/Forms/PostForm';

const fetchAlbums = async (): Promise<IAlbums[]> => {
    const { data } = await axios.get<IAlbums[]>("https://jsonplaceholder.typicode.com/albums", {
      params: { _limit: 10 }
    });
    return data;
}

const Post = () => {
    const { data, isLoading, isError } = useQuery("albums", fetchAlbums);

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
            <div>
                {data?.map(item =>
                    <div>
                        {item.title}
                    </div>
                )}
            </div>
            <hr/>
            <PostForm/>
        </div>
    );
};

export default Post;