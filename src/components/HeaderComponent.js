import React,{Component} from 'react';
import {Navbar, NavbarBrand,Jumbotron} from 'reactstrap'; 
class Header extends Component
{
    render()
    {
        return (
            <>   
            {/* if it doesn't work, then use <React.Fragment> tag */}
            <Navbar dark>
                <div className="container">
                <NavbarBrand href='/'>Le Casa De Papel</NavbarBrand>
                </div>
            </Navbar>
            <Jumbotron>
                <div className='container'>
                    <div className='row row-header'>
                        <div className='col-12 col-sm-6'>
                            <h1>Le Casa De Papel</h1>
                            <p>Sergio El Professor</p>
                        </div>
                    </div>
                </div>
            </Jumbotron>
            </>
        );

    }
}

export default Header;