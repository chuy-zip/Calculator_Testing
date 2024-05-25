import { describe, it, expect } from 'vitest';
import { lengthIsCorrect, isNegative, isNumber, isOperator, usingFirstNumber } from '@scripts/calcController.js';

describe('Validation and Utility Functions', () => {
    it('should validate length correctly', () => {
        expect(lengthIsCorrect('123456789')).toBe(true);
        expect(lengthIsCorrect('1234567890')).toBe(false);
    });

    it('should identify negative numbers correctly', () => {
        expect(isNegative(-5)).toBe(true);
        expect(isNegative(5)).toBe(false);
    });

    it('should identify numbers correctly', () => {
        expect(isNumber('123')).toBe(true);
        expect(isNumber('12.3')).toBe(true);
        expect(isNumber('abc')).toBe(false);
    });

    it('should identify operators correctly', () => {
        expect(isOperator('+')).toBe(true);
        expect(isOperator('-')).toBe(true);
        expect(isOperator('x')).toBe(true);
        expect(isOperator('÷')).toBe(true);
        expect(isOperator('a')).toBe(false);
    });

    it('should identify if using first number correctly', () => {
        expect(usingFirstNumber('0', '')).toBe(true);
        expect(usingFirstNumber('5', '+')).toBe(false);
    });
});
