import { describe, it, expect } from 'vitest';
import { appendNumber, deleteLast, plusMinus } from '@scripts/calcController.js';

describe('String Manipulation', () => {
    it('should append a number correctly', () => {
        expect(appendNumber('3', '5')).toBe('35');
        expect(appendNumber('0', '7')).toBe('7');
    });

    it('should delete the last character correctly', () => {
        expect(deleteLast('12345')).toBe('1234');
        expect(deleteLast('5')).toBe('');
    });

    it('should toggle the sign of a number correctly', () => {
        expect(plusMinus('5')).toBe('-5');
        expect(plusMinus('-5')).toBe('5');
    });
});
