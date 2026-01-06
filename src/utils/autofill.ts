const rowlabels1 = [
  'AAA',
  'BBB',
  'CCC',
  'DDD',
  'EEE',
  'FFF',
  'GGG',
  'HHH',
  'III',
  'JJJ',
  'KKK',
  'LLL',
  'MMM',
  'NNN',
  'OOO',
  'PPP',
  'QQQ',
  'RRR',
  'SSS',
  'TTT',
  'UUU',
  'VVV',
  'WWW',
  'XXX',
  'YYY',
  'ZZZ',
]
const rowlabels2 = [
  'AA',
  'BB',
  'CC',
  'DD',
  'EE',
  'FF',
  'GG',
  'HH',
  'II',
  'JJ',
  'KK',
  'LL',
  'MM',
  'NN',
  'OO',
  'PP',
  'QQ',
  'RR',
  'SS',
  'TT',
  'UU',
  'VV',
  'WW',
  'XX',
  'YY',
  'ZZ',
]
const rowlabels3 = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
]

const rowLables = [rowlabels1, rowlabels2, rowlabels3]

export default function (newData: {[x: string]: string | any[]}, key: string | number) {
  let lastElement = newData[key][newData[key].length - 1]

  rowLables.every(keyArray => {
    if (keyArray.includes(lastElement)) {
      const inx = keyArray.findIndex(elm => elm === lastElement) + 1
      lastElement = keyArray[inx]
      return false
    }
    const re = /[A-Z]-[0-9]/g
    if (lastElement.match(re)) {
      const letter = lastElement.split('-')[0]
      const i = Number(lastElement.split('-')[1])
      lastElement = `${letter}-${i + 1}`
      return false
      // if (keyArray.includes(letter)) {
      //   const inx = keyArray.findIndex(elm => elm === letter) + 1
      //   lastElement = `${keyArray[inx]}-${i+1}`
      //   return false
      // }
    }
    return true
  })

  return lastElement
}
