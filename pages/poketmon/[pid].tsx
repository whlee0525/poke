import Image from "next/image";
import { useRouter } from "next/router";

import * as S from "../../styles/poketmon.styled";
import { Mirror } from "../../styles/mirror.styled";

export async function getServerSideProps({
  params,
}: {
  params: { pid: string };
}) {
  const { pid } = params;

  const speciesRes = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${pid}`
  );
  const { names } = await speciesRes.json();
  const name = names?.find(
    ({ language }: { language: { name: string } }) => language.name === "ko"
  )?.name;

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pid}`);
  const { sprites } = await res.json();
  const picture = sprites?.front_default ?? sprites?.front_shiny ?? "nothing";

  return {
    props: { name, picture }, // will be passed to the page component as props
  };
}

interface Props {
  name: string;
  picture?: string;
}

const Poketmon = ({ name, picture }: Props) => {
  const { push } = useRouter();
  const handleClickMirror = () => push(`/`);

  return (
    <Mirror onClick={handleClickMirror}>
      <S.Wrapper>
        <h1>당신은 {name}을(를) 닮았습니다</h1>
        <Image src={picture || ""} alt={name} width="250px" height="250px" />
        <p>다시 질문하기</p>
      </S.Wrapper>
    </Mirror>
  );
};

export default Poketmon;
