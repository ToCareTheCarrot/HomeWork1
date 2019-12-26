import React from 'react';

function SocialButton(props){
    return (
        <div>
            <a href="#" class={`fa fa-${props.type}`}></a>
        </div>
    );
}

export default SocialButton;