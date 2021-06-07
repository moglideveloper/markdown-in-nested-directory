import { Link } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'

export default function String() {
    return (
        <Layout>
           <div className="links">

                <Link to="/courses/core_java">Core Java</Link><br/>
            </div> 
        </Layout>
    )
}
