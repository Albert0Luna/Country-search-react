import React, { useState } from 'react'
import useCoutries from './src/hooks/getCountries.jsx'
import { Countries } from './src/components/countries'
import './src/styles/App.css'

export function App () {
  const [search, setSearch] = useState('')
  const { mappedCountries } = useCoutries()
  const [res, setRes] = useState()

  const handleChange = (e) => {
    const newValue = e.target.value
    const newTimeSearch = mappedCountries.filter(query => (query.country.toLowerCase().includes(newValue.toLowerCase())) || (query.region.toLowerCase().includes(newValue.toLowerCase())))
    setRes(newTimeSearch)
    setSearch(newValue)
  }

  function filterRegion (e) {
    e.preventDefault()
    const continent = e.target.value
    const newRes = mappedCountries.filter(countries => countries.region === continent)
    setRes(newRes)
  }

  function renderAll () {
    setRes(mappedCountries)
  }

  return (
        <div className='app-container'>

          <header>
            <h1>Country Search</h1>
          </header>

          <main>
            <section className="search-section">
              <form className="country-form">
                <label className="country-label" htmlFor="inputCountry">Search ➡</label>
                <input className="country-input" onChange={handleChange} value={search} id="inputCountry" />
              </form>
            </section>

            <section className="region-section">
              <div className="region-container">
                <button onClick={renderAll}>All</button>
                <button value="Americas" onClick={filterRegion}>America</button>
                <button value="Europe" onClick={filterRegion}>Europe</button>
                <button value="Asia" onClick={filterRegion}>Asia</button>
                <button value="Africa" onClick={filterRegion}>Africa</button>
                <button value="Oceania" onClick={filterRegion}>Oceania</button>
                <button value="Antarctic" onClick={filterRegion}>Antarctic</button>
              </div>
            </section>

            <section className="data-section">
              <ul className="data-container">
                <Countries countries={res} />
              </ul>
            </section>
          </main>

        </div>
  )
}
