import React from 'react';

import './style.css';

class Header extends React.Component {

    render(){

        return (
            <div id="page-header" >
                {this.props.title}
                {this.props.children}
            </div>
        );

    }

}

export default Header;