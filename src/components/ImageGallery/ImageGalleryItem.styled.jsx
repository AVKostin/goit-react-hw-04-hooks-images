import styled from 'styled-components';

export const ImageItem = styled.li`
  box-shadow: 0px 3px 5px -4px rgba(0, 0, 0, 1);
  -webkit-box-shadow: 0px 3px 5px -4px rgba(0, 0, 0, 1);
  -moz-box-shadow: 0px 3px 5px -4px rgba(0, 0, 0, 1);
  border: 1px solid #e2d3d3bc;
  border-radius: 0 0 10px 10px;
  transform: scale(1);
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  &:hover,
  &:focus {
    transform: scale(1.02);
    box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 1px rgb(0 0 0 / 14%),
      0 2px 1px rgb(0 0 0 / 20%);
    // box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.2);
  }
`;

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 300px;
  border: 3px solid #fff;
  border-radius: 10px;
  overflow: hidden;
`;

export const InfoWrapper = styled.div`
  padding-top: 10px;
  padding-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: space-around;
    padding-right: 15px;
    padding-left: 10px;
}
`;
export const Info = styled.p`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 6px;
`;

export const Comments = styled.b`
  color: #321610;
  font-size: 18px;
  margin-top: 5px;
  margin-bottom: 10px;
`;
