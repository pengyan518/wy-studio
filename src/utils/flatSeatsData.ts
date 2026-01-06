function flatSeatsData(SeatsData: any) {
  const allSeats: any[] = []
  const wrapperFn = () => {
    // eslint-disable-next-line no-restricted-syntax
    for (const levelProp in SeatsData) {
      if (Object.prototype.hasOwnProperty.call(SeatsData, levelProp)) {
        const level = SeatsData[levelProp]
        const {sections} = level.data
        // eslint-disable-next-line no-restricted-syntax
        for (const sectionProp in sections) {
          if (Object.prototype.hasOwnProperty.call(sections, sectionProp)) {
            const section = sections[sectionProp]

            // eslint-disable-next-line no-restricted-syntax
            for (const seatIndex in section.data) {
              if (Object.prototype.hasOwnProperty.call(section.data, seatIndex)) {
                const seat = {...section.data[seatIndex], section: section.name}
                // seat.section = section.name
                if (seat.x !== '0' && seat.y !== '0') {
                  allSeats.push(seat)
                }
              }
            }
          }
        }
      }
    }
  }
  wrapperFn()
  // console.debug(allSeats)
  return allSeats
}

export default flatSeatsData
