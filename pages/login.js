import { useEffect, useState } from "react";
import { MDBContainer, MDBInput } from "mdbreact";
import { Layout } from "../components/layout";
import useAuth from "../auth/context";
import { useRouter } from "next/router";
import Head from 'next/head'

const FormPage = () => {
    const [values, setValues] = useState({
        username: "",
        password: "",
    });
    const router = useRouter();
    const { login, isAuthenticated } = useAuth();

    useEffect(() => {
        if (isAuthenticated) {
            router.push("/");
        }
    }, [isAuthenticated, router]);

    const handleChange = (name) => (e) => {
        setValues({ ...values, [name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        login(values.username, values.password);
    };
    return (
        <>
            <Head>
                <title>Agence Immobilière - Connectez-vous</title>
                <meta name="description" content="Application Nextjs" />
                <meta name="keywords" content="Nextjs,React,HTML,CSS,JavaScript"></meta>
            </Head>
            <Layout>
                <MDBContainer>
                    <form onSubmit={onSubmit}>
                        <p className="h4 text-center my-4">Connexion</p>
                        <div className="grey-text">
                            <MDBInput
                                label="Nom d'utilisateur"
                                icon="user"
                                group
                                name="username"
                                type="text"
                                onChange={handleChange("username")}
                            />
                            <MDBInput
                                label="Mot de passe"
                                name="password"
                                onChange={handleChange("password")}
                                icon="lock"
                                group
                                type="password"
                                validate
                            />
                        </div>
                        <div className="text-center">
                            <button type="submit" className="globalButton">
                                connexion
            </button>
                        </div>
                    </form>
                </MDBContainer>
            </Layout>
        </>
    );
};

export default FormPage;