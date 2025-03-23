import PropTypes from 'prop-types';

const GlobalError = ({ error }) => (
    <div role="alert">
      <h2>Erreur critique</h2>
      <p>{error.message}</p>
    </div>
);

GlobalError.propTypes = {
    error: PropTypes.shape({
      message: PropTypes.string.isRequired,
    }).isRequired,
};
  
export default GlobalError;