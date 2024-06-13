import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Dropdown.css';
import { Info, UserCircle, ArrowDown } from '@phosphor-icons/react'; // Importing icons

const Dropdown = ({
  options,
  label,
  onSelect,
  labelVisibility,
  status,
  labelIconVisibility,
  leftIconVisibility,
  helperText,
  required,
  text,
  type,
  activeItemIndex,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(text);

  const handleSelect = (option, index) => {
    setSelected(option);
    onSelect(option, index);
    setIsOpen(false);
  };

  const getStatusClass = () => {
    switch (status) {
      case 'Filled':
        return 'dropdown-filled';
      case 'Disabled':
        return 'dropdown-disabled';
      case 'Error':
        return 'dropdown-error';
      default:
        return '';
    }
  };

  return (
    <div className={`dropdown ${getStatusClass()}`}>
      <div className='dropdown-header'>
        {labelVisibility === 'Visible' && (
          <label className='dropdown-label'>
            {label}
            {required === 'Yes' && <span className='required-asterisk'>*</span>}
            {labelIconVisibility === 'Hidden' || (
              <Info
                size={18}
                style={{
                  paddingLeft: '5px',
                  paddingRight: '3px',
                  position: 'absolute',
                  top: '4px',
                  left: '58px',
                }}
              />
            )}
          </label>
        )}
      </div>

      <button
        className='dropdown-button'
        onClick={() => setIsOpen(!isOpen)}
        disabled={status === 'Disabled'}
      >
        {leftIconVisibility === 'Hidden' || (
          <>
            {' '}
            <UserCircle size={26} weight='thin' className='icon' />
          </>
        )}
        {selected || 'Lorem ipsum'}
        <ArrowDown size={26} weight='thin' className='arrow-icon' />
      </button>
      {isOpen && (
        <ul className='dropdown-menu'>
          {options.map((option, index) => (
            <li
              key={index}
              className={`dropdown-item ${index === activeItemIndex ? 'active' : ''}`}
              onClick={() => handleSelect(option, index)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
      {helperText && <div className='dropdown-helper-text'>{helperText}</div>}
    </div>
  );
};

Dropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  label: PropTypes.string,
  onSelect: PropTypes.func,
  labelVisibility: PropTypes.oneOf(['Visible', 'Hidden']),
  status: PropTypes.oneOf(['Unfilled', 'Filled', 'Disabled', 'Error']),
  labelIconVisibility: PropTypes.oneOf(['Visible', 'Hidden']),
  leftIconVisibility: PropTypes.oneOf(['Visible', 'Hidden']),
  helperText: PropTypes.string,
  required: PropTypes.oneOf[('Yes', 'No')],
  text: PropTypes.string,
  type: PropTypes.oneOf(['SingleNoIcon', 'SingleRadio', 'Multi']),
  activeItemIndex: PropTypes.number,
};

Dropdown.defaultProps = {
  label: '',
  onSelect: () => {},
  labelVisibility: 'Visible',
  status: 'Default',
  labelIconVisibility: 'Hidden',
  leftIconVisibility: 'Hidden',
  helperText: '',
  required: 'No',
  text: '',
  type: 'SingleNoIcon',
  activeItemIndex: -1,
};

export default Dropdown;
