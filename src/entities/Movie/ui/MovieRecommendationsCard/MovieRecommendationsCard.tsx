import { Card, CardBody, Heading, Image, Stack, Text } from '@chakra-ui/react';
import FallbackImage from 'shared/assets/img/fallback_200.png';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useNavigate } from 'react-router-dom';

interface MovieRecommendationsCardProps {
    id: number;
    poster: string;
    name: string;
    year: number;
}

export const MovieRecommendationsCard = (props: MovieRecommendationsCardProps) => {
    const {
        id,
        poster,
        name,
        year,
    } = props;
    const navigate = useNavigate();

    const navigateHandler = () => {
        navigate(`${RoutePath.movie_details}${id}`);
    };

    return (
        <Card
            cursor="pointer"
            minW="200px"
            onClick={navigateHandler}
        >
            <CardBody>
                <Image
                    boxSize="200px"
                    objectFit="cover"
                    src={poster}
                    alt={name}
                    borderRadius="lg"
                    fallbackSrc={FallbackImage}
                />

                <Stack mt="6" spacing="3">
                    <Heading size="md">
                        {name ?? 'Нет данных'}
                    </Heading>

                    <Text>
                        {year}
                    </Text>
                </Stack>
            </CardBody>
        </Card>
    );
};