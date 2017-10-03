import React from 'react'
import { Link } from 'react-router-dom'

import Post from './Post'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class ListPage extends React.Component {
    render() {

        if (this.props.data.loading) {
            return (<div>Loading</div>)
        }

        return (
            <div className='w-100 flex justify-center'>
                <Link to='/create' className='fixed bg-white top-0 right-0 pa4 ttu dim black no-underline'>
                    + New Post
                </Link>
                <div className='w-100' style={{ maxWidth: '50vw' }}>
                    {this.props.data.allPosts && this.props.data.allPosts.map((post) =>
                        <Post key={post.id} post={post} refresh={() => this.props.data.refetch()} />
                    )}
                </div>
            </div>
        )
    }
}

const FeedQuery = gql`query allPosts {
    allPosts{
      id
      imageUrl
      description
    }
  }`


export default graphql(FeedQuery)(ListPage)
