import { getAllCategories, getAllPostsByCategory } from "lib/api-wp";
// import { GetStaticProps, GetStaticPaths, GetStaticPropsContext } from "next"
// import { GetAllCategoriesType } from "utils/types"
import Container from "components/container";
import PostHeader from "components/postHeader";
import Posts from "components/posts";
import { eyecatchLocal } from "lib/constants";
import Meta from "components/meta";

// const Category: React.FC<GetAllCategoriesType> = ({name}) => {
const Category = ({ name, posts }) => {
  return (
    <Container>
      <Meta pageTItle={name} pageDesc={`${name}に関する記事`} />
      <PostHeader title={name} subtitle="Blog Category" />
      <Posts posts={posts} />
    </Container>
  );
};

// export const getStaticPaths: GetStaticPaths = async() => {
export const getStaticPaths = async () => {
  const allCats = await getAllCategories();

  return {
    paths: allCats.map(({ slug }) => `/blog/category/${slug}`),
    fallback: false,
  };
};

// export const getStaticProps: GetStaticProps<{ name: string }> = async(context: GetStaticPropsContext) => {
export const getStaticProps = async (context) => {
  const catSlug = context.params && context.params.slug;

  const allCats = await getAllCategories();

  const cat = allCats.find(({ slug }) => slug === catSlug);

  const catName = cat && cat.name;

  const posts = await getAllPostsByCategory(cat.id);

  for (const post of posts) {
    if (!post.hasOwnProperty("eyecatch")) {
      post.eyecatch = eyecatchLocal;
    }
  }

  return {
    props: {
      name: catName,
      posts: posts,
    },
  };
};

export default Category;
