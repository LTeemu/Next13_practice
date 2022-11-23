'use client';
import React, { useState, useEffect, useRef } from 'react'
import Station from './Station';
import { FaPlayCircle, FaPauseCircle, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';
import Multiselect from 'multiselect-react-dropdown';

const StationList = ({ stations }) => {
  const [tags, setTags] = useState([])
  const [countries, setCountries] = useState([])
  const [activeStation, setActiveStation] = useState()
  const [paused, setPaused] = useState(true)
  const [playTime, setPlayTime] = useState(0)
  const [playTimeString, setPlayTimeString] = useState("00:00")
  const [volume, setVolume] = useState(1)
  const [muted, setMuted] = useState(false)
  const player = useRef()

  let tagOptions = [
    { name: 'Music', value: 'music' },
    { name: 'News', value: 'news' },
    { name: 'Talk', value: 'talk' },
    { name: 'Entertainment', value: 'entertainment' },
    { name: 'Hits', value: 'hits' },
    { name: 'Pop', value: 'pop' },
    { name: 'Rock', value: 'rock' },
    { name: 'Classical', value: 'classical' },
    { name: 'Jazz', value: 'jazz' },
    { name: 'Dance', value: 'dance' },
    { name: 'Electronic', value: 'electronic' },
    { name: 'Oldies', value: 'oldies' },
    { name: 'Country', value: 'country' },
    { name: 'House', value: 'house' },
    { name: 'Techno', value: 'techno' },
    { name: 'Ambient', value: 'ambient' },
    { name: 'Rap', value: 'rap' }
  ]

  let countryOptions = [
    { name: 'United States', value: 'US' },
    { name: 'Germany', value: 'DE' },
    { name: 'China', value: 'CN' },
    { name: 'France', value: 'FR' },
    { name: 'Russia', value: 'RU' },
    { name: 'Mexico', value: 'MX' },
    { name: 'Greece', value: 'GR' },
    { name: 'Italy', value: 'IT' },
    { name: 'United Kingdom', value: 'GB' },
    { name: 'Canada', value: 'CA' },
    { name: 'Poland', value: 'PL' },
    { name: 'Brazil', value: 'BR' },
    { name: 'Spain', value: 'ES' },
    { name: 'Netherlands', value: 'NL' },
    { name: 'Argentina', value: 'AR' },
    { name: 'Switzerland', value: 'CH' },
    { name: 'Turkey', value: 'TR' },
    { name: 'Australia', value: 'AU' },
    { name: 'Uganda', value: 'UG' },
    { name: 'Serbia', value: 'RS' },
    { name: 'Belgium', value: 'BE' },
    { name: 'India', value: 'IN' },
    { name: 'Romania', value: 'RO' },
    { name: 'Peru', value: 'PE' },
    { name: 'Hungary', value: 'HU' },
    { name: 'Chile', value: 'CL' },
    { name: 'Croatia', value: 'HR' },
    { name: 'Austria', value: 'AT' },
    { name: 'Bulgaria', value: 'BG' },
    { name: 'Czechia', value: 'CZ' },
    { name: 'New Zealand', value: 'NZ' },
    { name: 'Portugal', value: 'PT' },
    { name: 'Colombia', value: 'CO' },
    { name: 'Ukraine', value: 'UA' },
    { name: 'Sweden', value: 'SE' },
    { name: 'Indonesia', value: 'ID' },
    { name: 'Philippines', value: 'PH' },
    { name: 'Afghanistan', value: 'AF' },
    { name: 'Ireland', value: 'IE' },
    { name: 'Kenya', value: 'KE' },
    { name: 'Norway', value: 'NO' },
    { name: 'Slovakia', value: 'SK' },
    { name: 'United Arab Emirates ', value: 'AE' },
    { name: 'Finland', value: 'FI' },
    { name: 'Israel', value: 'IL' },
    { name: 'Ecuador', value: 'EC' },
    { name: 'Morocco', value: 'MA' },
    { name: 'Pakistan', value: 'PK' },
    { name: 'Denmark', value: 'DK' },
    { name: 'South Africa', value: 'ZA' },
    { name: 'Slovenia', value: 'SI' },
    { name: 'Taiwan', value: 'TW' },
    { name: 'South Korea', value: 'KR' },
    { name: 'Lithuania', value: 'LT' },
    { name: 'Japan', value: 'JP' },
    { name: 'Latvia', value: 'LV' },
    { name: 'Thailand', value: 'TH' },
    { name: 'Tunisia', value: 'TN' },
    { name: 'Uruguay', value: 'UY' },
    { name: 'Dominican Republic', value: 'DO' },
    { name: 'Bosnia and Herzegovina', value: 'BA' },
    { name: 'Belarus', value: 'BY' },
    { name: 'Bolivia', value: 'BO' },
    { name: 'Hong Kong', value: 'HK' },
    { name: 'Saudi Arabia', value: 'SA' },
    { name: 'Estonia', value: 'EE' },
    { name: 'Syria', value: 'SY' },
    { name: 'Lebanon', value: 'LB' },
    { name: 'Malaysia', value: 'MY' },
    { name: 'Algeria', value: 'DZ' },
    { name: 'Vietnam', value: 'VN' },
    { name: 'Singapore', value: 'SG' },
    { name: 'Albania', value: 'AL' },
    { name: 'British Indian Ocean Territory', value: 'IO' },
    { name: 'Egypt', value: 'EG' },
    { name: 'Iran', value: 'IR' },
    { name: 'Sri Lanka', value: 'LK' },
    { name: 'Costa Rica', value: 'CR' },
    { name: 'Guatemala', value: 'GT' },
    { name: 'Cyprus', value: 'CY' },
    { name: 'Luxembourg', value: 'LU' },
    { name: 'Honduras', value: 'HN' },
    { name: 'Nigeria', value: 'NG' },
    { name: 'El Salvador', value: 'SV' },
    { name: 'Tanzania', value: 'TZ' },
    { name: 'Venezuela', value: 'VE' },
    { name: 'Moldova', value: 'MD' },
    { name: 'Iceland', value: 'IS' },
    { name: 'Puerto Rico', value: 'PR' },
    { name: 'Bangladesh', value: 'BD' },
    { name: 'Nicaragua', value: 'NI' },
    { name: 'Ghana', value: 'GH' },
    { name: 'Paraguay', value: 'PY' },
    { name: 'Cuba', value: 'CU' },
    { name: 'Kuwait', value: 'KW' },
    { name: 'Angola', value: 'AO' },
    { name: 'Nepal', value: 'NP' },
    { name: 'Malta', value: 'MT' },
    { name: 'North Macedonia', value: 'MK' },
    { name: 'Jamaica', value: 'JM' }
  ]

  const filterStations = (stations) => {
    const limit = 50
    if (countries.length > 0 && tags > 0) {
      let filterByCountry = stations.filter((station) => countries.includes(station.country))
      let filterByTags = filterByCountry.filter((station) => station.tags.split(',').some((tag => tags.includes(tag))))
      let mostClicks = filterByTags.sort((a, b) => { return a.clickcount < b.clickcount })
      return mostClicks.slice(0, limit)
    } else if (countries.length > 0) {
      let filterByCountry = stations.filter((station) => countries.includes(station.country))
      let mostClicks = filterByCountry.sort((a, b) => { return a.clickcount < b.clickcount })
      return mostClicks.slice(0, limit)
    } else if (tags.length > 0) {
      let filterByTags = stations.filter((station) => station.tags.split(',').some((tag => tags.includes(tag))))
      let mostClicks = filterByTags.sort((a, b) => { return a.clickcount < b.clickcount })
      return mostClicks.slice(0, limit)
    } else {
      let mostClicks = stations.sort((a, b) => { return a.clickcount < b.clickcount })
      return mostClicks.slice(0, limit)
    }
  }

  useEffect(() => {
    muted
      ? player.current.volume = 0
      : player.current.volume = volume
  }, [volume, muted])

  const secondsToForm = (time) => {
    let mins = Math.floor(time / 60);
    if (mins < 10) {
      mins = '0' + mins;
    }
    let secs = Math.floor(time % 60);
    if (secs < 10) {
      secs = '0' + secs;
    }
    return mins + ':' + secs
  }

  const updatePlayTime = () => {
    setPlayTime(player.current.currentTime)
    setPlayTimeString(secondsToForm(player.current.currentTime))
  }

  return (
    <>
      <Multiselect
        placeholder="Country (optional)"
        options={countryOptions}
        displayValue="name"
        onSelect={(list, item) => setCountries([...countries, item.name])}
        onRemove={(list, item) => setCountries(countries.filter((country) => country !== item.name))}
      />

      <Multiselect
        placeholder="Tags (optional)"
        options={tagOptions}
        displayValue="name"
        onSelect={(list, item) => setTags([...tags, item.value])}
        onRemove={(list, item) => setTags(tags.filter((tag) => tag !== item.value))}
      />

      <audio
        ref={player}
        //controls
        autoPlay
        src={activeStation?.url_resolved}
        onPause={() => setPaused(true)}
        onPlay={() => setPaused(false)}
        onTimeUpdate={updatePlayTime}
        onError={() => alert(`Station ${activeStation.name} doesn\'t work`)}
      />

      <div className='flex gap-2'>
        <p>{playTimeString}</p>

        <button onClick={() => player.current.paused ? player.current.play() : player.current.pause()} disabled={!activeStation} className='grid disabled:brightness-75 place-content-center'>
          {paused
            ? <FaPlayCircle color='black' size={40} />
            : <FaPauseCircle color='black' size={40} />
          }
        </button>

        <input type="range" value={volume} min={0} max={1} step={0.01} onInput={(i) => setVolume(i.target.value)} disabled={!activeStation} />
        <button onClick={() => setMuted(!muted)} className='grid place-content-center'>
          {muted
            ? <FaVolumeMute color='black' size={40} />
            : <FaVolumeUp color='black' size={40} />
          }
        </button>
      </div>

      <div className='grid grid-cols-1 gap-3 mb-12 border-2 border-red-500 md:grid-cols-2'>
        {filterStations(stations).map((station) => {
          return <Station key={station.stationuuid} station={station} onClick={() => { activeStation !== station && setActiveStation(station) }}
          />
        })}
      </div>
    </>
  )
}

export default StationList