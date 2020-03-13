import useStats from '../utils/useStats';
import { useState } from 'react';
import Stats from '../components/Stats';

export default function CountrySelector() {
  const countries = useStats('https://covid19.mathdro.id/api/countries');
  const [selectedCountry, setSelectedCountry] = useState('US');
  if (!countries) return <p>Loading ....</p>;
  return (
    <div>
      <select
        onChange={e => {
          setSelectedCountry(e.target.value);
        }}
      >
        {Object.entries(countries.countries).map(([country, code]) => {
          return (
            <option key={code} value={code}>
              {country}
            </option>
          );
        })}
      </select>
      <Stats url="https://covid19.mathdro.id/api/countries/USA"></Stats>
    </div>
  );
}
