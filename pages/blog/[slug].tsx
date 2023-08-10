import { getPostBySlug, getAllSlugs } from "lib/api-wp";
import { PostDataTypes, GetAllSlugsType } from "utils/types";
import { GetStaticProps, GetStaticPaths } from "next";
import PostHeader from "components/postHeader";
import Container from "components/container";
import Image from "next/image";
import styles from "styles/schedule.module.scss";
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar,
} from "components/two-column";
import PostBody from "components/postBody";
import ConvertBody from "components/convertBody";
import PostCategories from "components/postCategories";
import extractText from "lib/extract-text";
import Meta from "components/meta";
import { eyecatchLocal } from "lib/constants";
import { prevNextPost } from "lib/prevNextPost";
import Pagination from "components/pagination";

const Post = ({
  title,
  publishDate,
  content,
  eyecatch,
  categories,
  description,
  prevPost,
  nextPost,
}: PostDataTypes) => {
  return (
    <Container>
      <Meta
        pageTitle={title}
        pageDesc={description}
        pageImg={eyecatch.url}
        pageImgW={eyecatch.width}
        pageImgH={eyecatch.height}
      />
      <article>
        <PostHeader
          title={title}
          subtitle="Blog Articles"
          publishDate={publishDate}
        />
        <figure className={styles.figure}>
          <Image
            className={styles.image}
            src={eyecatch.url}
            alt=""
            width={eyecatch.width}
            height={eyecatch.height}
            sizes="(min-width:1152px) 1152px, 100vw"
            priority
          />
        </figure>

        <TwoColumn>
          <TwoColumnMain>
            <PostBody>
              <ConvertBody contentHTML={content} />
            </PostBody>
          </TwoColumnMain>
          <TwoColumnSidebar>
            <PostCategories categories={categories} />
          </TwoColumnSidebar>
        </TwoColumn>

        <Pagination
          prevText={prevPost.title}
          prevUrl={`/blog/${prevPost.slug}`}
          nextText={nextPost.title}
          nextUrl={`/blog/${nextPost.slug}`}
        />
      </article>
    </Container>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  let allSlugs : GetAllSlugsType[] = []
  allSlugs = await getAllSlugs();

  return {
    paths: allSlugs.map(({ slug }) => `/blog/${slug}`),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Partial<PostDataTypes>> = async (
  context
) => {
  const slug = context.params?.slug;

  const post = await getPostBySlug(slug as string);

  const description = extractText(post?.content);

  const eyecatch = post?.eyecatch ?? eyecatchLocal;

  const allSlugs = await getAllSlugs();
  const [prevPost, nextPost] = prevNextPost(allSlugs, slug as string);

  // const { base64 } = await getPlaiceholder(eyecatch.url)
  //   eyecatch.bluDataURL = base64

  // return {
  //   props: {
  //     title: post?.title,
  //     publishDate: post?.publishDate,
  //     content: post?.content,
  //     eyecatch: eyecatch,
  //     categories: post?.categories,
  //     description: description,
  //     prevPost: prevPost,
  //     nextPost: nextPost,
  //   },
  // };


  const props: Partial<PostDataTypes> = {
    title: post?.title,
    publishDate: post?.publishDate,
    content: post?.content,
    eyecatch: eyecatch,
    categories: post?.categories,
    description: description,
    prevPost: prevPost,
    nextPost: nextPost,
  };

  return { props };
};

export default Post;
