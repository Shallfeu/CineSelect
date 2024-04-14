export const DEFAULT_YEAR = [1894, new Date().getFullYear()];

export const DEFAULT_AGE = [0, 18];

export const DEFAULT_STUDIOS = [
    { name: 'Netflix', slug: 'Netflix' },
    { name: 'HBO', slug: 'HBO' },
    { name: 'Disney+', slug: 'Disney+' },
];

const SELECT_FIELDS = ['id', 'name', 'year', 'poster', 'description']

export const SELECT_FIELDS_QUERY_STRING = SELECT_FIELDS.map(field => {
    return `selectFields=${field}`;
}).join('&');

