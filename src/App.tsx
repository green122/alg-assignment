import "./App.css";
import { Services } from "./components/Services/Services";
import "antd/dist/antd.css";
import styled from "styled-components";
import { Filters } from "./components/Filters/Filters";

const Container = styled.div`
  width: 1200px;
  height: 937px;
  background: #f5f7fa;
  margin: auto;
  overflow: scroll;
  padding: 32px;
`;

function App() {
  return (
    <Container>
      <Filters />
      <Services />
    </Container>
  );
}

export default App;
