import styled from 'styled-components';
import { ReactComponent as SliderPrevIcon} from "../../images/sliderPrev-icon.svg"
import { ReactComponent as SliderNextIcon} from "../../images/sliderNext-icon.svg"

export const SliderMainSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const SliderHeader = styled.h2`
  font-weight: 700;
  font-size: 28px;
  line-height: 1.14;
  font-family: Inter;
  text-transform: uppercase;
  margin-bottom: 40px;
  color: #3E85F3;
  
  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 1.1;
    margin-bottom: 50px;
`

export const PrevIcon = styled(SliderPrevIcon)`
  margin-right: 25px;
  cursor: pointer;
`
export const NextIcon = styled(SliderNextIcon)`

  cursor: pointer;
`
export const MissedReviewsMessage = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;
`