export const colorPicker = ({ colorKey }) => {
  switch (colorKey) {
    case 'good':
      return 'hsl(127deg 65% 50% / 70%)';
    case 'neutral':
      return 'hsl(212deg 100% 47% / 70%)';
    case 'bad':
      return 'hsl(4deg 78% 53% / 70%)';
    default:
      return '#303030';
  }
};
