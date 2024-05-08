import React, { useId } from 'react';

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currecnyOptions = [],
  selectCurrency = 'usd',
  amountDisable = false,
  currencyDisable = false,
  className = '',
}) {
  const amountId = useId();
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}>
      <div className='w-1/2'>
        <label htmlFor={amountId} className='text-black/40 mb-2 inline-block'>
          {label}
        </label>
        {/*// to connect or bind with input and label we have to use useId hook here it
        can also done by without this// */}
        <input
          id={amountId} // here it is bind with id
          className='outline-none w-full bg-transparent py-1.5'
          type='number'
          placeholder='Amount'
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && Number(onAmountChange(e.target.value))
          }
        />
      </div>
      <div className='w-1/2 flex flex-wrap justify-end text-right'>
        <p className='text-black/40 mb-2 w-full'>Currency Type</p>
        <select
          className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currecnyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option> //we should use key always with loop
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
