import { useState, useEffect } from "react";
import { Layout } from "../../components/layout";
import { useRouter } from "next/router";
import api from "../../auth/axios";
import { Card } from "../../components/card";
import { SearchFilter } from "../../components/searchFilter";
import Head from 'next/head'

const Search = () => {
    const router = useRouter();
    const [properties, setProperties] = useState("");

    useEffect(() => {
        async function getProperty() {
            const { data } = await api.post("/api/property/list/search", {
                filters: {
                    title: router.query.title,
                    category: router.query.category,
                },
            });
            setProperties(data);
        }
        getProperty();
    }, [router.query.title, router.query.category]);

    return (
        <>
            <Head>
                <title>Agence Immobilière - Résultats de la recherche</title>
                <meta name="description" content="Application Nextjs" />
                <meta name="keywords" content="Nextjs,React,HTML,CSS,JavaScript"></meta>
            </Head>
            <Layout footer>
                <div className="container">
                    <SearchFilter />
                    {router.query.category || router.query.title ? (
                        <div>
                            <div className="mb-4 text-center globalColor font-weight-bolder">
                                {properties.size} Bien(s) trouve(s)
              </div>
                            <Card properties={properties.data} />
                        </div>
                    ) : null}
                </div>
            </Layout>
        </>
    );
};

export default Search;