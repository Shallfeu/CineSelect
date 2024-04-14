import { Container } from '@chakra-ui/react';
import { ReactNode } from 'react';
import cls from './Page.module.scss';
import { ScrollToTopButton } from 'shared/ui/ScrollToTopButton/ScrollToTopButton';

interface PageProps {
    children: ReactNode;
}

export const Page = (props: PageProps) => {
    const { children } = props;

    return (
        <Container className={cls.container} maxW="container.xl">
            {children}

            <ScrollToTopButton />
        </Container>
    );
};