export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[]{
  const arrayFromArgs = Array.from(arguments);
  handleIncompleteArgument(arguments);
  handleNonArrayArguments(...arrayFromArgs);
  handleNonNumberElements(...arrayFromArgs);
  handleNonFiniteNumbers(...arrayFromArgs);
  if (isAscAscDescPattern(...arrayFromArgs)) {
    return mergeSort([...arguments[0],...arguments[1],...arguments[2].reverse()]);
  }
  else if (isSortedCollections(...arrayFromArgs)) {
    return mergeSort(reverseIfDesc(...arrayFromArgs).flat());
  }

  return mergeSort(arrayFromArgs.flat());
}

const handleIncompleteArgument = (args: any) => {
  if (args.length !== 3) throw new Error("expects exactly 3 arguments");
};

const handleNonArrayArguments = (...args: any[]) => {
  if (!args.every(Array.isArray)) {
    throw new Error("All arguments must be arrays");
  }
};

const handleNonNumberElements = (...args: any[][]) => {
  if (!args.flat().every(item => typeof item === 'number')) {
    throw new Error("All elements in the arrays must be numbers");
  }
};

const handleNonFiniteNumbers = (...args: number[][]) => {
  if (!args.flat().every(item => typeof item === 'number' && Number.isFinite(item))) {
    throw new Error("All elements must be valid finite numbers");
  }
};

const isAsc = (arr: number[]): boolean => {
  if (arr.length === 0) return true;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) return false;
  }
  return true;
};

const isDesc = (arr: number[]): boolean => {
  if (arr.length === 0) return true;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) return false;
  }
  return true;
};

const isSorted = (arr: number[]): boolean => {
  return isAsc(arr) || isDesc(arr);
};

const isSortedCollections = (...args: number[][]) => {
  return args.every(arr => isSorted(arr));
}

const isAscAscDescPattern = (...args: number[][]) => {
  if (isAsc(args[0]) && isAsc(args[1]) && isDesc(args[2])) {
    return true
  }
  return false
};

function reverseIfDesc(...collections: number[][]): number[][] {
  return collections.map(arr =>
    isDesc(arr) ? arr.reverse() : arr
  );
}

function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return mergeForSort(left, right);
}

function mergeForSort(left: number[], right: number[]): number[] {
  const result: number[] = [];
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}
