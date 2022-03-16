import * as S from './poketmons.styled';

export async function getServerSideProps(context) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/1/?language='ko`)
  // const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?language='ko`)
  const data = await res.json()

  return {
    props: {
      data
    }, // will be passed to the page component as props
  }
}

export default function Poketmons({data}) {
  console.log(data);
  return (
      <S.Title>포켓몬 목록입니다!</S.Title>
  );
}
