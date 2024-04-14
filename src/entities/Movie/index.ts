import type { Movie } from './model/types/movie';
import { MovieList } from './ui/MovieList/MovieList';
import { MovieDetails } from './ui/MovieDetails/MovieDetails';
import { movieDetailsReducer } from './model/slice/movieDetailsSlice';
import { MoviePerpageSelect } from './ui/MoviePerpageSelect/MoviePerpageSelect';
import { MovieYearSlider } from './ui/MovieYearSlider/MovieYearSlider';
import { MovieAgeSlider } from './ui/MovieAgeSlider/MovieAgeSlider';
import { MovieCountriesSelect } from './ui/MovieCountriesSelect/MovieCountriesSelect';
import { MovieRecommendationsList } from './ui/MovieRecommendationsList/MovieRecommendationsList';
import { getMovieDetailsPageIsSeries } from './model/selectors/getMovieDetailsPageIsSeries/getMovieDetailsPageIsSeries';
import { MovieGenresSelect } from './ui/MovieGenresSelect/MovieGenresSelect';
import { MovieStudioSelect } from './ui/MovieStudioSelect/MovieStudioSelect';
import { MovieIsSeriesCheckbox } from './ui/MovieIsSeriesCheckbox/MovieIsSeriesCheckbox';
import { MovieRatingInput } from './ui/MovieRatingInput/MovieRatingInput';
import { MovieItem } from './ui/MovieItem/MovieItem';

export {
    Movie,
    MovieItem,
    MovieList,
    MovieDetails,
    MoviePerpageSelect,
    MovieYearSlider,
    MovieAgeSlider,
    MovieCountriesSelect,
    MovieIsSeriesCheckbox,
    MovieStudioSelect,
    MovieRatingInput,
    MovieGenresSelect,
    MovieRecommendationsList,
    getMovieDetailsPageIsSeries,
    movieDetailsReducer,
};
