import React from "react";
import styled from "styled-components";
const Container = styled.div`
  overflow: hidden;
`;
const GaugeBase = styled.div<{ value: number; size: number }>`
  display: flex;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background: linear-gradient(to right, #0088ff 0%, #0088ff 60%, #00ddff 100%);
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: -2;
  font-size: ${(props) => props.size / 20}px;

  ::after {
    content: "";
    background-color: ${(props) => props.theme.bg};
    position: absolute;
    transform: rotate(45deg) translate(50%, 50%);
    height: ${(props) => props.size}px;
    width: ${(props) => props.size}px;
    z-index: -1;
  }
`;

const GaugeInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 60%;
  background: ${(props) => props.theme.bg};
  border-radius: 50%;
  font-size: 1.75em;
`;

export const Gauge = (props: {
  value: number;
  min: number;
  max: number;
  children: React.ReactNode;
  size: number;
}) => {
  const { value, min, max, children } = props;
  const percent = (value - min) / (max - min);
  return (
    <Container>
      <GaugeBase value={percent} size={props.size}>
        <GaugeInner>{children}</GaugeInner>
      </GaugeBase>
    </Container>
  );
};
