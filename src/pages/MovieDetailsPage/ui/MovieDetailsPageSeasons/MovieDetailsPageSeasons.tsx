import { seasonReducer, SeasonsList } from 'entities/Season';
import { episodeReducer, EpisodesList } from 'entities/Episode';
import { useEffect, useState } from 'react';
import { DynamicModuleLoader, ReducersList } from 'shared/components/DynamicModuleLoader/DynamicModuleLoader';

interface MovieDetailsPageSeasonsProps {
    movieId: string;
}

const reducers: ReducersList = {
    season: seasonReducer,
    episode: episodeReducer
};


export const MovieDetailsPageSeasons = (props: MovieDetailsPageSeasonsProps) => {
    const { movieId } = props;
    const [seasonId, setSeasonId] = useState<string | null>(null);

    useEffect(() => {
        setSeasonId(null);
    }, [movieId]);

    const selectSeasonHandler = (id: number) => {
        if (id > 0 && id < 1000) {
            setSeasonId(String(id));
        }
    };

    return (
        <DynamicModuleLoader reducers={reducers} >
            <SeasonsList movieId={movieId} selectedSeason={seasonId} onSelectSeason={selectSeasonHandler} />

            <EpisodesList movieId={movieId} seasonId={seasonId} />
        </DynamicModuleLoader>
    );
};