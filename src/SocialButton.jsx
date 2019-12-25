import React from 'react';

function SocialButton(props){
    return (
        <div>
            <a href="#" class={`fa fa-${props.type}`}>{props.children}</a>
        </div>
    );
}

export default SocialButton;