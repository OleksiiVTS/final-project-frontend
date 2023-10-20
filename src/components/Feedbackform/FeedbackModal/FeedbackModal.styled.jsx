import styled from '@emotion/styled/macro';

export const Feedbackcontainer = styled.div`
box-sizing: border-box;
padding: 0 18px 18px 18px;

`;
export const Ratingwrapper = styled.div`
display: flex;
flex-direction: column;
`;

export const Ratingtitle = styled.div`
margin: 0
white-space: nowrap;
color: #111;
font-family: Inter;
font-size: 12px;
font-weight: 500;
line-height: 1.16;
}
`;
export const FormFeedback = styled.form`

.toolbar{
  display: flex;
  justify-content: space-between;
  margin-top: 18px;
  padding-bottom: 8px;
  align-items: center;
  
}

.head {
  align-items: center
  color: #343434;
  font-family: Inter;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.16;
}

.text_content {
  box-sizing: border-box;
  width: 100%;
  height: 130px;
  padding: 14px 18px;
  border-radius: 3px;
  box-sizing: border-box;
  resize: none;
  background: #efefef;
  color: #343434;
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.28;

  @media screen and (min-width: 768px) {
    height: 127px;
  }
  }
  
  .buttonfoot{
    display: flex;
    gap: 10px;
    margin-top: 18px;

   .btn-foot {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #E5EDFA;
    border-radius: 8px;
    padding: 10px;
    color:#343434;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.17;
    border: 0;
  
    &:hover {
      background: #2b78ef;
      color: #fff;
      box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
      transition: background-color color box-shadow 0.2s;
    }

    }
 }
`;
export const StyledFeedbackToolbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
 
  & button {
    line-height: 0;
    padding: 10;
    border: none;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    }

     & button:not(:last-child) {
    margin-right: 8px;
    } 

    .btnEdit {
      color: #3E85F3;
      background-color: #E3F3FF;
    }
    
    .btnEdit:hover {
      background-color: #3E85F3;
      color: #FFFFFF;
     }

    .btnDel {
     
      background-color: #EA3D6533; 
      color: #EA3D65;
    }

    .btnDel:hover {
      background-color: #EA3D65;
      color: #FFFFFF;
    }
    
    & svg {
      width: 14px;
      height: 14px;
      stroke: currentColor;
      fill: none;
  
      @media screen and (min-width: 768px) {
        width: 16px;
        height: 16px;
      }
 }`;


