import React from 'react';
import { Page } from 'widgets/Page';
import { useParams } from 'react-router-dom';
import { MovieDetailsPageHeader } from '../MovieDetailsPageHeader/MovieDetailsPageHeader';
import { MovieDetailsPageReviews } from '../MovieDetailsPageReviews/MovieDetailsPageReviews';
import {
    getMovieDetailsPageIsSeries,
    MovieDetails,
    movieDetailsReducer,
    MovieRecommendationsList,
} from 'entities/Movie';
import { MovieDetailsPageSeasons } from '../MovieDetailsPageSeasons/MovieDetailsPageSeasons';
import { Divider } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { DynamicModuleLoader, ReducersList } from 'shared/components/DynamicModuleLoader/DynamicModuleLoader';
import { MovieDetailsPagePosters } from 'pages/MovieDetailsPage/ui/MovieDetailsPagePosters/MovieDetailsPagePosters';
import { MovieDetailsPageActors } from 'pages/MovieDetailsPage/ui/MovieDetailsPageActors/MovieDetailsPageActors';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';

const reducers: ReducersList = {
    movieDetails: movieDetailsReducer,
};

const MovieDetailsPage = () => {
    const { id } = useParams<{ id: string }>();
    const isSeries = useSelector(getMovieDetailsPageIsSeries);

    useInitialEffect(() => {})

    if (!id) {
        return (
            <>
                There is no movie here
            </>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} >
            <Page>
                <MovieDetailsPageHeader />

                <MovieDetails id={id} />

                <MovieDetailsPagePosters movieId={id} />

                {isSeries && (
                    <>
                        <MovieDetailsPageSeasons movieId={id} />
                        <Divider borderWidth="4px" borderColor="khaki" margin="32px 0" />
                    </>
                )}

                <MovieDetailsPageActors movieId={id} />

                <MovieRecommendationsList />

                <MovieDetailsPageReviews movieId={id} />
            </Page>
        </DynamicModuleLoader>
    );
};

export default MovieDetailsPage;