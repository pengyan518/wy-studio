// import 'intersection-observer'
import {useEffect, useRef, useState} from 'react'

// IntersectionObserver.prototype.POLL_INTERVAL = 100
const handleObserver = (entries: any[]) => {
  const target = entries[0]
}
export default ({root = null, rootMargin = '20px', threshold = 0, ho = handleObserver}) => {
  // const [entry, updateEntry] = useState({})
  const [node, setNode] = useState(null)

  const observer = useRef(
    new window.IntersectionObserver(ho, {
      root,
      rootMargin,
      threshold,
    })
  )


  useEffect(() => {
    const {current: currentObserver} = observer
    currentObserver.disconnect()
    if (node) currentObserver.observe(node)
    return () => currentObserver.disconnect()
  }, [node, observer])

  return [setNode]
}
