import { PosterCarousel, posterReducer } from 'entities/Poster';
import React from 'react';
import { DynamicModuleLoader, ReducersList } from 'shared/components/DynamicModuleLoader/DynamicModuleLoader';

interface MovieDetailsPagePostersProps {
    movieId: string;
}

const reducers: ReducersList = {
    poster: posterReducer,
};

export const MovieDetailsPagePosters = (props: MovieDetailsPagePostersProps) => {
    const { movieId } = props;

    return (
        <DynamicModuleLoader reducers={reducers} >
            <PosterCarousel movieId={movieId} />
        </DynamicModuleLoader>
    );
};