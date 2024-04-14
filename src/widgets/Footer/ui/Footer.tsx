import React from 'react';
import { Divider, Flex, Text } from '@chakra-ui/react';
import cls from './Footer.module.scss';

export const Footer = () => {
    return (
        <Flex marginTop="16px" justify="center" align="center" direction="column" className={cls.footer}>
            <Divider />

            <Text marginTop="16px" fontSize={16} color={'gray.500'}>
                CineSelect ©{new Date().getFullYear()} Created by Roman Chigvinzev
            </Text>
        </Flex>
    );
};