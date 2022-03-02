const BoostGauge = () => {
  return (
    <div style={{ height: 380, width: 380 }}>
      <div>Boost Gauge</div>
    </div>
  );
};

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
};

export const MainPage = (props: MainPageProps) => {
  return (
    <div>
      <BoostGauge />
      <div>
        sub gauge cluster
        <div>coolant</div>
        <div>throttle</div>
        <div>
          indicators
          <div>overheat</div>
          <div>overboost</div>
        </div>
      </div>
      <div>
        data cluster
        <div>map sensor voltage</div>
        <div>boost sensor voltage</div>
      </div>
      <div>map selector</div>
      <div>connected to ECONXXXXXXXXXXXXXX</div>
    </div>
  );
};
