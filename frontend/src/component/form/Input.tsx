import React from 'react';

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  onChangeText?: (value: string) => void;
}

const Input = (props: InputProps) => {
  const cloneProps = { ...props };
  const { className, name, readOnly, onChangeText, onChange } = cloneProps;

  let combinedClassName = [
    'iui-input border rounded-md border-gray-200 h-10 px-2',
    className || '',
  ].join(' ');

  // 기본 event 아닌 잘못된 event는 삭제
  delete cloneProps.onChangeText;

  // TODO: 원래 움직이는 label 있는데 추후 구현
  return (
    <input
      {...cloneProps}
      className={combinedClassName}
      name={name}
      readOnly={readOnly}
      onChange={(e) => {
        onChange?.(e);
        onChangeText?.(e.target.value);
      }}
    />
  );
};

export default Input;
