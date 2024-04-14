export const  removeNullUndefined = (obj: Record<string, string | number | null| undefined>)
    : Record<string, string | number> =>  {
    for (const key in obj) {
        if (obj[key] === null || obj[key] === undefined) {
            delete obj[key];
        }
    }
    return obj as Record<string, string | number>;
}