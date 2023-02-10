import PropTypes from 'prop-types';
import { Section, StatList, Item } from './Statistics.styled';
import { StatisticItem } from 'components/StatisticItem/StatisticItem';

export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      {title && <h2>{title}</h2>}
      <StatList>
        {stats.map(stat => (
          <Item key={stat.id}>
            <StatisticItem stats={stat} />
          </Item>
        ))}
      </StatList>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    })
  ),
};
