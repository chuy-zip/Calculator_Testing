import { describe, it, expect } from 'vitest';
import { add, subtract, multiply, divide, power } from '@scripts/calcController.js';

describe('Arithmetic Operations', () => {
    it('should add two numbers correctly', () => {
        expect(add('3', '5')).toBe(8);
        expect(add('-3', '5')).toBe(2);
        expect(add('3.47', '3.1')).toBe(6.57)
    });

    it('should subtract two numbers correctly', () => {
        expect(subtract('9', '5')).toBe(4);
        expect(subtract('5', '9')).toBe(-4);
    });

    it('should multiply two numbers correctly', () => {
        expect(multiply('3', '5')).toBe(15);
        expect(multiply('-3', '5')).toBe(-15);
    });

    it('should divide two numbers correctly', () => {
        expect(divide('15', '5')).toBe(3);
        expect(divide('5', '2')).toBe(2.5);
    });

    it('should calculate power correctly', () => {
        expect(power(2, 3)).toBe(8);
        expect(power(5, 2)).toBe(25);
    });
});
