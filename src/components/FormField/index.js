import React from 'react';

function FormField({ label, type, name, value, onChange }) {
  return (
    <div>
      <label htmlFor={}>
        {label}
        :
        <input
          id={}
          type={type}
          value={value}
          name={name}
          onChange={onChange}
        />
      </label>
    </div>
  );
}

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default FormField;
