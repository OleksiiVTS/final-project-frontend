import styled from '@emotion/styled/macro';

export const Stars = styled.div`
.star {
    height: 24px;
    width: 24px;
    margin: 2px;
    float: left;
    background-color: #CEC9C1;
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