import styled from 'styled-components';

export const CurrentTeamContainer = styled.div`
  height: 600px;
  padding-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    height: 583px;
  }
`;

export const CurrentTeamItem = styled.div`
  height: 70%;
  width: 250px;
  padding: 10px;
  background-color: rgb(140 211 241);
  border-radius: 20px;
  margin-top: 10px;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.7);

  @media screen and (min-width: 375px) and (max-width: 767px) {
    width: 215px;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    width: 260px;
  }
`;

export const BorderOutside = styled.div`
  padding: 10px;
  margin: 0 auto;
  width: 130px;
  margin-bottom: 10px;
`;

export const SwiperImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  width: 115px;
  height: 115px;
`;

export const TeamImage = styled.img`
  width: 120px;
  height: 120px;
  max-width: 100%;
  max-height: 100%;
  border: 2px solid blue;
  border-radius: 50%;
  box-sizing: border-box;
`;

export const TeamName = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 1.3em;
  max-width: 150px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  color: #ffffff;
`;

export const TeamSubtitle = styled.h3`
  font-weight: 600;
  font-size: 22px;
  line-height: 1em;
  text-align: center;
  color: #000000;
`;

export const SocList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 10px;
`;

export const SocItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  width: 44px;
  border-radius: 50%;
  background: #f0f0f0;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #ffffff;
  }
`;

export const SocLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SocIcon = styled.svg`
  fill: var(--log-text-color);
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    fill: #000fff;
    transition: 100ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

export const TeamText = styled.ul`
  font-weight: 400;
  font-size: 18px;
  line-height: 1em;
  text-align: center;
  color: #000000;
`;
