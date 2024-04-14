import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';
import React from 'react';

interface PaginationButtonProps {
    isLeft?: boolean;
    isDisabled?: boolean;
}

export const PaginationButton = (props: PaginationButtonProps) => {
    const { isLeft,isDisabled } = props;

    return (
        <Button isDisabled={isDisabled} colorScheme="yellow" variant="solid" size="sm">
            {isLeft ? <ArrowBackIcon /> : <ArrowForwardIcon />}
        </Button>
    );
};