import styled from '@emotion/styled/macro';

export const Stars = styled.div`
.star {
    // cursor: pointer;
    height: 24px;
    width: 24px;
    margin: 2px;
    float: left;
    background-color: #CEC9C1;
    // clip-path: polygon(50% 0%, 63% 38%, 100% 38%, 69% 59%, 82%  100%, 50% 75%, 18% 100%, 31% 59%, 0% 38%, 37% 38%);
    // clip-path: polygon(50% 0%, 64% 27%, 98% 35%, 74% 54%, 79% 91%, 51% 73%, 21% 91%, 27% 55%, 2% 35%, 35% 28%);
    // clip-path: polygon(50% 0%, 69% 27%, 98% 35%, 80% 57%, 79% 91%, 51% 77%, 21% 91%, 21% 57%, 2% 35%, 29% 27%);
    clip-path: polygon(50% 0%, 64% 28%, 98% 35%, 78% 55%, 79% 91%, 51% 74%, 21% 91%, 25% 57%, 2% 35%, 36% 29%);   
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