**Dependencies Setup:**  
    ```npm install```  
**Code Execution:**  
    ```npm run main```  
    you can edit input in [`src/main.ts`](src/main.ts)  
**Unit Test Execution:**  
    ```npm test```  

**Description:**  
The source code for merge and sort method is located in [`src/merge.ts`](src/merge.ts)  
The source code for unit tests is located in [`src/__tests__/merge.test.ts`](src/__tests__/merge.test.ts) 

**Unit test result:**
``` 
 PASS  src/__tests__/merge.test.ts
  merge
    Basic functionality
      √ merge and sort asc three given collection in the problem (4 ms)
      √ merge and sort asc three collections of numbers (1 ms)
      √ merge and sort asc three collections of numbers with duplicate numbers (1 ms)
      √ merge and sort asc three collections of mixed positive and negative numbers (1 ms)
      √ merge and sort asc three collections of decimal numbers (1 ms)
      √ merge and sort asc three collections of single element (1 ms)
    Edge cases and partial empty
      √ merge and sort asc three collections with one empty collection
      √ merge and sort asc correctly with three of very large and very small numbers
      √ handle empty collections (1 ms)
    Large scale data
      √ merge and sort asc three large collections of 2 asc 1 desc (115 ms)
      √ merge and sort asc three large collections of all desc (98 ms)
      √ merge and sort asc three large collections of all asc (100 ms)
    Error handler
      √ throws error if any number is NaN or Infinity (12 ms)
      √ throws error when called with argument elements is not numbers
      √ throws error when called with argument that is not an array (1 ms)
      √ throws error when called without argument
      √ throws error when called with less than 3 argument (1 ms)
      √ throws error when called with more than 3 arguments (2 ms)
      √ throws error when called with undefined or null
    Performance test with random data (using random data so i need to use built-in sort method to ensure the right expect which is not allowed)
      √ merge and sort asc three large collections of random numbers (118 ms)
      √ merge and sort asc three large collections of random number with length differentiation (220 ms)

Test Suites: 1 passed, 1 total
Tests:       21 passed, 21 total
Snapshots:   0 total
Time:        2.625 s```
