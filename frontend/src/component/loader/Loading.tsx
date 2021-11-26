import React from 'react';
import TwinklingStar from '@/component/loader/TwinklingStar';

interface LoadingProps {
  isShow?: boolean;
}

const Loading = ({ isShow }: LoadingProps) => {
  return isShow ? <TwinklingStar /> : null;
};

export default Loading;
