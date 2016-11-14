import React from 'react';
import { Nav } from 'office-ui-fabric-react';

import './style.css';

const menuGroups = [

    {
        links: [
            {
                name: "Teste",
                url: "example.com"
            }
        ]
    }

];



class Layout extends React.Component {


    render() {


        return (

            <div id="layout">
                <aside>
                    <h1 id="logo"> Heroes RH! </h1>
                    <Nav groups={menuGroups} />
                </aside>
                <main>
                    {this.props.children}
                </main>
            </div>

        );


    }

}


export default Layout;