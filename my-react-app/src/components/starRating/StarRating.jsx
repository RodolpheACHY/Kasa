import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";
import styles from "./starRating.module.scss";

const StarRating = ({ rating, maxStars = 5 }) => {
  const stars = Array.from({ length: maxStars }, (_, index) =>
    <FaStar                   
      key={index}
      color={index < rating ? "#FF6060" : "#E3E3E3"}
    /> 
  );

  return <div className={styles.starContainer}>{stars}</div>;
};

// Validation des `props`
StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
  maxStars: PropTypes.number,
};

export default StarRating;