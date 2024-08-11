import React from 'react';
import './Button.css';
function Button(props, ...rest) {
  return (
    <div>
      <button type='submit' className='Button' {...props} {...rest}>
        {props.text}
      </button>
    </div>
  );
}

export default Button;
