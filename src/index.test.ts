import {describe, test, expect} from "vitest";
import {slugger} from "./index";

describe('slugger', () => {
    test('should return a slug', () => {
        const actual = slugger('Hello World');
        const expected = 'hello-world';
        expect(actual).toBe(expected);
    });

    test('return a slug from two strings', () => {
        const actual = slugger('Hello World', 'Goodbye World');
        const expected = 'hello-world-goodbye-world';
        expect(actual).toBe(expected);
    });

    test('return a slug from three strings with multiple spaces', () => {
        const actual = slugger('  Hello World  ', 'Goodbye   World', 'Goodbye   World');
        const expected = 'hello-world-goodbye-world-goodbye-world';
        expect(actual).toBe(expected);
    });
});