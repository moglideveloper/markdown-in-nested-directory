import { Link } from 'gatsby'
import React from 'react'
import Layout from '../../../components/Layout'

export default function String() {
    return (
        <Layout>
           <div className="links">

                <h3>Core Java</h3>
                <Link to="/courses/core_java/syntaxes">syntaxes</Link><br/>
            </div> 
        </Layout>
    )
}
