import React from 'react';
import {Link} from 'react-router-dom';
import './App.css'

class Nav extends React.Component{
        render(){
            return(
                <nav>
                    <ul>
                        <li><Link to ="/">Login </Link></li>
                    </ul>
                </nav>

            );
        }
}

export default Nav;