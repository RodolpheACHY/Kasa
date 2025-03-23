import PropTypes from "prop-types";
import styles from "./tags.module.scss";

const Tags = ({ tags }) => {
  return (
    <div className={styles.tagsContainer}>
      {tags.map((tag, index) => (
        <span key={index} className={styles.tag}>{tag}</span>
      ))}
    </div>
  );
};

// ✅ Validation des props
Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired, // ✅ Vérifie que `tags` est un tableau de strings
};

export default Tags;