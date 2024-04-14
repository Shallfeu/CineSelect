import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { fetchMovieById } from '../../model/services/fetchMovieById/fetchMovieById';
import {
    Box,
    Flex,
    Heading,
    SimpleGrid,
    Image,
    Text,
    Badge, Divider,
} from '@chakra-ui/react';
import { getMovieDetailsData } from '../../model/selectors/getMovieDetailsData/getMovieDetailsData';
import {
    getMovieDetailsIsLoading,
} from '../../model/selectors/getMovieDetailsIsLoading/getMovieDetailsIsLoading';
import { getMovieDetailsError } from '../../model/selectors/getMovieDetailsError/getMovieDetailsError';
import { calculateColorByRating } from 'shared/lib/helpers/calculateColorByRating/calculateColorByRating';
import { MovieDetailsSkeleton } from '../MovieDetailsSkeleton/MovieDetailsSkeleton';

interface MovieDetailsProps {
    id: string;
}

export const MovieDetails = (props: MovieDetailsProps) => {
    const { id } = props;

    const dispatch = useAppDispatch();

    const isLoading = useSelector(getMovieDetailsIsLoading);
    const movie = useSelector(getMovieDetailsData);
    const error = useSelector(getMovieDetailsError);

    useEffect(() => {
        dispatch(fetchMovieById(id));
    }, [dispatch, id]);

    if (isLoading) {
        return (<MovieDetailsSkeleton />);
    }

    if (!movie || error) {
        return (<>{error}</>);
    }

    return (
        <>
            <SimpleGrid columns={{ md: 2, sm: 1 }} spacing={1}>
                <Box
                    m="0 auto"
                    flexGrow="1"
                    flexShrink="0"
                    w={{ lg: '450px', md: '350px', sm: '400px', base: '200px' }}
                >
                    <Image
                        w="full"
                        rounded="md"
                        objectFit="cover"
                        alt={movie.name}
                        src={movie.poster.url}
                    />
                </Box>

                <Flex marginTop={{ md: '0', base: '32px' }} direction="column">
                    <Flex justify="space-between" gap="32px">
                        <Heading
                            fontWeight={600}
                            fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}
                        >
                            {movie.name}
                        </Heading>

                        <Badge
                            as={'div'}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            variant="subtle"
                            colorScheme={calculateColorByRating(movie.rating.imdb)}
                        >
                            <Text
                                fontWeight={600}
                                fontSize={'2xl'}
                            >
                                {movie.rating.imdb}
                            </Text>
                        </Badge>
                    </Flex>

                    <Flex marginTop="32px" flexWrap="wrap" gap="8px">
                        {
                            movie.genres.map(genre => (
                                <Badge variant="solid" colorScheme="purple" key={genre.name}>
                                    {genre.name}
                                </Badge>
                            ))
                        }
                    </Flex>

                    <Text
                        marginTop="32px"
                        fontSize="2xl"
                        fontWeight="300"
                    >
                        {movie.description}
                    </Text>
                </Flex>
            </SimpleGrid>

            <Divider borderWidth="4px" borderColor="khaki" margin="32px 0 " />
        </>
    );
};