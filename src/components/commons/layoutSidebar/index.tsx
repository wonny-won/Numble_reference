import styled from "@emotion/styled";
import { MouseEvent } from "react";

interface IPropsSideBar {
  id: string;
  position: string;
  title: string;
  onClick: (event: MouseEvent<HTMLDivElement>) => void;
  isClick: boolean;
}
interface IPropsSideBars {
  position: string;
  isClick: boolean;
}

const SideBars = styled.div<IPropsSideBars>`
  width: 57px;
  height: 25px;
  background-color: ${(props) => (props.isClick ? "#fff" : "#298eb5")};
  border: 1px solid #0f465e;
  margin-bottom: 10px;
  border-radius: 0px 5px 5px 0px;
  position: absolute;
  left: 779px;
  top: ${(props) => props.position};
  color: ${(props) => (props.isClick ? "#298eb5" : "#fff")};
  font-size: 13px;
  font-weight: 400;
  text-align: center;
  line-height: 25px;
  cursor: pointer;
`;

const SideBar = (props: IPropsSideBar) => {
  return (
    <SideBars
      id={props.id}
      position={props.position}
      onClick={props.onClick}
      isClick={props.isClick}
    >
      {props.title}
    </SideBars>
  );
};

export default SideBar;
