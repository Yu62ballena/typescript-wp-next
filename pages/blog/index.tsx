import { NextPage } from "next";
import Hero from "components/hero";
import Container from "components/container";
import Meta from "components/meta";
import { getAllPosts } from "lib/api-wp";
import { GetAllPostsType } from "utils/types";
import Posts from "components/posts";
import { eyecatchLocal } from "lib/constants";
import { GetStaticProps } from "next";

const Blog: NextPage<{ posts: GetAllPostsType[] }> = ({ posts }) => {
  return (
    <Container>
      <Meta pageTitle="Blog" pageDesc="ブログの記事一覧" />
      <Hero title="Blog" subtitle="Recent Posts" />

      <Posts posts={posts} />
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts: GetAllPostsType[] = await getAllPosts();

  for (const post of posts) {
    if (!post.hasOwnProperty("eyecatch")) {
      post.eyecatch = eyecatchLocal;
    }
  }

  return {
    props: {
      posts: posts,
    },
  };
};

export default Blog;
