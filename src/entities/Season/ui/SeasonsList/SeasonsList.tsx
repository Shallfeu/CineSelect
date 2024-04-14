import { useCallback, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import {
    Heading,
} from '@chakra-ui/react';
import { fetchSeasons } from '../../model/services/fetchSeasons/fetchSeasons';
import { getSeasonIsLoading } from '../../model/selectors/getSeasonIsLoading/getSeasonIsLoading';
import { getSeasonError } from '../../model/selectors/getSeasonError/getSeasonError';
import { getSeasons, seasonActions } from '../../model/slice/seasonSlice';
import { fetchNextSeasons } from '../../model/services/fetchNextSeasons/fetchNextSeasons';
import { InfiniteScroll } from 'shared/ui/InifiniteScroll/InfiniteScroll';
import { SeasonsCardSkeleton } from '../SeasonsCardSkeleton/SeasonsCardSkeleton';
import cls from './SeasonsList.module.scss';
import { SeasonsCard } from '../SeasonsCard/SeasonsCard';

interface SeasonsListProps {
    movieId: string;
    onSelectSeason: (id: number) => void;
    selectedSeason: string | null;
}

const getSkeletons = () => new Array(10)
    .fill(0)
    .map((_, index) => (
        <SeasonsCardSkeleton key={index} />
    ));

export const SeasonsList = (props: SeasonsListProps) => {
    const { selectedSeason, movieId, onSelectSeason } = props;

    const dispatch = useAppDispatch();

    const seasons = useSelector(getSeasons.selectAll);
    const isLoading = useSelector(getSeasonIsLoading);
    const error = useSelector(getSeasonError);

    const loadNextPartHandler = useCallback(() => {
        dispatch(fetchNextSeasons({ movieId }));
    }, [dispatch, movieId]);

    useEffect(() => {
        dispatch(seasonActions.clearState());
        dispatch(fetchSeasons({ movieId, replace: true }));
    }, [dispatch, movieId]);

    if (error) {
        return <>{error}</>;
    }

    return (
        <div>
            <Heading>Сезоны</Heading>

            {!seasons.length && (<Heading>Нет информации о сезонах</Heading>)}

            <InfiniteScroll
                className={cls.seasonsList}
                onScrollEnd={loadNextPartHandler}
            >
                {
                    seasons.map(({ id, number, name, poster, episodesCount }) => (
                        <SeasonsCard
                            key={id}
                            name={name}
                            poster={poster?.url}
                            episodesCount={episodesCount}
                            isSelected={selectedSeason === String(number)}
                            onClick={() => onSelectSeason(number)}
                        />
                    ))
                }
                {isLoading && getSkeletons()}
            </InfiniteScroll>
        </div>
    );
};