import React from "react";
import Link from "next/link"
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

export const Footer = () => {
    return (
        <MDBFooter color="black" className="font-small pt-4 mt-4">
            <MDBContainer className="text-center text-md-left">
                <MDBRow>
                    <MDBCol md="6">
                        <h5 className="title">Présentation</h5>
                        <p>
                            Si vos visitare hanc paginam hic quod vestri 'verisimile vos in investigatione temere damnationem.
                            Et sicut non sufficit verbum temere interdum et Si vos visitare hanc paginam hic quod vestri 'verisimile vos in investigatione temere damnationem.
                            Et sicut non sufficit verbum temere interdum
                        </p>
                    </MDBCol>
                    <MDBCol md="6">
                        <h5 className="title">Links</h5>
                        <ul>
                            <li className="list-unstyled">
                                <Link href="/">
                                    <a>Home</a>
                                </Link>
                            </li>
                            <li className="list-unstyled">
                                <Link href="/properties">
                                    <a>Properties</a>
                                </Link>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Link 3</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Link 4</a>
                            </li>
                        </ul>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright:
                    <Link href="https://www.linkedin.com/in/olfabenyedder/">
                        <a> Olfa Ben Yedder </a>
                    </Link>
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}