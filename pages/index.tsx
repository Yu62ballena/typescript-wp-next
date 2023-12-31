import type { NextPage } from "next";
import Hero from "components/hero";
import Container from "components/container";
import Meta from "components/meta";
import { getAllPosts } from "lib/api-wp";
import { GetAllPostsType } from "utils/types";
import Posts from "components/posts";
import { eyecatchLocal } from "lib/constants";
import { GetStaticProps } from "next";

const Home: NextPage<{ posts: GetAllPostsType[] }> = ({ posts }) => {
  return (
    <Container>
      <Meta />
      <Hero title="CUBE" subtitle="アウトプットしていくサイト" imageOn />
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

export default Home;
