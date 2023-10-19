import styled from '@emotion/styled/macro';

export const Feedbackcontainer = styled.div`
display: flex;
flex-direction: column;
margin-left: 18px;
margin-right: 18px;
`;
export const Ratingwrapper = styled.div`
display: flex;
flex-direction: column;
// margin-left: 18px;
// margin-right: 18px;
`;

export const Ratingtitle = styled.div`
margin: 0
overflow: hidden;
text-overflow: ellipsis;
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
  // justify-content: center;
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
  width: 100%;
  height: 127px;
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
  }
  
  .buttonfoot{
    display: flex;
    gap: 10px;
    margin-top: 18px;

    .btn-sumbit{
      width: 100%;
      height: 48px;
      /* position: relative;
      min-width: 200px;
      height: 50px;
      align-self: center;
      background: var(--accent-color);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15); */
      border-radius: 8px;
      /* font-weight: 700;
      font-size: 16px;
      line-height: 30px;
      align-items: center;
      letter-spacing: 0.06em; */
  }
  .save {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #3e85f3;
    border-radius: 8px;
    padding: 10px;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.17;
    border: 0;
  
    &:hover {
      background: #2b78ef;
      box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
      transition: background-color box-shadow 0.2s;
    }

    .cencel {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #efefef;
      border-radius: 8px;
      padding: 10px;
      color: #111;
      font-size: 14px;
      font-weight: 600;
      line-height: 1.28;
      border: 0;
    
      &:hover {
        box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
        transition: box-shadow 0.2s;
      }
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
      color: #EA3D65;
      background-color: #EA3D6533;
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


