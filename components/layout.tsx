import Image from 'next/image'
import * as S from './layout.styled';

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }:Props) {
  return (
    <S.Wrapper>
      <S.Mirror>
        {children}
        </S.Mirror>
    </S.Wrapper>
  )
}