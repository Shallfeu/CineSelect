import React, { useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchPosters } from 'entities/Poster/model/services/fetchPoster/fetchPosters';
import { useSelector } from 'react-redux';
import { getPosterData } from 'entities/Poster/model/selectors/getPosterData/getPosterData';
import { getPosterError } from 'entities/Poster/model/selectors/getPosterError/getPosterError';
import { getPosterIsLoading } from 'entities/Poster/model/selectors/getPosterIsLoading/getPosterIsLoading';
import { Carousel } from 'react-responsive-carousel';
import cls from './PosterCarousel.module.scss';
import { PosterCarouselButton } from '../PosterCarouselButton/PosterCarouselButton';
import { PageLoader } from 'widgets/PageLoader';
import { Box, Divider, Heading, Image } from '@chakra-ui/react';
import { posterActions } from '../../model/slice/posterSlice';

interface PosterCarouselProps {
    movieId: string;
}

export const PosterCarousel = (props: PosterCarouselProps) => {
    const { movieId } = props;

    const dispatch = useAppDispatch();

    const posters = useSelector(getPosterData);
    const isLoading = useSelector(getPosterIsLoading);
    const error = useSelector(getPosterError);

    useEffect(() => {
        dispatch(posterActions.clearState());
        dispatch(fetchPosters(movieId));
    }, [dispatch, movieId]);

    if (error) {
        return <>{error}</>;
    }

    if (!posters.length) {
        return;
    }

    return (
        <>
            <Heading marginBottom="16px">Постеры</Heading>

            <div className={cls.carousel}>
                {isLoading && <PageLoader />}

                <Carousel
                    className="relative"
                    showThumbs={false}
                    showIndicators={false}
                    renderArrowNext={(clickHandler, hasNext) =>
                        (<PosterCarouselButton hasNext={hasNext} clickHandler={clickHandler} />)}
                    renderArrowPrev={(clickHandler, hasPrev) =>
                        (<PosterCarouselButton isLeft hasNext={hasPrev} clickHandler={clickHandler} />)}
                >
                    {
                        posters.map((poster) => (
                            <Box
                                m="0 auto"
                                flexGrow="1"
                                flexShrink="0"
                                key={poster.id}
                                w={{ lg: '450px', md: '350px', sm: '400px', base: '200px' }}
                            >
                                <Image
                                    w="full"
                                    rounded="md"
                                    objectFit="cover"
                                    alt={poster.previewUrl}
                                    src={poster.url}
                                />
                            </Box>
                        ))
                    }
                </Carousel>

                <Divider borderWidth="4px" borderColor="khaki" margin="32px 0" />
            </div>
        </>
    );
};