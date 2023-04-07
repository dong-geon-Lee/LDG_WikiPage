import React from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../../recoils/modalState";
import * as S from "./styles";

const Overlays = () => {
  const [, setModals] = useRecoilState(modalState);
  return <S.Container onClick={() => setModals(false)} />;
};

export default Overlays;
