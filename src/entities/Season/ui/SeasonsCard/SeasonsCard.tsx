import {
    Card,
    CardBody, CardProps,
    Heading,
    Image,
    Stack,
    Text,
} from '@chakra-ui/react';
import FallbackImage from 'shared/assets/img/fallback_200.png';

interface SeasonsCardProps extends CardProps {
    poster: string;
    name: string;
    episodesCount: number;
    isSelected: boolean;
}

export const SeasonsCard = (props: SeasonsCardProps) => {
    const {
        poster,
        name,
        episodesCount,
        isSelected,
        ...rest
    } = props;

    return (
        <Card
            cursor="pointer"
            minW="200px"
            shadow="xs"
            border={isSelected ? '4px solid khaki' : ''}
            {...rest}
        >
            <CardBody>
                <Image
                    boxSize="200px"
                    objectFit="cover"
                    borderRadius="lg"
                    src={poster}
                    alt={name}
                    fallbackSrc={FallbackImage}
                />

                <Stack mt="6" spacing="3">
                    <Heading size="md">
                        {name ?? 'Нет данных'}
                    </Heading>

                    {episodesCount > 1 && (
                        <Text>
                            {`${episodesCount} ${episodesCount > 4 ? 'эпизодов' : 'эпизода'}`}
                        </Text>
                    )}
                </Stack>
            </CardBody>
        </Card>
    );
};