// A DNA sequence can be represented as a string consisting of the letters A, C, G and T, which correspond to the types of successive nucleotides in the sequence. Each nucleotide has an impact factor, which is an integer. Nucleotides of types A, C, G and T have impact factors of 1, 2, 3 and 4, respectively. You are going to answer several queries of the form: What is the minimal impact factor of nucleotides contained in a particular part of the given DNA sequence?

// The DNA sequence is given as a non-empty string S = S[0]S[1]...S[N-1] consisting of N characters. There are M queries, which are given in non-empty arrays P and Q, each consisting of M integers. The K-th query (0 ≤ K < M) requires you to find the minimal impact factor of nucleotides contained in the DNA sequence between positions P[K] and Q[K] (inclusive).

// For example, consider string S = CAGCCTA and arrays P, Q such that:

//     P[0] = 2    Q[0] = 4
//     P[1] = 5    Q[1] = 5
//     P[2] = 0    Q[2] = 6
// The answers to these M = 3 queries are as follows:

// The part of the DNA between positions 2 and 4 contains nucleotides G and C (twice), whose impact factors are 3 and 2 respectively, so the answer is 2.
// The part between positions 5 and 5 contains a single nucleotide T, whose impact factor is 4, so the answer is 4.
// The part between positions 0 and 6 (the whole string) contains all nucleotides, in particular nucleotide A whose impact factor is 1, so the answer is 1.
// Write a function:

// function solution(S, P, Q);

// that, given a non-empty string S consisting of N characters and two non-empty arrays P and Q consisting of M integers, returns an array consisting of M integers specifying the consecutive answers to all queries.

// Result array should be returned as an array of integers.

// For example, given the string S = CAGCCTA and arrays P, Q such that:

//     P[0] = 2    Q[0] = 4
//     P[1] = 5    Q[1] = 5
//     P[2] = 0    Q[2] = 6
// the function should return the values [2, 4, 1], as explained above.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// M is an integer within the range [1..50,000];
// each element of arrays P and Q is an integer within the range [0..N - 1];
// P[K] ≤ Q[K], where 0 ≤ K < M;
// string S consists only of upper-case English letters A, C, G, T.
function solution(S, P, Q) {
  const result = []
  const DNA_MAP = {
    A: 1,
    C: 2,
    G: 3,
    T: 4,
  }
  const arrS = [...S].map(elem => {
    const inx = Object.keys(DNA_MAP).findIndex(e => elem == e)
    return Object.values(DNA_MAP)[inx]
  })

  console.log(arrS)

  P.forEach((element, index) => {
    let min = 5
    const start = arrS[element]
    if (Q[index] > element) {
      // for (let i = element; i <= Q[index] - element + 1; i++) {
      //   console.log('length', Q[index] - element + 1)
      //   console.log('arrS[i]:', i, arrS[i])
      //   if (arrS[i] < min) {
      //     min = arrS[i]
      //     console.log('min:', min)
      //   }
      // }
      const newArr = arrS.slice(element, Q[index] + 1)
      newArr.forEach(v => {
        if (v < min) {
          min = v
        }
      })
    }
    if (Q[index] === element) min = start

    result.push(min)
    min = 5
  })

  return result
}

function solution2(S, P, Q) {
  const factorPerType = {
    A: 1,
    C: 2,
    G: 3,
    T: 4,
  }
  const prefix = [[0, 0, 0, 0]]
  const Plen = P.length
  // const Slen = S.length
  const result = []
  const counterType = [0, 0, 0, 0]

  // for (let i = 0; i < Slen; i += 1) {
  //   counterType = [...counterType] // local copy
  //   counterType[factorPerType[S[i]] - 1] += 1
  //   prefix.push(counterType)
  // }

  const newMap = [...S].reduce(
    (pre, current) => {
      const newArray = [...pre]
      newArray[factorPerType[current] - 1] += 1
      prefix.push(newArray)
      return [...newArray]
    },
    [...counterType]
  )

  console.log(newMap)
  console.log(prefix)

  for (let i = 0; i < Plen; i += 1) {
    const positionOne = P[i] + 1
    const positionTwo = Q[i] + 1

    let finalCount = 0
    const len = Object.keys(factorPerType).length

    for (let j = 0; j < len; j += 1) {
      finalCount = prefix[positionTwo][j] - prefix[positionOne - 1][j]

      if (finalCount > 0) {
        result.push(j + 1)
        break
      }
    }
  }

  return result
}

const DNA = 'CAGCCTA'
const P = [2, 5, 0]
const Q = [4, 5, 6]

console.log(solution2(DNA, P, Q))
// console.log(solution(DNA, P, Q))
