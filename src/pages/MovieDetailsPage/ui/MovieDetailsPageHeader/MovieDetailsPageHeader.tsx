import { Button, Flex } from '@chakra-ui/react';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowBackIcon } from '@chakra-ui/icons';

export const MovieDetailsPageHeader = () => {
    const navigate = useNavigate();

    const backToListHandler = useCallback(() => {
        navigate(-1);
    }, [navigate]);

    return (
        <Flex margin="20px 0">
            <Button colorScheme="yellow" onClick={backToListHandler}>
                <ArrowBackIcon marginRight="8px" />

                Назад
            </Button>
        </Flex>
    );
};