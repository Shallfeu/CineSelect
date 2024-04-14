import React, { useCallback, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchActors } from '../../model/services/fetchActors/fetchActors';
import { useSelector } from 'react-redux';
import { getActorIsLoading } from '../../model/selectors/getActorIsLoading/getActorIsLoading';
import { getActorError } from '../../model/selectors/getActorError/getActorError';
import { Divider, Heading } from '@chakra-ui/react';
import { ActorsCard } from 'entities/Actor/ui/ActorsCard/ActorsCard';
import { InfiniteScroll } from 'shared/ui/InifiniteScroll/InfiniteScroll';
import { ActorsCardSkeleton } from '../ActorsCardSkeleton/ActorsCardSkeleton';
import cls from './ActorsList.module.scss';
import { fetchNextActors } from '../../model/services/fetchNextActors/fetchNextActors';
import { actorActions, getActors } from '../../model/slice/actorSlice';

interface ActorsListProps {
    movieId: string;
}

const getSkeletons = () => new Array(10)
    .fill(0)
    .map((_, index) => (
        <ActorsCardSkeleton key={index} />
    ));

export const ActorsList = (props: ActorsListProps) => {
    const { movieId } = props;

    const dispatch = useAppDispatch();

    const actors = useSelector(getActors.selectAll);
    const isLoading = useSelector(getActorIsLoading);
    const error = useSelector(getActorError);

    const loadNextPartHandler = useCallback(() => {
        dispatch(fetchNextActors({ movieId }));
    }, [dispatch, movieId]);

    useEffect(() => {
        dispatch(actorActions.clearState());
        dispatch(fetchActors({ movieId, replace: true }));
    }, [dispatch, movieId]);

    if (error) {
        return <>{error}</>;
    }

    return (
        <>
            <div>
                <Heading>Актеры</Heading>

                {!actors.length && (<Heading>Нет информации о актерах</Heading>)}

                <InfiniteScroll
                    className={cls.actorsList}
                    onScrollEnd={loadNextPartHandler}
                >
                    {
                        actors.map(({ id, photo, name, enName }) => (
                            <ActorsCard
                                key={id}
                                photo={photo}
                                name={name}
                                enName={enName}
                            />
                        ))
                    }
                    {isLoading && getSkeletons()}
                </InfiniteScroll>

                <Divider borderWidth="4px" borderColor="khaki" margin="32px 0" />
            </div>
        </>
    );
};