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
      √ merge and sort asc three given collection (ASC,ASC,DESC) (3 ms)                                                                                                                                                                     
      √ merge and sort asc three collections of numbers                                                                                                                                                                                     
      √ merge and sort asc three collections of numbers with duplicate numbers                                                                                                                                                              
      √ merge and sort asc three collections of mixed positive and negative numbers (1 ms)                                                                                                                                                  
      √ merge and sort asc three collections of decimal numbers                                                                                                                                                                             
      √ merge and sort asc three collections of single element                                                                                                                                                                              
    Edge cases and partial empty                                                                                                                                                                                                            
      √ merge and sort asc three collections with one empty collection (1 ms)                                                                                                                                                               
      √ merge and sort asc correctly with three of very large and very small numbers                                                                                                                                                        
      √ handle empty collections                                                                                                                                                                                                            
    Large scale data                                                                                                                                                                                                                        
      √ merge and sort asc three large given collection (ASC,ASC,DESC) (107 ms)                                                                                                                                                             
      √ merge and sort asc three large collections of all desc (101 ms)                                                                                                                                                                     
      √ merge and sort asc three large collections of all asc (99 ms)                                                                                                                                                                       
    Error handler                                                                                                                                                                                                                           
      √ throws error if any number is NaN or Infinity (12 ms)                                                                                                                                                                               
      √ throws error when called with argument elements is not numbers (1 ms)                                                                                                                                                               
      √ throws error when called with argument that is not an array                                                                                                                                                                         
      √ throws error when called without argument                                                                                                                                                                                           
      √ throws error when called with less than 3 argument (2 ms)                                                                                                                                                                           
      √ throws error when called with more than 3 arguments (1 ms)                                                                                                                                                                          
      √ throws error when called with undefined or null (1 ms)                                                                                                                                                                              
```
