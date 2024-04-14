import {
    Divider,
    Heading,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import {
    getMovieRecommendations,
} from '../../model/selectors/getMovieRecommendations/getMovieRecommendations';
import { MovieRecommendationsCard } from '../MovieRecommendationsCard/MovieRecommendationsCard';
import cls from './MovieRecommendationsList.module.scss';
import React from 'react';

export const MovieRecommendationsList = () => {
    const movieRecommendations = useSelector(getMovieRecommendations);

    if (!movieRecommendations.length) {
        return;
    }

    return (
        <>
            <div>
                <Heading>Похожие фильмы и сериалы</Heading>

                <div className={cls.movieList}>
                    {
                        movieRecommendations.map(({ id, name, year, poster }) => (
                            <MovieRecommendationsCard
                                key={id}
                                id={id}
                                poster={poster.url}
                                name={name}
                                year={year}
                            />
                        ))
                    }
                </div>
            </div>

            <Divider borderWidth="4px" borderColor="khaki" margin="32px 0" />
        </>
    );
};