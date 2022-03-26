import type { NextPage } from "next";
import { useRouter } from "next/router";
import dayjs from "dayjs";

import { Mirror } from "../styles/mirror.styled";

const Home: NextPage = () => {
  const random = dayjs().second();

  const { push } = useRouter();
  const handleClickMirror = () => push(`/poketmon/${random}`);

  return (
    <Mirror onClick={handleClickMirror}>
      <p>거울아 거울아 나는 어떻게 생겼니?</p>
    </Mirror>
  );
};

export default Home;
