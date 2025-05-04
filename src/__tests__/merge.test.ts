import { merge } from "../merge";

describe("merge", () => {
    describe("Basic functionality", () => {
        it("merge and sort asc three given collection (ASC,ASC,DESC)", () => {
            const collection_1 = [0, 1, 3];
            const collection_2 = [4, 5, 6];
            const collection_3 = [23, 12, 8];
    
            const result = merge(collection_1, collection_2, collection_3);
    
            expect(result).toEqual([0, 1, 3, 4, 5, 6, 8, 12, 23]);
        });
    
        it("merge and sort asc three collections of numbers", () => {
            const collection_1 = [3, 1, 4];
            const collection_2 = [2, 5, 6];
            const collection_3 = [8, 7, 9];
    
            const result = merge(collection_1, collection_2, collection_3);
    
            expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        });
    
        it("merge and sort asc three collections of numbers with duplicate numbers", () => {
            const collection_1 = [1, 2, 2];
            const collection_2 = [2, 3, 4];
            const collection_3 = [5, 5, 6];
    
            const result = merge(collection_1, collection_2, collection_3);
    
            expect(result).toEqual([1, 2, 2, 2, 3, 4, 5, 5, 6]);
        });
    
        it("merge and sort asc three collections of mixed positive and negative numbers", () => {
            const collection_1 = [3, -1, 4];
            const collection_2 = [-2, 5, -6];
            const collection_3 = [8, -7, 9];
    
            const result = merge(collection_1, collection_2, collection_3);
    
            expect(result).toEqual([-7, -6, -2, -1, 3, 4, 5, 8, 9]);
        });
        
        it("merge and sort asc three collections of decimal numbers", () => {
            const collection_1 = [3.1, 1.4, 2.7];
            const collection_2 = [2.5, 5.6, 6.8];
            const collection_3 = [8.9, 7.0, 9.2];
    
            const result = merge(collection_1, collection_2, collection_3);
    
            expect(result).toEqual([1.4, 2.5, 2.7, 3.1, 5.6, 6.8, 7.0, 8.9, 9.2]);
        });
    
        it("merge and sort asc three collections of single element", () => {
            const collection_1 = [3];
            const collection_2 = [1];
            const collection_3 = [2];
    
            const result = merge(collection_1, collection_2, collection_3);
    
            expect(result).toEqual([1, 2, 3]);
        });
    
    })

    describe("Edge cases and partial empty", () => {
        it("merge and sort asc three collections with one empty collection", () => {
            const collection_1 = [3, 1, 4];
            const collection_2: number[] = [];
            const collection_3 = [2, 5, 6];

            const result = merge(collection_1, collection_2, collection_3);

            expect(result).toEqual([1, 2, 3, 4, 5, 6]);
        });

        it("merge and sort asc correctly with three of very large and very small numbers", () => {
            const collection_1 = [1e9, 5e-3, 1e-10];
            const collection_2 = [3e5, -1e9, 0];
            const collection_3 = [9e8, 2e-2, 7e5];
        
            const result = merge(collection_1, collection_2, collection_3);
        
            expect(result).toEqual([
                -1e9, 0, 1e-10, 5e-3, 2e-2, 3e5, 7e5, 9e8, 1e9
            ]);
        });
        
        it("handle empty collections", () => {
            const collection_1: number[] = [];
            const collection_2: number[] = [];
            const collection_3: number[] = [];
    
            const result = merge(collection_1, collection_2, collection_3);
    
            expect(result).toEqual([]);
        });

    })
    
    describe("Large scale data", () => {
        it("merge and sort asc three large given collection (ASC,ASC,DESC)", () => {
            const collection_1 = Array.from({ length: 10000 }, (_, i) => i + 1);
            const collection_2 = Array.from({ length: 10000 }, (_, i) => i + 10001);
            const collection_3 = Array.from({ length: 10000 }, (_, i) => 30000 - i);
    
            const result = merge(collection_1, collection_2, collection_3);
    
            expect(result).toEqual([
                ...Array.from({ length: 30000 }, (_, i) => i + 1),
            ]);
        });
    
        it('merge and sort asc three large collections of all desc', () => {
            const collection_1 = Array.from({ length: 10000 }, (_, i) => 30000 - i);    
            const collection_2 = Array.from({ length: 10000 }, (_, i) => 20000 - i);    
            const collection_3 = Array.from({ length: 10000 }, (_, i) => 10000 - i);    
        
            const result = merge(collection_1, collection_2, collection_3);
        
            expect(result).toEqual([
                ...Array.from({ length: 30000 }, (_, i) => i + 1),
            ]);
        });
    
        it('merge and sort asc three large collections of all asc', () => {
            const collection_1 = Array.from({ length: 10000 }, (_, i) => i + 1);
            const collection_2 = Array.from({ length: 10000 }, (_, i) => i + 10001);
            const collection_3 = Array.from({ length: 10000 }, (_, i) => i + 20001);
    
            const result = merge(collection_1, collection_2, collection_3);
    
            expect(result).toEqual([
                ...Array.from({ length: 30000 }, (_, i) => i + 1),
            ]);
        });
    })

    describe("Error handler", () => {
        it("throws error if any number is NaN or Infinity", () => {
            const collection_1 = [1, NaN, 3];
            const collection_2 = [4, Infinity, 6];
            const collection_3 = [9, -Infinity, 7];
        
            expect(() => {
                merge(collection_1, collection_2, collection_3);
            }).toThrow();
        });
    
        it("throws error when called with argument elements is not numbers", () => {
            const collection_1 = [3, "1", 4];
            const collection_2 = [true, 5, 6];
            const collection_3 = [8, 7, 9];
    
            expect(() => {
                // @ts-expect-error
                merge(collection_1, collection_2, collection_3);
              }).toThrow();
        });
    
        it("throws error when called with argument that is not an array", () => {
            const collection_1 = 3;
            const collection_2 = 1;
            const collection_3 = 2;
    
            expect(() => {
                // @ts-expect-error
                merge(collection_1, collection_2, collection_3);
              }).toThrow();
        });
    
        it("throws error when called without argument", () => {
            expect(() => {
                // @ts-expect-error
                merge();
              }).toThrow();
        });
    
        it("throws error when called with less than 3 argument", () => {
            expect(() => {
                // @ts-expect-error
                merge([1, 2, 3]);
              }).toThrow();
            expect(() => {
                // @ts-expect-error
                merge([1, 2, 3], [4, 5, 6]);
              }).toThrow();
        });
    
    
        it("throws error when called with more than 3 arguments", () => {
            expect(() => {
                // @ts-expect-error
                merge([1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]);
              }).toThrow();
            expect(() => {
                // @ts-expect-error
                merge([1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12], [10, 11, 12]);
              }).toThrow();
            expect(() => {
                // @ts-expect-error
                merge([1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12], [10, 11, 12], [10, 11, 12]);
              }).toThrow();
        });
    
        it("throws error when called with undefined or null", () => {
            expect(() => {
                // @ts-expect-error
                merge(undefined, null, []);
            }).toThrow();
        });
    });

    describe("Performance test with random data (using random data so i need to use built-in sort method to ensure the right expect which is not allowed)", () => {
        it('merge and sort asc three large collections of random numbers', () => {
            const collection_1 = Array.from({ length: 10000 }, () => Math.floor(Math.random() * 10000));
            const collection_2 = Array.from({ length: 10000 }, () => Math.floor(Math.random() * 10000));
            const collection_3 = Array.from({ length: 10000 }, () => Math.floor(Math.random() * 10000));

            const result = merge(collection_1, collection_2, collection_3);

            expect(result).toEqual([...collection_1, ...collection_2, ...collection_3].sort((a, b) => a - b)) // using built-in sort function which is not allowed (personal use for performance testing)
        });

        it('merge and sort asc three large collections of random number with length differentiation', () => {
            const collection_1 = Array.from({ length: 10000 }, () => Math.floor(Math.random() * 10000));
            const collection_2 = Array.from({ length: 20000 }, () => Math.floor(Math.random() * 10000));
            const collection_3 = Array.from({ length: 30000 }, () => Math.floor(Math.random() * 10000));

            const result = merge(collection_1, collection_2, collection_3);

            expect(result).toEqual([...collection_1, ...collection_2, ...collection_3].sort((a, b) => a - b)) // using built-in sort function which is not allowed (personal use for performance testing)
        });
    })
});

