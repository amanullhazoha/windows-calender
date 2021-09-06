/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-spreading */
const Button = ({ type, text, children, ...rest }) => (
    <button type={type} {...rest}>
        {children}
        {text}
    </button>
);

export default Button;
