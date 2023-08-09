
function partition(array, s, e) {
  const pv = array[e];
  let pi = s - 1;
  for (let i = s; i < e; i++) {
    if (array[i] < pv) {
      pi++;
      // swapping two values in the array
      [array[pi], array[i]] = [array[i], array[pi]];
    }
  }
  pi++;
  // swapping two values in the array
  [array[pi], array[e]] = [array[e], array[pi]];
  return pi;
}

function qSort(array, s, e) {
  if (s >= e) {
    return;
  }

  m = partition(array, s, e);
  qSort(array, s, m - 1);
  qSort(array, m + 1, e);
}


function hasTargetSum(array, target) {
  // Write your algorithm here
  qSort(array, 0, array.length - 1);
  
  let idxFront = 0, idxEnd = array.length - 1;
  while (idxFront < idxEnd) {
    const sumPair = array[idxFront] + array[idxEnd];
    if (sumPair === target) {
      return true;
    } else if (sumPair > target) {
      idxEnd--;
    } else {
      idxFront++;
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  Sorting takes O(NLogN)
  Finding a Pair O(N)
  Therefore, O(NLogN + N) = O(NLogN)
*/

/* 
  Add your pseudocode here
  =>
  sort the array in ascending order

  indexFront = 0
  indexEnd = array.length - 1
  while (indexFront < indexEnd) {
    const sumPair = array[indexFront] + array[indexEnd];
    if (sumPair === target number) {
      return true;
    } else if (sumPair > target number) {
      indexEnd--;
    } else {
      indexFront++;
    }
  }

  retun false;
*/

/*
  Add written explanation of your solution here
  =>
  finding a pair in the input array that their sum is equal to 
  the input target number.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1], 1));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2], 3));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 3], 3));
}

module.exports = hasTargetSum;
