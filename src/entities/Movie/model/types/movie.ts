interface MovieRating {
    'kp': number;
    'imdb': number;
    'tmdb': number;
    'filmCritics': number;
    'russianFilmCritics': number;
    'await': number;
}

interface MovieVotes {
    'kp': '60000',
    'imdb': number;
    'tmdb': number;
    'filmCritics': number;
    'russianFilmCritics': number;
    'await': number;
}

interface MovieTrailer {
    'url': 'https://www.youtube.com/embed/ZsJz2TJAPjw',
    'name': 'Official Trailer',
    'site': 'youtube',
    'size': number;
    'type': 'TRAILER'
}

interface MoviePerson {
    'id': number;
    'photo': 'https://st.kp.yandex.net/images/actor_iphone/iphone360_6317.jpg',
    'name': 'Пол Уокер',
    'enName': 'Paul Walker',
    'description': 'string',
    'profession': 'string',
    'enProfession': 'string'
}

interface MovieReviewInfo {
    'count': number;
    'positiveCount': number;
    'percentage': 'string';
}

interface MovieFees {
    'value': number;
    'currency': '€';
}

interface MoviePremier {
    'country': 'США',
    'world': '2023-02-25T02:44:39.359Z',
    'russia': '2023-02-25T02:44:39.359Z',
    'digital': 'string',
    'cinema': '2023-02-25T02:44:39.359Z',
    'bluray': 'string',
    'dvd': 'string'
}

export interface Movie {
    id: number;
    'externalId': {
        'kpHD': string;
        'imdb': string;
        'tmdb': number;
    },
    'name': string;
    'alternativeName': string;
    'enName': string;
    'names': [
        {
            'name': string;
            'language': string;
            'type': string;
        }
    ],
    'type': string;
    'typeNumber': number;
    'year': number;
    'description': string;
    'shortDescription': string;
    'slogan': string;
    'status': string;
    'facts': [
        {
            'value': string;
            'type': string;
            'spoiler': boolean;
        }
    ],
    'rating': MovieRating,
    'votes': MovieVotes,
    'movieLength': number;
    'ratingMpaa': string;
    'ageRating': number;
    'logo': {
        'url': string;
    },
    'poster': {
        'url': string;
        'previewUrl': string;
    },
    'backdrop': {
        'url': string;
        'previewUrl': string;
    },
    'videos': {
        'trailers': MovieTrailer[]
    },
    'genres': { 'name': string; }[],
    'countries': { 'name': string; }[],
    'persons': MoviePerson[],
    'reviewInfo': MovieReviewInfo,
    'seasonsInfo': { 'number': number; 'episodesCount': number; }[],
    'budget': { 'value': number; 'currency': string; },
    'fees': {
        'world': MovieFees,
        'russia': MovieFees,
        'usa': MovieFees
    },
    'premiere': MoviePremier,
    'similarMovies': Movie[],
    'top10': number;
    'top250': number;
    'ticketsOnSale': boolean;
    'totalSeriesLength': number;
    'seriesLength': number;
    'isSeries': boolean;
    'updatedAt': string;
    'createdAt': string;
}
