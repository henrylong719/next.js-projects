import React from 'react';
import AllPosts from '../../components/posts/all-posts';
import { getFeaturedPosts } from '../../lib/posts-util';

const AllPostsPage = (props) => {
  return <AllPosts posts={props.posts} />;
};

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default AllPostsPage;
