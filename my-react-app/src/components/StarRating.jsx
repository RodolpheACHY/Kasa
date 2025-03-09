import PropTypes from "prop-types";
import { FaStar, FaRegStar } from "react-icons/fa";

const StarRating = ({ rating, maxStars = 5 }) => {
  const stars = Array.from({ length: maxStars }, (_, index) =>
    index < rating ? <FaStar key={index} color="#ff6060" /> :  <FaRegStar key={index} color="#ff6060" /> // ⭐ si index < rating, sinon ☆
  );

  return <div style={{ color: "#FFD700", fontSize: "24px" }}>{stars}</div>;
};

// ✅ Validation des `props`
StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
  maxStars: PropTypes.number,
};

export default StarRating;