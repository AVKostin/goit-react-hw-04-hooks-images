import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation-name: Opacity;
  animation-duration: 500ms;
  background-color: rgba(0, 0, 0, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  overflow-y: auto;
  transition-property: transform, opacity, visibility;
  transition-duration: 250ms;
  transition-delay: cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 120;
`;

export const ModalWindow = styled.div`
  position: absolute;
  width: 360px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
    @media screen and (min-width: 600px) {
        width: 600px;
  }
    @media screen and (min-width: 700px) {
        width: 700px;
  }
    @media screen and (min-width: 1200px) {
        width: 1200px;
  }
`;

export const ModalImage = styled.img`
  object-fit: fill;
  width: 100%;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 1);
  background-color: lightgrey;
`;

export const Description = styled.p`
  position: absolute;
  left: 0px;
  color: #fff;
  padding: 18px;
  border-radius: 10px;
  background-color: #000000a8;
  width: 100%;
`;
