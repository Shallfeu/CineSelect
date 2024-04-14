export interface Episode {
    'number': number;
    'name': string;
    'enName': string;
    'still': {
        'url': string;
        'previewUrl': string;
    },
    'duration': number;
    'date': string;
    'description': string;
    'airDate': string;
    'enDescription': string;
}