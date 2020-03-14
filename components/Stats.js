import useStats from '../utils/useStats';
import styled from 'styled-components';

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
`;
const StatBlock = styled.div`
  background: #dfdfdf;
  padding: 2rem;
  border-radius: 2rem;
  font-size: 2rem;
  text-align: center;
  display: grid;
  align-items: center;
  justify-content: center;
`;

export default function Stats({ url }) {
  const { stats: stats, loading, err } = useStats(url);
  if (!stats) return <p>Loading ....</p>;
  return (
    <StatGrid>
      <StatBlock className="statBlock">
        <h3>Confirmed:</h3>
        {stats.confirmed === undefined ? <span>No Info</span> : <span>{stats.confirmed.value}</span>}
      </StatBlock>
      <StatBlock className="statBlock">
        <h3>Deaths:</h3>
        {stats.deaths === undefined ? <span>No Info</span> : <span>{stats.deaths.value}</span>}
      </StatBlock>
      <StatBlock className="statBlock">
        <h3>Recovered:</h3>
        {stats.recovered === undefined ? <span>No Info</span> : <span>{stats.recovered.value}</span>}
      </StatBlock>
    </StatGrid>
  );
}
