import React from 'react';
import {Link} from 'react-router';
import './style.css';

class ErrorPage extends React.Component {

    render(){

        return (
            <div id="error-page">
                {this.props.children}
                <Link to="/" > Pagina Inicial </Link>

            </div>
        )

    }


}

export default ErrorPage;