import styled from '@emotion/styled/macro';

export const Stars = styled.div`
.star {
    cursor: pointer;
    height: 24px;
    width: 24px;
    margin: 2px;
    float: left;
    background-color: #CEC9C1;
    clip-path: polygon(50% 0%, 63% 38%, 100% 38%, 69% 59%, 82%  100%, 50% 75%, 18% 100%, 31% 59%, 0% 38%, 37% 38%);
    
    }
    .star.selected {
    background-color: #FFAC33;
    }
    
    #wrapper{
     margin-left:auto;
     margin-right:auto;
     height:auto; 
     width:auto;
    }
    
    .raiting {
    width: 90px;
    float: none;
    }`