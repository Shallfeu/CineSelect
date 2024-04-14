import {
    Modal as ChakraModal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
} from '@chakra-ui/react';
import { ReactNode } from 'react';

interface ModalProps {
    title?: string;
    children: ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

export const Modal = (props: ModalProps) => {
    const {
        title,
        children,
        isOpen,
        onClose,
    } = props;

    return (
        <ChakraModal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{ title }</ModalHeader>

                <ModalCloseButton />

                <ModalBody>
                    {children}
                </ModalBody>
            </ModalContent>
        </ChakraModal>
    );
};