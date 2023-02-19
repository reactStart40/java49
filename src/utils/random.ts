export function getRandomNumber(min: number, max: number,
     isMinInclusive: boolean = true, isMaxInclusive: boolean = false) {
        if (!isMinInclusive) {
            min++;
        }
        if (isMaxInclusive) {
            max++;
        }
        if (min == max) {
            throw "min may not be equaled to max";
        }
        if (min > max) {
            [min, max] = [max, min];
        }
        return min + Math.trunc(Math.random() * (max - min));
        
}
export function getElement<T>(array: T[]): T {
    return array[getRandomNumber(0, array.length)];
    
}
export function getRandomMatrix(rows: number, columns: number, min: number,
     max: number): number[][] {
    const resMatrix: number[][] = [];
    for (let i = 0; i < rows; i++) {
        resMatrix[i] = [];
        for (let j = 0; j < columns; j++) {
            resMatrix[i][j] = getRandomNumber(min, max, true, true);
        }
    }
    return resMatrix;
}
export function getRandomDate(minYear: number, maxYear: number): Date {
    const year = getRandomNumber(minYear, maxYear);
    const month = getRandomNumber(0, 12);
    const day = getRandomNumber(1, 32);
    const dateRes = new Date(year, month, day);
    return dateRes;
}