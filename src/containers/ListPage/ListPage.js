import React from 'react'
import { Link } from 'react-router-dom'

import Post from './Post'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class ListPage extends React.Component {
render () {
return (
      <div className='w-100 flex justify-center'>
        <div className='w-100' style={{ maxWidth: 400 }}>
          TODO: Display all posts...
        </div>
      </div>
    )
  }
}
export default ListPage