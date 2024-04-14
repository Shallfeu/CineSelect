import { Movie } from '../../model/types/movie';
import { MovieItem } from 'entities/Movie/ui/MovieItem/MovieItem';
import { MovieSkeletonItem } from '../MovieSkeletonItem/MovieSkeletonItem';
import cls from './MovieList.module.scss';

interface MovieListProps {
    movies: Movie[];
    isLoading: boolean;
}

const getSkeletons = () => new Array(10)
    .fill(0)
    .map((_, index) => (
        <MovieSkeletonItem className={cls.card} key={index} />
    ));

export const MovieList = (props: MovieListProps) => {
    const { movies, isLoading } = props;

    if (isLoading) {
        return getSkeletons();
    }

    return (
        <div>
            {
                movies.map(movie => (
                    <MovieItem className={cls.card} key={movie.id} movie={movie} />
                ))
            }
        </div>
    );
};
