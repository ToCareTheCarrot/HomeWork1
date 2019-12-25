import React from 'react';

function IconBar(props){
    
    if (props.orientation==="vertical"){
        return (
            <div className="icon-bar-v">
                <a className="active" href="#"><i class="fa fa-home"></i></a>
                <a href="#"><i className="fa fa-search"></i></a>
                <a href="#"><i className="fa fa-envelope"></i></a>
                <a href="#"><i className="fa fa-globe"></i></a>
                <a href="#"><i className="fa fa-trash"></i></a>
            </div>
        );
    } else {
        return (
            <div className="icon-bar-h">
                <a className="active" href="#"><i class="fa fa-home"></i></a>
                <a href="#"><i className="fa fa-search"></i></a>
                <a href="#"><i className="fa fa-envelope"></i></a>
                <a href="#"><i className="fa fa-globe"></i></a>
                <a href="#"><i className="fa fa-trash"></i></a>
            </div>
        );
    }
}

export default IconBar;

