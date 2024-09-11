import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DateFilter.css';
import { subDays } from 'date-fns';

const DateFilter = () => {
  const [startDate, setStartDate] = useState(subDays(new Date(), 2));
  const [endDate, setEndDate] = useState(new Date());
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLast2Days = () => {
    setStartDate(subDays(new Date(), 2));
    setEndDate(new Date());
    setIsDropdownOpen(false);
  };

  const handleCustomDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <div className='date-filter-container'>
      <button className='date-filter-button' onClick={toggleDropdown}>
        {/* {`${format(startDate, 'MM/dd/yyyy')} - ${format(
          endDate,
          'MM/dd/yyyy'
        )}`} */}
        Last 2 days
        <span className='date-filter-icon'>&#9662;</span>
      </button>
      {isDropdownOpen && (
        <div className='dropdown-menu'>
          <div className='dropdown-item' onClick={handleLast2Days}>
            Last 2 days
          </div>
          <div className='dropdown-item'>
            <DatePicker
              selected={startDate}
              onChange={handleCustomDateChange}
              startDate={startDate}
              endDate={endDate}
              selectsRange
              inline
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DateFilter;
