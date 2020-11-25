import React from 'react'
import Link from 'next/link'

import { priceFormatted } from './helpers'
import {
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBView,
    MDBCol,
    MDBBtn
} from 'mdbreact';


export const PropertySection = ({ properties }) => {
    return (
        <>
            <h2 className="h2-responsive font-weight-bold text-center my-4 globalColor">Notre Catalogue</h2>
            <MDBRow>
                {
                    properties && properties.map(
                        property => (
                            <MDBCol md="4" lg="4" key={property._id}>
                                <MDBView zoom>
                                    <Link href={`/property/${property.slug}`}>
                                        <a>
                                            <img src={property.pictures[0]} alt={property.title} className="globalImg" />
                                        </a>
                                    </Link>
                                </MDBView>
                                <MDBCardBody>
                                    <MDBCardTitle>{property.title}</MDBCardTitle>
                                    <MDBCardText>
                                        <strong>{priceFormatted(property.price)}</strong>
                                    </MDBCardText>
                                </MDBCardBody>
                            </MDBCol>
                        )
                    )
                }
            </MDBRow>
            <div className="text-center">
                <Link href="/properties" passHref>
                    <>
                        <MDBBtn tag="a" role="button" className="globalButton">Afficher Plus</MDBBtn>
                    </>
                </Link>
            </div>
            <hr className="my-5" />
        </>
    )
}