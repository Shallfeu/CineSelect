import {
    Card,
    CardBody,
    Heading,
    Image,
    Stack,
    Text
} from '@chakra-ui/react';
import FallbackImage from 'shared/assets/img/fallback_200.png'

interface ActorsCardProps {
    photo: string;
    name: string;
    enName: string;
}

export const ActorsCard = (props: ActorsCardProps) => {
    const {
        photo,
        name,
        enName,
    } = props;

    return (
        <Card
            cursor="pointer"
            minW="200px"
            shadow="xs"
        >
            <CardBody>
                <Image
                    boxSize="200px"
                    objectFit="cover"
                    src={photo}
                    alt={name}
                    borderRadius="lg"
                    fallbackSrc={FallbackImage}
                />

                <Stack mt="6" spacing="3">
                    <Heading size="md">
                        {name ?? "Нет данных"}
                    </Heading>

                    <Text>
                        {enName}
                    </Text>
                </Stack>
            </CardBody>
        </Card>
    );
};