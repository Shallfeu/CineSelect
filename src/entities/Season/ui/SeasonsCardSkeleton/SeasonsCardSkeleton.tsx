import { Card, CardBody, Skeleton, Stack } from '@chakra-ui/react';

export const SeasonsCardSkeleton = () => {
    return (
        <Card
            minW="200px"
            shadow="xs"
        >
            <CardBody>
                <Skeleton height="200px" />

                <Stack mt="6" spacing="3">
                    <Skeleton height="30px" />

                    <Skeleton height="50px" />
                </Stack>
            </CardBody>
        </Card>
    );
};