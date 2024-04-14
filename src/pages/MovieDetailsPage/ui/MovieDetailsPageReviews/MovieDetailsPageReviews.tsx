import { ReviewList, reviewReducer } from 'entities/Review';
import { DynamicModuleLoader, ReducersList } from 'shared/components/DynamicModuleLoader/DynamicModuleLoader';

interface MovieDetailsReviewsProps {
    movieId: string;
}

const reducers: ReducersList = {
    review: reviewReducer,
};

export const MovieDetailsPageReviews = (props: MovieDetailsReviewsProps) => {
    const { movieId } = props;

    return (
        <DynamicModuleLoader reducers={reducers} >
            <ReviewList movieId={movieId} />
        </DynamicModuleLoader>
    );
};