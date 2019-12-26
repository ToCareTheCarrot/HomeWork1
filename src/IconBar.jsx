import React from 'react';

function IconBar(props){
        return (
            <div className={(props.orientation==="vertical") ? "icon-bar-v" : "icon-bar-h"}>
                <a className="active" href="#"><i class="fa fa-home"></i></a>
                <a href="#"><i className="fa fa-search"></i></a>
                <a href="#"><i className="fa fa-envelope"></i></a>
                <a href="#"><i className="fa fa-globe"></i></a>
                <a href="#"><i className="fa fa-trash"></i></a>
            </div>
        );
}

export default IconBar;

