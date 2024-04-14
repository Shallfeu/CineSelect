export interface SearchItem {
    query: string;
    timestamp: string;
}

export interface SuggestionItem extends SearchItem {
    value: string;
}


export class SearchService {
    static saveSearch(query: string) {
        const timestamp = new Date().toISOString();
        const existingHistory: SearchItem[] = this.getSearchHistory();

        const isDuplicate = existingHistory.find(item => item.query.toLowerCase() === query.toLowerCase());

        if (!isDuplicate) {
            existingHistory.unshift({ query: query, timestamp: timestamp });
            const limitedHistory = existingHistory.slice(0, 20);
            localStorage.setItem('searchHistory', JSON.stringify(limitedHistory));
        }
    }

    private static getSearchHistory() {
        return JSON.parse(localStorage.getItem('searchHistory') ?? '') || [];
    }

    static getSearchSuggestions(query: string): SearchItem[] {
        const existingHistory: SearchItem[] = this.getSearchHistory();
        return existingHistory.filter(item => item.query.toLowerCase().includes(query.toLowerCase()));
    }

    static getFormattedSuggestions(
        substr: string,
        className: string,
        tag: string = 'span',
        suggestions: SearchItem[] = this.getSearchSuggestions(substr),
    ) {
        return suggestions.map(({ query, timestamp }) => {
            const regexValue = new RegExp(`(${substr})`, 'ig');
            const newStr = query.replace(regexValue, `<${tag} class="${className}">$1</${tag}>`);

            return ({
                query: newStr,
                timestamp,
                value: query,
            });
        });

    }
}
