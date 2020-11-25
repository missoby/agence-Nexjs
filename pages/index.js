import Head from 'next/head'
import { MDBContainer } from 'mdbreact'

import api from '../auth/axios'

import { Layout } from '../components/layout'
import { PropertyVip } from '../components/propertyVip'
import { Carousel } from '../components/carousel'
import { PropertySection } from '../components/propertySection'
import { Features } from '../components/features'

export default function Home({ propertiesVip, properties }) {
  return (
    <>
      <Head>
        <title>Agence Immobilière</title>
        <meta name="description" content="Application Nextjs" />
        <meta name="keywords" content="Nextjs,React,HTML,CSS,JavaScript"></meta>
      </Head>
      <Layout footer>
        <Carousel />
        <MDBContainer>
          <PropertyVip properties={propertiesVip} />
          <PropertySection properties={properties} />
          <Features />
        </MDBContainer>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const { data: propertiesVip } = await api.get("/api/properties/vip");
  const { data } = await api.get("api/properties?limit=6")
  const properties = data.data
  return {
    props: {
      propertiesVip,
      properties
    }
  };
}
