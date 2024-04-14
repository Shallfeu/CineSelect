import { actorReducer, ActorsList } from 'entities/Actor';
import React from 'react';
import { DynamicModuleLoader, ReducersList } from 'shared/components/DynamicModuleLoader/DynamicModuleLoader';

interface MovieDetailsPageActorsProps {
    movieId: string;
}

const reducers: ReducersList = {
    actor: actorReducer,
};

export const MovieDetailsPageActors = (props: MovieDetailsPageActorsProps) => {
    const { movieId } = props;

    return (
        <DynamicModuleLoader reducers={reducers} >
            <ActorsList movieId={movieId} />
        </DynamicModuleLoader>
    );
};