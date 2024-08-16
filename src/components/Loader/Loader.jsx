import { PacmanLoader } from 'react-spinners';

const override = isFirst => {
  const style = {
    margin: '0 auto',
  };
  return isFirst
    ? {
        ...style,
        marginTop: '200px',
      }
    : style;
};

const Loader = ({ size, isFirst }) => {
  return (
    <PacmanLoader
      cssOverride={override(isFirst)}
      color="#7474fb"
      size={size}
      speedMultiplier={0.9}
      aria-label="Loading Spinner"
    />
  );
};

export default Loader;
