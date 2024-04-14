import {
    AccordionButton,
    AccordionItem,
    Flex,
    Skeleton,
} from '@chakra-ui/react';

export const EpisodesSkeletonCard = () => {
    return (
        <AccordionItem>
            <h2>
                <AccordionButton>
                    <Flex w="full" align="center" justify="space-between">
                        <Skeleton w="60px" h="20px" />

                        <Skeleton w="200px" h="20px" />

                        <Skeleton w="40px" h="20px" />
                    </Flex>
                </AccordionButton>
            </h2>
        </AccordionItem>
    );
};