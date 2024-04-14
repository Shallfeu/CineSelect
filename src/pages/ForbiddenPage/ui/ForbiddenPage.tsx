import React from 'react';
import { Page } from 'widgets/Page';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import cls from './ForbiddenPage.module.scss'

export const ForbiddenPage = () => {
    return (
        <Page>
            <Box textAlign="center" py={10} px={6} className={cls.forbidden}>
                <Box display="inline-block">
                    <Flex
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                        bg={'red.500'}
                        rounded={'50px'}
                        w={'55px'}
                        h={'55px'}
                        textAlign="center"
                    >
                        <CloseIcon boxSize={'20px'} color={'white'} />
                    </Flex>
                </Box>

                <Heading as="h2" size="xl" mt={6} mb={2}>
                    Forbidden page
                </Heading>

                <Text color={'gray.500'}>
                    You are not allowed to be here
                </Text>
            </Box>
        </Page>
    );
};
