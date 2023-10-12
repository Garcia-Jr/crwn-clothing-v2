import './form-input.styles.scss';

const FormInput = ({ label, htmlFor, ...rest }) => {
  return (
    <div className="group">
      <input className="form-input" {...rest} />
      {label && (
        <label
          className={`${rest.value.length ? 'shrink' : ''} form-input-label`}
          htmlFor={htmlFor}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
