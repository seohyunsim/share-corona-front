import { DailyConfirmed } from "./DailyConfirmed";
import { GraphConfirmed } from "./GraphConfirmed";
import { BoxWrap } from "./styles";

export const Confirmed = () => {
  return (
    <BoxWrap>
      <DailyConfirmed />
      <GraphConfirmed />
    </BoxWrap>
  );
};
