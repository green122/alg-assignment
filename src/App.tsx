import "./App.css";
import { Services } from "./components/Services/Services";
import "antd/dist/antd.css";
import styled from "styled-components";
import { Filters } from "./components/Filters/Filters";
import { useState } from "react";
import { debounce } from "./utils/debounce";
import { Header } from "./components/Header/Header";
import { Aside } from "./components/Aside/Aside";

const MainContainer = styled.div`
  width: 1280px;
  margin: auto;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

const Container = styled.div`
  background: #f5f7fa;
  padding: 40px 32px 114px;
  height: calc(100% - 60px);
  display: flex;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {
  const [searchString, setSearchString] = useState("");
  const searchCallback = debounce(setSearchString, 600);

  return (
    <MainContainer>
      <Aside />
      <ContentContainer>
        <Header />
        <Container>
          <Filters onEnter={searchCallback} />
          <Services search={searchString} />
        </Container>
      </ContentContainer>
    </MainContainer>
  );
}

export default App;
