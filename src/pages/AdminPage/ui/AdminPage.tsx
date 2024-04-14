import React from 'react';
import { Page } from 'widgets/Page';
import { Box, Heading, Text } from '@chakra-ui/react';
import { InfoIcon } from '@chakra-ui/icons';
import { Link } from '@chakra-ui/react';

const AdminPage = () => {
    return (
        <Page>
            <Box h="full" textAlign="center" py={10} px={6}>
                <InfoIcon boxSize="50px" color="goldenrod" />

                <Heading as="h2" size="xl" mt={6} mb={2}>
                    Привет еще раз!
                </Heading>

                <Text fontSize='xl' color='gray.500'>
                    Рад, что вы сюда добрались! Значит, я не зря старался.
                </Text>

                <Text fontSize='xl' marginTop="32px" color='gray.500'>
                    Вижу вы в поисках хорошего стажера &#128515;
                </Text>

                <Text fontSize='xl' marginTop="32px" color='gray.500'>
                    Вот вам

                    <Link color="goldenrod" href="https://roaring-bunny-65e130.netlify.app/" isExternal>
                        &nbsp;ссылка&nbsp;
                    </Link>

                    на резюме одного классного парня &#128521;
                </Text>
            </Box>
        </Page>
    );
};

export default AdminPage;