import { useState } from 'react'

export default function useCountries () {
  const [resCountries, setResCountries] = useState([])

  fetch('https://restcountries.com/v3.1/all?fields=name,flags,region')
    .then((res) => res.json())
    .then((json) => {
      setResCountries(json)
    })

  const mappedCountries = resCountries?.map((country) => ({
    id: country.name.common,
    flag: country.flags.png,
    flagAlt: country.flags.alt,
    country: country.name.common,
    region: country.region
  }))

  return { mappedCountries }
}
