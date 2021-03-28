import styled from "styled-components";
import { ReactComponent as Glyph } from "../../assets/Glyph.svg";
import { ReactComponent as Circle } from "../../assets/circle.svg";

const AsideStyled = styled.aside`
  padding: 20px 0;
  width: 80px;
  background: #1b1d29;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GlyphhStyled = styled(Glyph)`
  color: #0085ff;
  width: 27px;
`;

const Circles = styled.div`
  margin-top: 68px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 600px;
`;

export const Aside = () => (
  <AsideStyled>
    <GlyphhStyled />
    <Circles>
      {new Array(8).fill(0).map((_, index) => (
        <Circle key={index} />
      ))}
    </Circles>
  </AsideStyled>
);
