const getCircleCoordinate = (element: any) => {
  const transform = element.getAttribute('transform')
  const cx = element.getAttribute('cx')

  if (transform) {
    const matrix = () => transform && transform.split(/matrix\(/)[1].split(/\)/)[0]
    const result = () => matrix().split(/ /)
    console.debug(`matrix: ${matrix()}`)
    console.debug(`result: ${result()}`)
    const coordinate = {
      x: Math.round(Number(result()[result().length - 2])),
      y: Math.round(Number(result()[result().length - 1])),
    }
    return coordinate
  }
  if (cx) {
    const cy = element.getAttribute('cy')
    const coordinate = {
      x: Math.round(Number(cx)),
      y: Math.round(Number(cy)),
    }
    return coordinate
  }

  return {x: 0, y: 0}
}

export const getPathCoordinate = (element: any) => {
  // const m = /M/ || /m/
  const m = /M|m/
  const pathAttr = element.getAttribute('d')
  const result = () =>
    pathAttr && (pathAttr.indexOf('M') > -1 || pathAttr.indexOf('m') > -1) ? pathAttr.split(m)[1].split(/ /) : ['0', '0c']
  // const result = matrix.split(/matrix\(|\)| /)
  // console.debug(`result: ${result}`)
  const y = Math.round(Number(result()[1].split(/c/)[0]))
  const coordinate = {
    x: Math.round(Number(result()[0])),
    y,
  }
  // console.debug(`coordinateX: ${coordinate.x}`)
  // console.debug(`coordinateY: ${coordinate.y}`)
  return coordinate
}

export default getCircleCoordinate
