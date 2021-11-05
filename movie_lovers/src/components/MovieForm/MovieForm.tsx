import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseName, chooseGenre, chooseYear } from '../../redux/slices/rootSlice';
import { Input } from '../sharedComponents/Input';
import { Button } from '@material-ui/core';

import { server_calls } from '../../api';

import { useGetData } from '../../custom-hooks';

interface MovieFormProps {
    id?: string;
    data?: {}
}

interface MovieState {
    name: string;
    price: string;
}

export const MovieForm = (props: MovieFormProps) => {

    const dispatch = useDispatch();
    let { movieData, getData } = useGetData();
    const store = useStore()
    const name = useSelector<MovieState>(state => state.name)
    const { register, handleSubmit } = useForm({})

    const onSubmit = async (data: any, event: any) => {
        console.log(props.id)
        console.log(props)

        if (props.id!) {
            await server_calls.update(props.id!, data)
            console.log(`Updated:${data} ${props.id}`)
            window.location.reload()
            event.target.reset();
        } else {
            dispatch(chooseName(data.name))
            dispatch(chooseGenre(data.genre))
            dispatch(chooseYear(data.year))
            await server_calls.create(store.getState())
            window.location.reload()
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Movie Name</label>
                    <Input {...register('name')} name="name" placeholder='Name' />
                </div>
                <div>
                    <label htmlFor="genre">Genre</label>
                    <Input {...register('genre')} name="genre" placeholder="Genre" />
                </div>
                <div>
                    <label htmlFor="year">Year</label>
                    <Input {...register('year')} name="year" placeholder="Year" />
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}