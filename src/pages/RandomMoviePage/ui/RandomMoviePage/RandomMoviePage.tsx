import React from 'react';
import { Page } from 'widgets/Page';
import { RandomMoviePageFilters } from '../RandomMoviePageFilters/RandomMoviePageFilters';
import { Button, Flex, Heading } from '@chakra-ui/react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchRandomMovie } from '../../model/services/fetchRandomMovie/fetchRandomMovie';
import { useSelector } from 'react-redux';
import {
    getRandomMoviePageData,
} from '../../model/selectors/getRandomMoviePageData/getRandomMoviePageData';
import { MovieItem } from 'entities/Movie';
import { DynamicModuleLoader, ReducersList } from 'shared/components/DynamicModuleLoader/DynamicModuleLoader';
import { randomMovieReducer } from 'pages/RandomMoviePage';
import {
    getRandomMoviePageIsLoading,
} from 'pages/RandomMoviePage/model/selectors/getRandomMoviePageIsLoading/getRandomMoviePageIsLoading';
import {
    getRandomMoviePageError,
} from 'pages/RandomMoviePage/model/selectors/getRandomMoviePageError/getRandomMoviePageError';
import { PageLoader } from 'widgets/PageLoader';

const reducers: ReducersList = {
    randomMovie: randomMovieReducer,
};

const RandomMoviePage = () => {
    const dispatch = useAppDispatch();

    const movie = useSelector(getRandomMoviePageData);
    const isLoading = useSelector(getRandomMoviePageIsLoading);
    const error = useSelector(getRandomMoviePageError);

    const fetchRandomMovieHandler = () => {
        dispatch(fetchRandomMovie());
    };

    if (error) {
        return (
            <Flex justify='center' align="center">
                <Heading>{error}</Heading>
            </Flex>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page>
                <Flex
                    w="full"
                    direction="column"
                    align="center"
                    justify="center"
                >
                    <RandomMoviePageFilters />

                    {isLoading && <PageLoader />}

                    {movie && (
                        <MovieItem movie={movie} />
                    )}

                    {movie === null && (
                        <Heading>Нет фильма по данным требованиям</Heading>
                    )}

                    <Button
                        marginTop="16px"
                        w="full"
                        size="lg"
                        colorScheme="yellow"
                        variant="solid"
                        onClick={fetchRandomMovieHandler}
                    >
                        Случайный фильм
                    </Button>
                </Flex>
            </Page>
        </DynamicModuleLoader>
    );
};

export default RandomMoviePage;