function solution(A) {
  const {length} = A
  const sum = ((length + 1) / 2) * (length + 2)
  let sumMinusMissing = 0
  for (i = 0; i < length; i++) {
    sumMinusMissing += A[i]
  }
  return sum - sumMinusMissing
}
solution([3, 5, 6, 1])

// https://codility.com/demo/take-sample-test/tape_equilibrium
function solution2(A) {
  let sumBefore
  let sumAfter = (sumBefore = 0)
  let minDiff = Number.POSITIVE_INFINITY
  let minDiffTemp

  A.forEach(value => {
    sumAfter += value
  })

  for (let i = 1; i < A.length; i++) {
    sumBefore += A[i - 1]
    sumAfter -= A[i - 1]
    minDiffTemp = Math.abs(sumBefore - sumAfter)
    if (minDiffTemp < minDiff) {
      minDiff = minDiffTemp
    }
  }
  return minDiff
}

function solution3(A) {
  let min = Number.POSITIVE_INFINITY
  let minTemp
  let left = 0
  let right = 0

  A.forEach(element => {
    right += element
  })

  for (let i = 1; i < A.length; i++) {
    left += A[i - 1]
    right -= A[i - 1]
    minTemp = Math.abs(right - left)
    console.log(minTemp)
    if (minTemp < min) {
      min = minTemp
    }
  }

  return min
}

solution2([3, 1, 2, 4, 3])

// https://app.codility.com/programmers/lessons/4-counting_elements/max_counters/
function solution4(N, A) {
  let counterInit = []
  for (let i = 0; i < N; i++) {
    counterInit[i] = 0
  }
  console.log(counterInit)
  let max = 0

  A.forEach((item, index) => {
    // console.log(item);
    if (item < N + 1) {
      counterInit[item - 1] += 1
    } else {
      for (let i = 0; i < counterInit.length; i++) {
        if (counterInit[i] > max) {
          max = counterInit[i]
        }
      }
      const maxArr = counterInit.map(v => max)
      counterInit = [...maxArr]
      // console.log(max)
    }
  })

  return counterInit
}

// https://app.codility.com/programmers/lessons/4-counting_elements/max_counters/
function solution5(N, A) {
  const counters = []
  let max = 0
  let lastUpdate = 0
  let position
  // init zeros
  for (let i = 0; i < N; i++) {
    counters[i] = 0
  }

  for (let i = 0; i < A.length; i++) {
    if (A[i] <= N) {
      position = A[i] - 1
      if (counters[position] > lastUpdate) {
        counters[position] = counters[position] + 1
      } else {
        counters[position] = lastUpdate + 1
      }
      if (counters[position] > max) {
        max = counters[position]
      }
    } else {
      lastUpdate = max
    }
  }

  for (let i = 0; i < N; i++) {
    if (counters[i] < lastUpdate) counters[i] = lastUpdate
  }

  return counters
}

const arr = [3, 4, 4, 6, 1, 4, 4]
console.log(solution4(5, arr)) // [3, 2, 2, 4, 2]

// https://app.codility.com/programmers/lessons/4-counting_elements/missing_integer/
function solution6(A) {
  const onlyPositiveInt = []
  for (let i = 0; i < A.length; i++) {
    if (A[i] > 0) {
      onlyPositiveInt[A[i]] = true
    }
  }
  console.log(onlyPositiveInt)
  for (let i = 1; i <= onlyPositiveInt.length; i++) {
    console.log(i, onlyPositiveInt[i])
    if (!onlyPositiveInt[i]) {
      return i
    }
  }
  return 1
}

function solution7(A) {
  let result
  const tempArr = []
  A.sort((a, b) => a - b)
  const cleanA = [...new Set(A)]

  tempArr[0] = cleanA[0]
  for (let i = 1; i < A.length; i++) {
    tempArr[i] = tempArr[i - 1] + 1
  }

  if (tempArr[tempArr.length - 1] < 0) {
    result = 1
  } else {
    for (let i = 0; i < cleanA.length; i++) {
      if (tempArr.indexOf(cleanA[i]) !== i) {
        result = tempArr[i]
        break
      } else {
        result = cleanA[cleanA.length - 1] + 1
      }
    }
  }

  return result
}

const arr0 = [1, 3, 6, 4, 1, 2]
const arr1 = [1, 2, 3]
const arr2 = [-1, -3]
console.log(solution7(arr0)) // 5
console.log(solution7(arr1)) // 4
console.log(solution7(arr2)) // 1
