import React from "react";
import { MainPage } from "./components/MainPage";
import styled, { ThemeProvider } from "styled-components";
import { SettingsModal } from "./components/SettingsModal";

const PhoneScreen = styled.div`
  width: 400px;
  height: 900px;
  border: 5px solid grey;
  border-radius: 15px;
  margin: 10px;
  ${(props) =>
    props.theme.mode === "dark"
      ? "background-color: black;"
      : "background-color: white; color: black;"}};
`;
const RowContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const App = () => {
  return (
    <Container>
      <RowContainer>
        <ThemeProvider theme={{ mode: "dark" }}>
          <div>Dark Mode</div>
          <PhoneScreen>
            <MainPage />
          </PhoneScreen>
          <PhoneScreen>
            <SettingsModal />
          </PhoneScreen>
        </ThemeProvider>
      </RowContainer>
      <RowContainer>
        <ThemeProvider theme={{ mode: "light" }}>
          <div>Light Mode</div>
          <PhoneScreen>
            <MainPage />
          </PhoneScreen>
          <PhoneScreen>
            <SettingsModal />
          </PhoneScreen>
        </ThemeProvider>
      </RowContainer>
    </Container>
  );
};

export default App;
