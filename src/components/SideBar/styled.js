import styled from "styled-components";

const SideBarTitle = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  margin: 24px 0;

  font-weight: bolder;
  color: #252b27;
`;

const SideBarItem = styled.div`
  width: 100%;
  height: 32px;
  margin-bottom: 20px;
`;

const ItemContainer = styled.div`
  width: 100%;
  height: 100%;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
`;

const ItemActiveTick = styled.div`
  width: 3px;
  height: 100%;
  background-color: ${(props) => (props.bg ? props.bg : "whitesmoke")};
`;

const ItemIcon = styled.div`
  width: 24px;
  height: 24px;
  margin: 0 15px;
  background-position: center center;
  background-repeat: no-repeat;

  color: ${(props) => (props.color ? props.color : "#98a1b3")};

  svg {
    height: 100%;
    width: 100%;
  }
`;

const ItemText = styled.span`
  font-size: 16px;
  color: ${(props) => (props.color ? props.color : "#63666e")};
`;

export {
  SideBarTitle,
  SideBarItem,
  ItemContainer,
  ItemActiveTick,
  ItemIcon,
  ItemText,
};
