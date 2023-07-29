import React from 'react'

export function Countries ({ countries }) {
  return (countries?.map(country => (
      <li className='country-container' key={country.id}>
        <div className='img-container'>
          <img src={country.flag} alt={country.flagsAlts} />
        </div>
        <h3 className='country-name'>{country.country}</h3>
       <h5 className='region-name'>{country.region}</h5>
      </li>
  )))
}
