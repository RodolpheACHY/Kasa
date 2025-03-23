import { isRouteErrorResponse } from "react-router";
import PropTypes from 'prop-types';

export function ErrorBoundary({ error }) {
  if (isRouteErrorResponse(error)) {
    return (
      <>
        <h1>{error.status} {error.statusText}</h1>
        <p>{error.data}</p>
      </>
    );
  }
  return <h1>Erreur inconnue</h1>;
}

ErrorBoundary.propTypes = {
    error: PropTypes.object, // L'erreur peut être un objet ou null
};

ErrorBoundary.defaultProps = {
    error: null, // Définir une valeur par défaut de null
};