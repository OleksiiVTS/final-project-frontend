import React from 'react';
// import StarSVG from './Star.svg'
// import './Star.css'


 const Star = ({ selected=false, onClick=f=>f }) =>
    <div className={ (selected) ? "star selected" : "star" } onClick={onClick}>
    </div>


export default Star;