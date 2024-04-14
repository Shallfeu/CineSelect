import { useCallback, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import {
    Button,
    Heading,
} from '@chakra-ui/react';
import { getReviewIsLoading } from '../../model/selectors/getReviewIsLoading/getReviewIsLoading';
import { getReviewError } from '../../model/selectors/getReviewError/getReviewError';
import { fetchReviews } from '../../model/services/fetchReviews/fetchReviews';
import cls from './ReviewList.module.scss';
import { ReviewCard } from '../ReviewCard/ReviewCard';
import { ReviewCardSkeleton } from '../ReviewCardSkeleton/ReviewCardSkeleton';
import { getReviews, reviewActions } from '../../model/slice/reviewSlice';
import { fetchNextReviews } from '../../model/services/fetchNextReviews/fetchNextReviews';

interface ReviewListProps {
    movieId: string;
}

const getSkeletons = () => new Array(3)
    .fill(0)
    .map((_, index) => (
        <ReviewCardSkeleton key={index} />
    ));

export const ReviewList = (props: ReviewListProps) => {
    const { movieId } = props;

    const dispatch = useAppDispatch();

    const reviews = useSelector(getReviews.selectAll);
    const isLoading = useSelector(getReviewIsLoading);
    const error = useSelector(getReviewError);

    const loadNextPartHandler = useCallback(() => {
        dispatch(fetchNextReviews({ movieId }));
    }, [dispatch, movieId]);

    useEffect(() => {
        dispatch(reviewActions.clearState())
        dispatch(fetchReviews({ movieId, replace: true }));
    }, [dispatch, movieId]);

    if (error) {
        return <>{error}</>;
    }

    return (
        <div>
            <Heading marginBottom="16px">Отзывы</Heading>

            {!reviews.length && (<Heading>Нет информации об отзывах</Heading>)}

            <div className={cls.commentsList}>
                {
                    reviews.map(({ id, review, author }) => (
                        <ReviewCard key={id} author={author} review={review} />
                    ))
                }

                {isLoading && getSkeletons()}

                {!isLoading && !!reviews.length && (
                    <Button
                        colorScheme="yellow"
                        variant="solid"
                        onClick={loadNextPartHandler}
                    >
                        Загрузить еще...
                    </Button>
                )}
            </div>
        </div>
    );
};