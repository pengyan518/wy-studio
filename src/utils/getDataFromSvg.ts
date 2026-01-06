import * as _ from 'lodash'
import {query} from './query'
// import getCircleCoordinate, {getPathCoordinate} from './getCoordinateMath'
// import fetchOriginalData from './fetchOriginalData'
import reduceRowCircleFromSvgArr from './reduceRowCircleFromSvgArr'

// interface Ar {
//   circleArr: any[]
//   pathGroups: {[s: string]: unknown}
// }

// interface RowPrototype {
//   top: number
//   bottom: number
// }
// interface RowPrototype {
//   top: {[index: string]: number}
//   bottom: {[index: string]: number}
// }

// interface PathGroups {
//   top: number
// }

const getDataFromSvg = () => {
  const [rowArr, singlePoints, pathGroups] = reduceRowCircleFromSvgArr()
  const newRowArr: any[] = []
  const obj: {[p: string]: any} = {}

  rowArr.forEach((row: any[]) => {
    // const rowSeatObj: {[s: string]: any} = {}
    const singleRow: any[] = []
    // newRowArr.push(row.top)
    // rowSeatObj[row.top.index] = row.top
    singleRow.push(row[0])
    // eslint-disable-next-line no-restricted-syntax
    if (row.length === 2) {
      // eslint-disable-next-line no-restricted-syntax
      pathGroups.forEach((path: {index: any}) => {
        const {index} = path
        const condition = index > row[0].index && index < row[1].index
        if (condition) {
          singleRow.push(path)
        }
      })
      // rowSeatObj[row.bottom.index] = row.bottom
      singleRow.push(row[1])
      newRowArr.push(singleRow)
    }
  })
  // obj.rowSeats = newRowArr
  // obj.singlePoints = singlePoints
  // obj.endPoints = rowArr
  return {
    rowSeats: newRowArr,
    singlePoints,
    endPoints: rowArr
  }
}

export default getDataFromSvg
