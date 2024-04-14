import {
    Card,
    CardBody,
    CardFooter,
    Stack,
    Skeleton, Box,
} from '@chakra-ui/react';

interface MovieSkeletonItemProps {
    className?: string;
}

export const MovieSkeletonItem = (props: MovieSkeletonItemProps) => {
    const { className } = props;

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
                <Skeleton w="full" h={{ lg: 'full', base: '400px' }} />
            </Box>

            <Stack w="full">
                <CardBody w="full">
                    <Skeleton maxW="150px" h="30px" />

                    <Skeleton marginTop="8px" w="full" h="100px" />

                    <Skeleton marginTop="16px" w="50px" h="20px" />
                </CardBody>

                <CardFooter w="full">
                    <Skeleton w="100px" h="40px" />
                </CardFooter>
            </Stack>
        </Card>
    );
};