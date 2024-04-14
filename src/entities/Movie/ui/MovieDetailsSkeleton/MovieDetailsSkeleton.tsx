import {
    Box,
    Flex,
    SimpleGrid,
    Skeleton,
} from '@chakra-ui/react';
import React from 'react';

export const MovieDetailsSkeleton = () => {
    return (
        <SimpleGrid columns={{ md: 2, sm: 1 }} spacing={1}>
            <Box
                m="0 auto"
                flexGrow="1"
                flexShrink="0"
                w={{ lg: '450px', md: '350px', sm: '400px', base: '200px' }}
            >
                <Skeleton w="full" h="600px" />
            </Box>

            <Flex marginTop={{ md: '0', base: '32px' }} direction="column">
                <Flex justify="space-between" gap="32px">
                    <Skeleton w="300px" h="40px" />

                    <Skeleton w="60px" h="40px" />
                </Flex>

                <Flex marginTop="32px" flexWrap="wrap" gap="8px">
                    {
                        new Array(3).fill(0).map((_, index) => (
                            <Skeleton w="60px" h="30px" key={index} />
                        ))
                    }
                </Flex>

                <Skeleton marginTop="16px" w="400px" h="350px" />
            </Flex>
        </SimpleGrid>
    );
};