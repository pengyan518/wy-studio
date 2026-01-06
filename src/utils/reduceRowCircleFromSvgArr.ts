import fetchOriginalData from './fetchOriginalData'

const reduceRowCircleFromSvgArr = () => {
  const ar: any[] = fetchOriginalData()
  console.debug(ar)
  const [circleArr, pathGroups] = ar
  const rowArr: any[] = []
  const singlePoints: any[] = []
  const groupArray: any[] = []
  const twoPointGroup: any[] = []

  circleArr.forEach((obj: {[s: string]: unknown}, i: number, array: any[]) => {
    const key: string = Object.keys(obj)[0]
    const val: any = Object.values(obj)[0]
    // const item: RowPrototype = {
    //   top: {},
    //   bottom: {},
    // }
    const item: any[] = []
    if (key.indexOf('A') > -1) {
      // item.top = val
      item.push(val)
      const bottomPoint: {[s: string]: any} = array[i + 1]
      // eslint-disable-next-line prefer-destructuring
      // if (bottomPoint) item.bottom = Object.values(bottomPoint)[0]
      if (bottomPoint) item.push(Object.values(bottomPoint)[0])

      rowArr.push(item)
    }

    if (key.indexOf('C') > -1 || key.indexOf('E') > -1) {
      singlePoints.push(val)
    }

    if (key.indexOf('G') > -1) {
      groupArray.push(val)
    }
  })

  // console.debug('groupArray:', groupArray)

  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  groupArray.length > 0 &&
    groupArray.forEach((elm, index, array) => {
      const item: any[] = []
      if (index % 2 === 0) {
        item.push(elm)
        const bottomPoint = array[index + 1]
        if (bottomPoint) item.push(bottomPoint)
      }
      if (item.length > 0) twoPointGroup.push(item)
    })

  console.debug('twoPointGroup:', twoPointGroup)

  console.debug('rowArr (get 2端点)')
  console.debug(rowArr)

  console.debug('singlePoints:')
  console.debug(singlePoints)

  const rowArrAndGroupArr = [...rowArr, ...twoPointGroup]

  console.debug('rowArrAndGroupArr:', rowArrAndGroupArr)

  return [rowArrAndGroupArr, singlePoints, pathGroups]
}

export default reduceRowCircleFromSvgArr
