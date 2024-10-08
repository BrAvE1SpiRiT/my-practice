'use client'
import { useState, ChangeEvent, FocusEvent } from 'react';

interface InputBoxProps {
  text: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const InputBox: React.FC<InputBoxProps> = ({ text, type, name, value, onChange, required = false }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const handleFocus = () => setIsFocused(true);

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    setIsValid(event.target.value.trim() !== '');
  };

  return (
    <div className="relative w-[200px] mt-6 sm:w-[350px] sm:mt-8">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        required={required}
        className="relative px-[5px] py-1 sm:px-[10px] sm:py-2 border-none outline-none w-full bg-transparent text-white text-xs sm:text-lg tracking-[0.1em] z-[2]" 
      />
      <span className={`absolute left-0 py-[5px] sm:py-[10px] px-0 pointer-events-none tracking-[0.1em] duration-500
        ${isFocused || isValid ? 'text-[#333] text-[0.6em] sm:text-[0.9em] translate-y-[-19px] sm:translate-y-[-32px]' : 'text-[#777] text-[0.7em] sm:text-[1em]'}`}>
        {text}
      </span>
      <i 
        style={{
          position: 'absolute',
          left: '0',
          bottom: '0',
          width: '100%',
          background: 'linear-gradient(-45deg, #8f65ec, #6e6cf5)',
          pointerEvents: 'none',
          transition: '0.5s',
          zIndex: '1',
        }}
        className={`${isFocused || isValid ? 'h-full rounded' : 'rounded-none h-[1px] sm:h-[3px]'}`}
      ></i>
    </div>
  );
}

export default InputBox;
