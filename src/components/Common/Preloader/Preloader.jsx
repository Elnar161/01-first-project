import React from 'react';
import preloader from '../../../assets/images/loading_blue.gif'

let Preloader = (props) => {
    return(
    <div>
        <img src={preloader} />
    </div>);
}

export default Preloader;