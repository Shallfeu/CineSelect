import {
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Badge,
    Flex,
    Heading,
} from '@chakra-ui/react';

interface EpisodesCardProps {
    number: number;
    description: string;
    name: string;
}

export const EpisodesCard = (props: EpisodesCardProps) => {
    const {
        number,
        name,
        description,
    } = props;

    return (
        <AccordionItem>
            <h2>
                <AccordionButton>
                    <Flex w="full" align="center" justify="space-between">
                        <Badge variant="subtle" colorScheme="red">
                            Эпизод {number}
                        </Badge>

                        <Heading size={{ lg: 'md', sm: 'xs' }}>
                            {name}
                        </Heading>

                        <AccordionIcon />
                    </Flex>
                </AccordionButton>
            </h2>

            <AccordionPanel pb={4}>
                {description}
            </AccordionPanel>
        </AccordionItem>
    );
};