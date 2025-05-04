import { merge } from './merge';

function main() {
    // const collection_1 = [0, 20, 30];
    // const collection_2 = [15, 25, 35];
    // const collection_3 = [102, 95, 66, 43];

    const collection_1 = [1, NaN, 3];
    const collection_2 = [4, Infinity, 6];
    const collection_3 = [9, -Infinity, 7];

    

    const result = merge(collection_1, collection_2, collection_3);
    console.log("Merged and sorted result:", result);
}

main();
