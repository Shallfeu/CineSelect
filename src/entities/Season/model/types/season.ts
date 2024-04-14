import { Episode } from 'entities/Episode';

export interface Season {
    'movieId': number;
    'number': number;
    'createdAt': string;
    'episodes': Episode[];
    'episodesCount': number;
    'updatedAt': string;
    'airDate': string;
    'description': string;
    'duration': number;
    'enDescription': string;
    'enName': string;
    'name': string;
    'poster': {
        'url': string;
        'previewUrl': string;
    },
    'source': string;
    'id': string;
}