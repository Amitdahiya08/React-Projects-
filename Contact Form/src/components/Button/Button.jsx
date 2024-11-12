import PropTypes from 'prop-types';  // Import PropTypes
import styles from "./Button.module.css";


const Button = (props) => {
    const {isOutline, icon, text, ...rest}=props;
  return (
    <button 
    {...rest}
    className={isOutline ? styles.outline_btn : styles.primary_btn}  >
        {icon}
        {text}
    </button>
  );
}

// Define prop types and mark them as required/optional
Button.propTypes = {
  icon: PropTypes.element,  // You can expect an element (like an icon)
  text: PropTypes.string.isRequired,  
  isOutline: PropTypes.bool,
};
// Set default prop for icon (optional)
Button.defaultProps = {
    icon: null,  
};

export default Button;
