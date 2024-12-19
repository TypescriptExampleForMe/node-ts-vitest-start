export function slugger(...strings: string[]): string {
    return strings.map(str => {
        return str.trim().toLowerCase()
            .replace(/\s+/g, '-');
    }).join('-');

}