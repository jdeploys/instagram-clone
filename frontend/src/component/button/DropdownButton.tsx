import React, { ReactNode, useState } from 'react';

interface DropdownButtonItem {
  label: string;
  onClick: () => void;
}

interface DropdownButtonProps {
  items?: DropdownButtonItem[];
  children?: ReactNode;
}

const DropdownButton = ({ items, children }: DropdownButtonProps) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className="relative">
      <div onClick={() => setIsShow(!isShow)}>
        <svg
          width="24"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_403_2933)">
            <path
              d="M12.0001 4C13.1046 4 14.0001 3.10457 14.0001 2C14.0001 0.89543 13.1046 0 12.0001 0C10.8955 0 10.0001 0.89543 10.0001 2C10.0001 3.10457 10.8955 4 12.0001 4Z"
              fill="#374957"
            />
            <path
              d="M12.0001 14.0003C13.1046 14.0003 14.0001 13.1049 14.0001 12.0003C14.0001 10.8957 13.1046 10.0003 12.0001 10.0003C10.8955 10.0003 10.0001 10.8957 10.0001 12.0003C10.0001 13.1049 10.8955 14.0003 12.0001 14.0003Z"
              fill="#374957"
            />
            <path
              d="M12.0001 23.9997C13.1046 23.9997 14.0001 23.1043 14.0001 21.9997C14.0001 20.8951 13.1046 19.9997 12.0001 19.9997C10.8955 19.9997 10.0001 20.8951 10.0001 21.9997C10.0001 23.1043 10.8955 23.9997 12.0001 23.9997Z"
              fill="#374957"
            />
          </g>
          <defs>
            <clipPath id="clip0_403_2933">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      {isShow && items ? (
        <div className="absolute right-0 rounded bg-white z-10 p-3 shadow-md flex flex-col animate__animated animate__fadeIn animate__faster animate__repeat-1">
          {items.map((row, index) => (
            <div className="w-10" key={index}>
              <button onClick={row.onClick}>{row.label}</button>
            </div>
          ))}
        </div>
      ) : (
        children
      )}
    </div>
  );
};

export default DropdownButton;
