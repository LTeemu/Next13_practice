import React from 'react'
import StationList from './StationList'

const headers = new Headers({
  "content-type": "application/json",
  "user-agent": "testradio126126"
})

const getStations = async () => {
  const res = await fetch('https://de1.api.radio-browser.info/json/stations/topclick?hidebroken=true?limit=50', { method: 'GET', headers: headers, cache: 'force-cache' })
  const stationData = await res.json()
  return stationData
}

async function page() {
  const stations = await getStations()

  return (
    <StationList stations={stations} />
  )
}

export default page;
