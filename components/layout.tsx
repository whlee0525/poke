import Image from 'next/image'
import * as S from './layout.styled';

export default function Layout({ children }) {
  return (
    <S.Wrapper>
      <S.Mirror>
        {children}
        </S.Mirror>
    </S.Wrapper>
  )
}