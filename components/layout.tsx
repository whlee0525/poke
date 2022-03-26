import React from 'react';
import * as S from './layout.styled';

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return <S.Wrapper>{children}</S.Wrapper>;
}
