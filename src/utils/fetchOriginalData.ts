import * as _ from 'lodash'
import {query} from './query'
import getCircleCoordinate, {getPathCoordinate} from './getCoordinate'

const fetchOriginalData = (param?: string): any[] => {
  const circles = query('svg circle, svg path, svg ellipse')
  const ar: {[key: string]: any} = {}
  const circleArr: any[] = []
  // const pathArr: any[] = []
  // const pathObj: {[key: string]: any} = {}
  const pathArr: any[] = []

  circles.forEach((e, i) => {
    const key: any = e.nodeName
    if (key === 'circle' || key === 'ellipse') {
      const obj: {[key: string]: any} = {}
      const valueCircle: {[key: string]: any} = {
        index: i,
        ...getCircleCoordinate(e),
      }
      // _.assign(valueCircle, getCircleCoordinate(e))

      // eslint-disable-next-line consistent-return
      const keyCircle = (): any => {
        const keyNext: any = e.nextSibling.nextSibling
        const keyPrev: any = e.previousSibling.previousSibling
        const keyNext2: any = keyNext?.nextSibling.nextSibling
        const keyNext3: any = keyNext2?.nextSibling.nextSibling
        // const keyNext4: any = keyNext3?.nextSibling.nextSibling

        if (keyNext && keyPrev) {
          if (keyNext.nodeName === 'path') {
            return `A`
          }
          if (keyPrev.nodeName === 'path') {
            return `B`
          }

          if (keyNext2 && keyNext3) {
            if (
              keyPrev.nodeName === 'circle' &&
              keyNext.nodeName === 'circle' &&
              keyNext2.nodeName === 'circle' &&
              keyNext3.nodeName === 'circle'
            ) {
              return `G`
            }
          }

          return `C`
        }
        // if (!keyPrev) {
        //   return `A` // first
        // }
        if (!keyNext && keyPrev.nodeName === 'path') {
          return `B`
        }
        return `E` // last one
      }

      obj[keyCircle()] = valueCircle
      circleArr.push(obj)
    } else {
      // const valuePath: any = getPathCoordinate(e)

      const valuePath: {[key: string]: any} = {
        index: i,
        ...getPathCoordinate(e),
      }

      // _.assign(valuePath, getPathCoordinate(e))

      // const keyPath: any = `Path-${i}`
      // pathObj[keyPath] = valuePath
      pathArr.push(valuePath)
    }
    // pathArr.push(e)
  })
  // ar.circleArr = circleArr
  // ar.pathGroups = pathObj

  return [circleArr, pathArr]
}

export default fetchOriginalData
