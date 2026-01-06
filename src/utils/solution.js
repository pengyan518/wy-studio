function solution(A) {
  const pairs = []
  A.forEach((item, index, arr) => {
    const others = arr.map((me, i) => {
      if (item === 0 && me > item && me < A.length && index < i) {
        return [index, i]
      }
    })
    pairs.push(...others)
    // console.log(others)
  })

  const res = pairs.filter(item => item !== undefined)

  console.log(res)

  return res.length
}

function solution2(A) {
  let ones = 0
  let passing = 0

  for (let i = A.length - 1; i >= 0; i--) {
    if (A[i] === 0) {
      passing += ones
      if (passing > 1000000000) {
        return -1
      }
    } else {
      ones++
    }

    console.log([i], A[i], passing, ones)
  }
  return passing
}

function solution3(A) {
  let ones = 0
  let passing = 0

  for (let i = 0; i < A.length; i++) {
    if (A[i] === 0) {
      passing += ones
      if (passing > 1000000000) {
        return -1
      }
    } else {
      ones++
    }
    console.log([i], A[i], passing, ones)
  }

  return passing
}

const arr0 = [0, 1, 0, 1, 1, 0]
const arr = [0, 1, 0, 1, 1, 0, 1, 0, 1]
const arr2 = [1, 1, 0, 1, 1, 1, 0, 1]
// We have five pairs of passing cars: (0, 1), (0, 3), (0, 4), (2, 3), (2, 4).

console.log(solution(arr0)) // 5
console.log(solution2(arr0)) // 5
console.log(solution3(arr0)) // 5
