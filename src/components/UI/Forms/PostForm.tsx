import axios from 'axios';
import React, { FC } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { IAlbums } from '../../../types/IAlbums';
import Button from '../Button/Button';
import Input from '../Input/Input';

const PostForm: FC = () => {
    const queryClient = useQueryClient();

    const createPost = <T extends unknown>(data: T, url: string) => {
        return axios.post(url, data)
    }
    
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    
        const formData = new FormData(event.currentTarget);
        const fields = Object.fromEntries(formData);
    
        mutation.mutate({userId: Date.now(), id: Date.now(), title: fields.album.toString()});
        
        event.currentTarget.reset();
    }

    const mutation = useMutation((newItem: IAlbums) => createPost(newItem, "https://jsonplaceholder.typicode.com/albums"), {
        onSuccess: () => queryClient.invalidateQueries(["albums"]),
    });
    
    return (
        <form onSubmit={onSubmit}>
            <Input name="album" type="text" placeholder="Название альбома" />
            <Button text="Добавить"/>
        </form>
    )
    
};

export default PostForm;