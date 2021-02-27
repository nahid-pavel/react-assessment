import React from 'react';
import { Button, Container, Nav, NavDropdown } from 'react-bootstrap';
import { useSelector, shallowEqual } from "react-redux";
import { useHistory } from 'react-router-dom';
import { logoutAction } from '../auth/_redux/Actions';
import { useDispatch } from 'react-redux';
import './header.css';


const Header = (

) => {
    const history = useHistory();
    const dispatch = useDispatch()



    const { profileData } = useSelector(
        (state) => state?.auth,
        shallowEqual
    );




    return (

        <Container>
            <div className="d-flex justify-content-between align-items-center ">
                <div className="logo" onClick={() => history.push('/')} style={{ font: 'italics', cursor: 'pointer' }}>
                    <h3>Shop Today</h3>
                </div>
                <div className="d-flex justify-content-between  align-items-center" >

                    {profileData?.isAuth ? (


                        <NavDropdown title={profileData?.name.split('')[0].toUpperCase() + profileData?.name.slice(1,)} id='username'>



                            <NavDropdown.Item onClick={() => {
                                history.push("/");
                                dispatch(logoutAction())
                            }}>
                                Logout
                           </NavDropdown.Item>
                        </NavDropdown>
                    ) : (

                            <Nav.Link>
                                <Button className="btn btn-success" onClick={() => history.push('/account')}>Account</Button>

                            </Nav.Link>

                        )







                    }

                </div>
            </div>




        </Container>





    )


}

export default Header;


