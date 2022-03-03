import { Gauge } from "./Gauge";
import styled from "styled-components";

export type MainPageProps = {
  boost: number;
  coolant: number;
  throttle: number;
  overheat: boolean;
  overboost: boolean;
  mapSensorVoltage: number;
  boostSensorVoltage: number;
  mapSelector: number;
  connected: boolean;
  easterEggs: boolean;
};

const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em;
`;

const Indicator = styled.div<{ active: boolean }>`
  text-align: center;
  border-radius: 4px;
  padding: 0.25em;
  border: 3px solid ${(props) => (props.active ? "#aa8000" : "#888888")};
  font-weight: bold;
  background: ${(props) => (props.active ? "#ffb700" : "#aaaaaa")};
  color: black;
  opacity: ${(props) => (props.active ? "1" : "0.5")};
`;

export const MainPage = (props: MainPageProps) => {
  return (
    <Page>
      <Gauge min={0} max={27.01} value={props.boost} size={380}>
        <div style={{ textAlign: "center" }}>
          Boost
          <div style={{ fontSize: "2em" }}>
            {props.easterEggs && props.boost > 27
              ? "R.I.P."
              : Number(props.boost).toFixed(2)}
          </div>
          PSI
        </div>
      </Gauge>
      <div
        style={{
          display: "flex",
          placeContent: "center space-evenly",
          width: 380,
        }}
      >
        <Gauge min={0} max={300} value={props.coolant} size={125}>
          <div style={{ textAlign: "center" }}>
            Coolant
            <div style={{ fontSize: "2em" }}>{props.coolant}°F</div>
          </div>
        </Gauge>
        <Gauge min={0} max={100} value={props.throttle} size={125}>
          <div style={{ textAlign: "center" }}>
            Throttle
            <div style={{ fontSize: "2em" }}>{props.throttle}%</div>
          </div>
        </Gauge>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            placeContent: "center space-evenly",
            alignItems: "center",
          }}
        >
          <Indicator active={props.overboost}>OVERBOOST</Indicator>
          <Indicator active={props.overheat}>OVERHEAT</Indicator>
        </div>
      </div>
      <div>
        data cluster
        <div>map sensor voltage</div>
        <div>boost sensor voltage</div>
      </div>
      <div>map selector</div>
      <div>connected to ECONXXXXXXXXXXXXXX</div>
    </Page>
  );
};
