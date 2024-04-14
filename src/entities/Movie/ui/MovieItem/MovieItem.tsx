import { useNavigate } from 'react-router-dom';
import { Button, Card, CardBody, CardFooter, Heading, Stack, Text, Image, Box } from '@chakra-ui/react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Movie } from '../../model/types/movie';
import FallbackImage from 'shared/assets/img/fallback_100_150.png';

interface MovieItemProps {
    movie: Movie;
    className?: string;
}

export const MovieItem = (props: MovieItemProps) => {
    const { movie, className } = props;
    const navigate = useNavigate();

    const navigationHandler = () => {
        navigate(`${RoutePath.movie_details}${movie.id}`);
    };

    return (
        <Card
            className={className}
            direction={{ base: 'column', md: 'row' }}
            overflow="hidden"
            variant="outline"
        >
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexGrow="1"
                flexShrink="0"
                m="0 auto"
                w={{ lg: '250px', md: '200px', sm: '300px', base: 'full' }}
            >
                <Image
                    fallbackSrc={FallbackImage}
                    objectFit="cover"
                    w="full"
                    src={movie.poster.url}
                    alt={movie.poster.previewUrl}
                />
            </Box>

            <Stack>
                <CardBody>
                    <Heading size="md">{movie.name}</Heading>

                    <Text noOfLines={7} py="2" >
                        {movie.description}
                    </Text>

                    <Text py="2">
                        {movie.year} год
                    </Text>
                </CardBody>

                <CardFooter>
                    <Button variant="outline" colorScheme="yellow" onClick={navigationHandler}>
                        Подробнее
                    </Button>
                </CardFooter>
            </Stack>
        </Card>
    );
};