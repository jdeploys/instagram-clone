import React from 'react';

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const Button = (props: ButtonProps) => {
  const cloneProps = { ...props };
  const { className, disabled } = cloneProps;

  let combinedClassName = [
    'iui-button rounded-sm text-white py-1',
    disabled ? 'bg-blue-200' : 'bg-blue-500',
    className || '',
  ].join(' ');

  return (
    <button {...cloneProps} className={combinedClassName}>
      {props.children}
    </button>
  );
};

export default Button;
