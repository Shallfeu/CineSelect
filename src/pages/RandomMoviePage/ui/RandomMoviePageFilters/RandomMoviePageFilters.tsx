import {
    MovieCountriesSelect,
    MovieGenresSelect,
    MovieIsSeriesCheckbox,
    MovieRatingInput,
    MovieStudioSelect,
    MovieYearSlider,
} from 'entities/Movie';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Heading } from '@chakra-ui/react';
import cls from './RandomMoviePageFilters.module.scss';
import { useSelector } from 'react-redux';
import {
    getRandomMoviePageDefaultYear,
} from '../../model/selectors/getRandomMoviePageDefaultYear/getRandomMoviePageDefaultYear';
import {
    getRandomMoviePageYear,
} from '../../model/selectors/getRandomMoviePageYear/getRandomMoviePageYear';
import { randomMovieActions } from 'pages/RandomMoviePage/model/slice/RandomMovieSlice';
import {
    getRandomMoviePageCountries,
} from '../../model/selectors/getRandomMoviePageCountries/getRandomMoviePageCountries';
import {
    getRandomMoviePageIsSeries,
} from 'pages/RandomMoviePage/model/selectors/getRandomMoviePageIsSeries/getRandomMoviePageIsSeries';
import {
    getRandomMoviePageRating,
} from 'pages/RandomMoviePage/model/selectors/getRandomMoviePageRating/getRandomMoviePageRating';
import {
    getRandomMoviePageGenres,
} from 'pages/RandomMoviePage/model/selectors/getRandomMoviePageGenres/getRandomMoviePageGenres';
import {
    getRandomMoviePageStudios,
} from 'pages/RandomMoviePage/model/selectors/getRandomMoviePageStudios/getRandomMoviePageStudios';
import { DynamicModuleLoader, ReducersList } from 'shared/components/DynamicModuleLoader/DynamicModuleLoader';
import { countryReducer } from 'entities/Country';
import { genreReducer } from 'entities/Genre';
import { studioReducer } from 'entities/Studio';

const reducers: ReducersList = {
    country: countryReducer,
    genre: genreReducer,
    studio: studioReducer,
};

export const RandomMoviePageFilters = () => {
    const dispatch = useAppDispatch();

    const year = useSelector(getRandomMoviePageYear);
    const defaultYear = useSelector(getRandomMoviePageDefaultYear);

    const countries = useSelector(getRandomMoviePageCountries);

    const genres = useSelector(getRandomMoviePageGenres);

    const studios = useSelector(getRandomMoviePageStudios);

    const rating = useSelector(getRandomMoviePageRating);

    const isSeries = useSelector(getRandomMoviePageIsSeries);

    const changeYearHandler = useCallback((value: number[]) => {
        dispatch(randomMovieActions.setYear(value));
    }, [dispatch]);

    const changeCountriesHandler = useCallback((value: string[]) => {
        dispatch(randomMovieActions.setCountries(value));
    }, [dispatch]);

    const changeGenresHandler = useCallback((value: string[]) => {
        dispatch(randomMovieActions.setGenres(value));
    }, [dispatch]);

    const changeStudiosHandler = useCallback((value: string[]) => {
        dispatch(randomMovieActions.setStudios(value));
    }, [dispatch]);

    const changeRatingHandler = useCallback((value: number) => {
        dispatch(randomMovieActions.setRating(value));
    }, [dispatch]);

    const changeIsSeriesHandler = useCallback((value: boolean) => {
        dispatch(randomMovieActions.setIsSeries(value));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={cls.filters}>
                <Heading marginBottom="16px" color="goldenrod">Фильтры</Heading>

                <div className={cls.sliders}>
                    <MovieYearSlider
                        year={year ?? defaultYear}
                        defaultYear={defaultYear}
                        onChangeYear={changeYearHandler}
                    />
                </div>

                <div className={cls.selects}>
                    <MovieCountriesSelect
                        countries={countries ?? []}
                        onChangeCountries={changeCountriesHandler}
                    />

                    <MovieGenresSelect
                        genres={genres ?? []}
                        onChangeGenres={changeGenresHandler}
                    />

                    <MovieStudioSelect
                        studios={studios ?? []}
                        onChangeStudios={changeStudiosHandler}
                    />
                </div>

                <div className={cls.bottom}>
                    <MovieRatingInput
                        value={rating}
                        onChangeHandler={changeRatingHandler}
                    />

                    <MovieIsSeriesCheckbox
                        value={isSeries}
                        onChangeHandler={changeIsSeriesHandler}
                    />
                </div>
            </div>
        </DynamicModuleLoader>
    );
};