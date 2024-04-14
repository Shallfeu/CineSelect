import { calculateColorByRating } from 'shared/lib/helpers/calculateColorByRating/calculateColorByRating';
import { Badge, Box, Card, CardBody, Heading, Image, Text } from '@chakra-ui/react';
import FallbackImage from 'shared/assets/img/fallback_100_150.png';

interface SearchResultItemProps {
    poster: string;
    name: string;
    rating: number;
    year: number;
    onClickCard: () => void;
}

export const SearchResultItem = (props: SearchResultItemProps) => {
    const {
        poster,
        name,
        rating,
        year,
        onClickCard,
    } = props;

    return (
        <Card
            onClick={onClickCard}
            direction="row"
            variant="outline"
            h="150px"
            cursor="pointer"
        >
            <Box
                w={{ lg: '100px', md: '100px', sm: '100px', base: '100px' }}
            >
                <Image
                    fallbackSrc={FallbackImage}
                    objectFit="cover"
                    src={poster}
                    alt={name}
                />
            </Box>

            <CardBody>
                <Heading size="md">{!name ? 'Нет информации' : name}</Heading>

                <Badge
                    h="fit-content"
                    marginTop="8px"
                    as={'div'}
                    variant="subtle"
                    colorScheme={calculateColorByRating(rating)}
                >
                    <Text
                        fontWeight={600}
                        fontSize={'md'}
                    >
                        {rating}
                    </Text>
                </Badge>

                <Text marginTop="8px" py="2">
                    {year} год
                </Text>
            </CardBody>
        </Card>
    );
};