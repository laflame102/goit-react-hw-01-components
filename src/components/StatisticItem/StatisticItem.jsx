import PropTypes from 'prop-types';
export const StatisticItem = ({ stats: { label, percentage } }) => {
  return (
    <div>
      <span>{label}</span>
      <span>{percentage}</span>
    </div>
  );
};

StatisticItem.propTypes = {
  stats: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
