import React from 'react'
import api from '../auth/axios'

import { Layout } from '../components/layout'
import { Card } from '../components/card'
import { SearchFilter } from "../components/searchFilter"

import { MDBContainer } from 'mdbreact'
import { useRouter } from 'next/router'
import ReactPaginate from 'react-paginate'

const Properties = ({ properties, pageCount, currentPage }) => {
    const router = useRouter();

    const paginationHandler = (page) => {
        const currentPath = router.pathname;
        const currentQuery = { ...router.query };
        currentQuery.page = page.selected + 1;
        router.push({
            pathname: currentPath,
            query: currentQuery
        }).then(() => window.scrollTo(0, 0))
    }
    return (
        <Layout footer>
            <MDBContainer>
                <SearchFilter />
                <Card properties={properties} />
                <nav className="pages mx-auto mt-4">
                    <ReactPaginate
                        onPageChange={paginationHandler}
                        initialPage={currentPage - 1}
                        pageCount={pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        previousLabel={"Précédent"}
                        nextLabel={"Suivant"}
                        containerClassName="pagination"
                        breakClassName="page-item"
                        breakLabel="..."
                        pageClassName="page-item"
                        previousClassName="page-item"
                        nextClassName="page-item"
                        pageLinkClassName="page-link"
                        previousLinkClassName="page-link"
                        nextLinkClassName="page-link"
                        activeClassName="active"
                    /></nav>
            </MDBContainer>
        </Layout>
    )
}

export const getServerSideProps = async ({ query }) => {
    const page = query.page || 1
    const { data } = await api.get(`/api/properties?page=${page}`)
    const properties = data.data
    const currentPage = data.currentPage
    const pageCount = data.totalPages
    return {
        props: {
            properties,
            currentPage,
            pageCount
        }
    };
}

export default Properties