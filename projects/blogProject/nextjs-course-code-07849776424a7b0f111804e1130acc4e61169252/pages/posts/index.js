import React from 'react';
import AllPosts from '../../components/posts/all-posts';
import { getFeaturedPosts } from '../../lib/posts-util';
import Head from 'next/head';

const AllPostsPage = (props) => {
  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="All post" />
      </Head>
      <AllPosts posts={props.posts} />;
    </>
  );
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
