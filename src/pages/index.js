import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import { Auth } from '../database/database';

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <button onClick={() => Auth.signOut()}>Logout</button>

    <Link to="/login/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
