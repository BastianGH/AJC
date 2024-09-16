import { Routes, Route } from 'react-router-dom'
import { Home, PageNotFound } from './../pages/index'

const AllRoutes = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="*" element={<PageNotFound />}/>
            </Routes>
        </>
    )
}

export default AllRoutes