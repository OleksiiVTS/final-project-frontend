import styled from 'styled-components';

export const SliderItemStyled = styled.div`
  padding: 24px;
  border: 1px solid #1111111A;
  border-radius: 8px;
  display: inline-block;
  width: 100%;
  max-width: 580px;
`;

export const UserInfo = styled.div`

  display: flex;
  gap: 18px;
  margin-bottom: 24px;

`;

export const UserPhoto = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%; 
`;
export const UserAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #3E85F3;
`;

export const UserName = styled.p`
  margin-bottom: 13px;
  font-weight: 700;
  font-size: 18px;

`;

export const UserComment = styled.p`
  margin-bottom: 13px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28;
  @media screen and (min-width: 768px) {
    margin-left: 68px;
  }
  
`;