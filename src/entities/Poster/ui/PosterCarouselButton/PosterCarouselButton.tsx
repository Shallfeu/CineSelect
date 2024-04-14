import { Button } from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import cls from './PosterCarouselButton.module.scss';

interface PosterCarouselButtonProps {
    isLeft?: boolean;
    hasNext: boolean;
    clickHandler: () => void;
}

export const PosterCarouselButton = (props: PosterCarouselButtonProps) => {
    const { isLeft, hasNext, clickHandler } = props;

    return (
        <div className={`${cls.arrow} ${isLeft ? cls.left : cls.right}`}>
            <Button
                variant="solid"
                colorScheme="yellow"
                display={hasNext ? 'block' : 'none'}
                onClick={clickHandler}
            >
                {isLeft ? <ArrowBackIcon /> : <ArrowForwardIcon />}
            </Button>
        </div>
    );
};