import { ReactNode } from "react";

export type HeroProps = {
  title: string;
  subtitle: string;
  imageOn?: boolean;
};

export type ChildrenProps = {
  children: ReactNode;
  large?: boolean;
};

export type PostDataTypes = {
  title: string;
  publishDate: string;
  content: string;
  eyecatch: Eyecatch;
  categories: Array<{
    createdAt?: string | undefined;
    id?: string | undefined;
    publishedAt?: string | undefined;
    slug: string | undefined;
    updatedAt?: string | undefined;
    name: string | undefined;
  }> | undefined;
  contentHTML?: string;
  description?: string;
  context?: {
    params: {
      slug: string;
    };
  };
  prevPost: PrevNextPostType;
  nextPost: PrevNextPostType;
};

type PrevNextPostType = {
  title: string | undefined;
  slug: string | undefined;
};

export type GetAllSlugsType = {
  title: string | undefined;
  slug: string | undefined;
};

type Eyecatch = {
  url: string;
  width: number;
  height: number;
  blurDataURL?: string;
};

export type GetAllPostsType = {
  title: string,
  slug: string,
  eyecatch: Eyecatch,
}

export type GetAllCategoriesType = {
  name?: string,
  id?: string,
  slug?: string,
}

export type GetAllPostsByCategoriesType = {
  title: string,
  slug: string,
  eyecatch: Eyecatch,
}
