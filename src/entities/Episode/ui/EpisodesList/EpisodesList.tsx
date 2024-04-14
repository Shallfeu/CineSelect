import { useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import {
    AbsoluteCenter,
    Accordion,
    Box,
    Divider,
    Heading,
} from '@chakra-ui/react';
import { getEpisodeIsLoading } from '../../model/selectors/getEpisodeIsLoading/getEpisodeIsLoading';
import { getEpisodeError } from '../../model/selectors/getEpisodeError/getEpisodeError';
import {
    fetchEpisodesBySeasonId,
} from '../../model/services/fetchEpisodesBySeasonId/fetchEpisodesBySeasonId';
import { episodeActions, getEpisodes } from '../../model/slice/episodeSlice';
import {
    getEpisodeIsInitialized,
} from '../../model/selectors/getEpisodeIsInitialized/getEpisodeIsInitialized';
import { EpisodesCard } from '../EpisodesCard/EpisodesCard';
import { EpisodesSkeletonCard } from '../EpisodesSkeletonCard/EpisodesSkeletonCard';

interface EpisodesListProps {
    movieId: string;
    seasonId: string | null;
}

const getSkeletons = () => new Array(10)
    .fill(0)
    .map((_, index) => (
        <EpisodesSkeletonCard key={index} />
    ));

export const EpisodesList = (props: EpisodesListProps) => {
    const { movieId, seasonId } = props;

    const dispatch = useAppDispatch();

    const episodes = useSelector(getEpisodes.selectAll);
    const isLoading = useSelector(getEpisodeIsLoading);
    const error = useSelector(getEpisodeError);
    const isInitialized = useSelector(getEpisodeIsInitialized);

    useEffect(() => {
        dispatch(episodeActions.clearState())
        if (seasonId) {
            dispatch(fetchEpisodesBySeasonId({ movieId, seasonId }));
        }
        // eslint-disable-next-line
    }, [seasonId]);

    if (error) {
        return <>{error}</>;
    }

    if (!episodes.length && !isInitialized) {
        return;
    }

    return (
        <div>
            <Box position="relative" padding="10">
                <Divider borderWidth="4px" borderColor="khaki" margin="32px 0 " />

                <AbsoluteCenter bg="white">
                    <Heading color="khaki">Эпизоды</Heading>
                </AbsoluteCenter>
            </Box>

            {!episodes.length && isInitialized && (<Heading>Нет информации о эпизодах</Heading>)}

            <Accordion allowToggle margin="0 auto" maxW={{ lg: '40vw', sm: 'full' }}>
                {
                    episodes.map(({ number, name, description }) => (
                        <EpisodesCard
                            key={number}
                            number={number}
                            name={name}
                            description={description}
                        />
                    ))
                }
                {isLoading && getSkeletons()}
            </Accordion>

        </div>
    );
};