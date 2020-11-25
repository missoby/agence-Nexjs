import React from 'react'
import { priceFormatted } from './helpers'
import {
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBView,
    MDBCol
} from 'mdbreact';
import Link from 'next/link';

export const PropertyVip = ({ properties }) => {
    return (
        <>
            <h2 className="h2-responsive font-weight-bold text-center my-4 globalColor">Bien sponsorisés</h2>
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

        </>
    )
}