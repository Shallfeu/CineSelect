import { MovieCountriesSelect, MoviePerpageSelect, MovieYearSlider } from 'entities/Movie';
import { useSelector } from 'react-redux';
import { getMoviesPageLimit } from '../../model/selectors/getMoviesPageLimit/getMoviesPageLimit';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { moviesPageActions } from '../../model/slices/moviesPageSlice';
import { fetchMovies } from '../../model/services/fetchMovies/fetchMovies';
import { getMoviesPageYear } from '../../model/selectors/getMoviesPageYear/getMoviesPageYear';
import { getMoviesPageCountries } from '../../model/selectors/getMoviesPageCountries/getMoviesPageCountries';
import { getMoviesPageAgeRating } from '../../model/selectors/getMoviesPageAgeRating/getMoviesPageAgeRating';
import {
    getMoviesPageDefaultYear,
} from '../../model/selectors/getMoviesPageDefaultYear/getMoviesPageDefaultYear';
import { MovieAgeSlider } from 'entities/Movie';
import {
    getMoviesPageDefaultAge,
} from '../../model/selectors/getMoviesPageDefaultAge/getMoviesPageDefaultAge';
import cls from './MoviesPageFilters.module.scss';
import { Heading } from '@chakra-ui/react';
import { DynamicModuleLoader, ReducersList } from 'shared/components/DynamicModuleLoader/DynamicModuleLoader';
import { countryReducer } from 'entities/Country';

const reducers: ReducersList = {
    country: countryReducer,
};

export const MoviesPageFilters = () => {
    const dispatch = useAppDispatch();

    const perpage = useSelector(getMoviesPageLimit);

    const year = useSelector(getMoviesPageYear);
    const defaultYear = useSelector(getMoviesPageDefaultYear);

    const age = useSelector(getMoviesPageAgeRating);
    const defaultAge = useSelector(getMoviesPageDefaultAge);

    const countries = useSelector(getMoviesPageCountries);

    const changedHandler = useCallback(() => {
        dispatch(fetchMovies());
    }, [dispatch]);

    const changePerpageHandler = useCallback((value: number) => {
        dispatch(moviesPageActions.setLimit(value));
        changedHandler();
    }, [changedHandler, dispatch]);

    const changeYearHandler = useCallback((value: number[]) => {
        dispatch(moviesPageActions.setYear(value));
    }, [dispatch]);

    const changeAgeHandler = useCallback((value: number[]) => {
        dispatch(moviesPageActions.setAgeRating(value));
    }, [dispatch]);

    const changeCountriesHandler = useCallback((value: string[]) => {
        dispatch(moviesPageActions.setCountries(value));
        changedHandler();
    }, [changedHandler, dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <div className={cls.filters}>
                <Heading marginBottom="16px" color="goldenrod">Фильтры</Heading>

                <div className={cls.sliders}>
                    <MovieYearSlider
                        year={year ?? defaultYear}
                        defaultYear={defaultYear}
                        onChangeYear={changeYearHandler}
                        onChangedYear={changedHandler}
                    />

                    <MovieAgeSlider
                        age={age ?? defaultAge}
                        defaultAge={defaultAge}
                        onChangeAge={changeAgeHandler}
                        onChangedAge={changedHandler}
                    />
                </div>

                <div className={cls.selects}>
                    <MovieCountriesSelect
                        countries={countries ?? []}
                        onChangeCountries={changeCountriesHandler}
                    />

                    <MoviePerpageSelect
                        perpage={perpage}
                        onChangePerpage={changePerpageHandler}
                    />
                </div>
            </div>
        </DynamicModuleLoader>
    );
};