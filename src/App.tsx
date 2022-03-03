import React from "react";
import { MainPage } from "./components/MainPage";
import styled, { keyframes, ThemeProvider } from "styled-components";
import { SettingsModal } from "./components/SettingsModal";

const PhoneScreen = styled.div`
  width: 400px;
  height: 900px;
  border: 5px solid grey;
  border-radius: 15px;
  margin: 10px;
  color: ${(props) => props.theme.text};
  background: ${(props) => props.theme.bg};
  overflow: hidden;
  z-index: -9999;
  position: relative;
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

const pulse = keyframes`
0%, 100% {
  background-color: #ffaaaa;
}

50% {
  background-color: #ffff88;
}
`;

const DangerToManifold = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  animation: ${pulse} 0.25s infinite;
  color: black;
  font-size: 1.5em;
`;

const App = () => {
  const [boost, setBoost] = React.useState(17.6);
  const [coolant, setCoolant] = React.useState(175);
  const [throttle, setThrottle] = React.useState(24);
  const [overheat, setOverheat] = React.useState(false);
  const [overboost, setOverboost] = React.useState(false);
  const [mapSensorVoltage, setMapSensorVoltage] = React.useState(1234);
  const [boostSensorVoltage, setBoostSensorVoltage] = React.useState(1234);
  const [mapSelector, setMapSelector] = React.useState(0);
  const [connected, setConnected] = React.useState(true);
  const [easterEggs, setEasterEggs] = React.useState(false);

  const data = {
    boost,
    coolant,
    throttle,
    overheat,
    overboost,
    mapSensorVoltage,
    boostSensorVoltage,
    mapSelector,
    connected,
    easterEggs,
  };

  return (
    <Container>
      <RowContainer>
        <ThemeProvider theme={{ mode: "dark", bg: "black", text: "white" }}>
          <div>Dark Mode</div>
          <PhoneScreen>
            <MainPage {...data} />
            {easterEggs && overboost && (
              <DangerToManifold>
                <h1>Warning!!!</h1>
                <h2>Danger to Manifold</h2>
              </DangerToManifold>
            )}
          </PhoneScreen>
          <PhoneScreen>
            <SettingsModal />
          </PhoneScreen>
        </ThemeProvider>
      </RowContainer>
      <RowContainer>
        <ThemeProvider theme={{ mode: "light", bg: "white", text: "black" }}>
          <div>Light Mode</div>
          <PhoneScreen>
            <MainPage {...data} />
            {easterEggs && overboost && (
              <DangerToManifold>
                <h1>Warning!!!</h1>
                <h2>Danger to Manifold</h2>
              </DangerToManifold>
            )}
          </PhoneScreen>
          <PhoneScreen>
            <SettingsModal />
          </PhoneScreen>
        </ThemeProvider>
      </RowContainer>
      <RowContainer style={{ justifyContent: "flex-start" }}>
        <div>Controls</div>
        <div>
          <div>Boost: {boost} PSI</div>
          <input
            type="range"
            min="0"
            max="27.01"
            step="0.01"
            value={boost}
            onChange={(e) => setBoost(Number(e.target.value))}
          />
        </div>
        <div>
          <div>Coolant Temp: {coolant}F</div>
          <input
            type="range"
            min="0"
            max="250"
            value={coolant}
            onChange={(e) => setCoolant(Number(e.target.value))}
          />
        </div>
        <div>
          <div>Throttle: {throttle}%</div>
          <input
            type="range"
            min="0"
            max="100"
            value={throttle}
            onChange={(e) => setThrottle(Number(e.target.value))}
          />
        </div>
        <div>
          <div>Overheat: {overheat ? "ON" : "OFF"}</div>
          <input
            type="checkbox"
            checked={overheat}
            onChange={(e) => setOverheat(e.target.checked)}
          />
        </div>
        <div>
          <div>Overboost: {overboost ? "ON" : "OFF"}</div>
          <input
            type="checkbox"
            checked={overboost}
            onChange={(e) => setOverboost(e.target.checked)}
          />
        </div>
        <div>
          <div>Map Sensor Voltage: {mapSensorVoltage}mV</div>
          <input
            type="number"
            value={mapSensorVoltage}
            onChange={(e) => setMapSensorVoltage(Number(e.target.value))}
          />
        </div>
        <div>
          <div>Boost Sensor Voltage: {boostSensorVoltage}mV</div>
          <input
            type="number"
            value={boostSensorVoltage}
            onChange={(e) => setBoostSensorVoltage(Number(e.target.value))}
          />
        </div>
        <div>
          <div>Map Selector: {mapSelector}</div>
          <select
            value={mapSelector}
            onChange={(e) => setMapSelector(Number(e.target.value))}
          >
            <option value="0">Off</option>
            <option value="1">Map 1</option>
            <option value="2">Map 2</option>
            <option value="3">Map 3</option>
          </select>
        </div>
        <div>
          <div>check for dumb reactive memes</div>
          <input
            type="checkbox"
            checked={easterEggs}
            onChange={(e) => setEasterEggs(e.target.checked)}
          />
        </div>
      </RowContainer>
    </Container>
  );
};

export default App;
