export const calculateColorByRating = (rating: number) => {
    if (rating > 8) return 'green';
    if (rating > 6 && rating < 8) return 'yellow';
    return 'red';
};