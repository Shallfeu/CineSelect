import { Text, useBreakpointValue, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

export const Logo = () => {
    return (
        <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}
            fontWeight="700px"
        >
            CineSelect
        </Text>
    );
};