import React from "react";
import * as S from "./styles";

const Overlays = ({ setModals }) => {
  return <S.Container onClick={() => setModals(false)} />;
};

export default Overlays;
