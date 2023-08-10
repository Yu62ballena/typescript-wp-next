import { createClient } from "microcms-js-sdk";
import { GetAllSlugsType, GetAllPostsType, GetAllCategoriesType, GetAllPostsByCategoriesType } from "utils/types";

export const client = () => createClient({
  serviceDomain: process.env.SERVICE_DOMAIN as string,
  apiKey: process.env.API_KEY as string,
})


// slugから該当する記事のタイトルや本文などのすべての情報を取得する
export const getPostBySlug = async(slug: string) => {
  try {
    const post = await client().get({
      endpoint: 'blogs',
      queries: {filters: `slug[equals]${slug}`},
    })
    return post.contents[0]
  } catch (err) {
    console.log('-- getPostBySlug --')
    console.log(err)
  }
}


// すべての記事のslugとtitleを取得する
export const getAllSlugs = async(limit = 100): Promise<GetAllSlugsType[]> => {
  try {
    const slugs = await client().get({
      endpoint: 'blogs',
      queries: { fields: 'title,slug', orders: '-publishDate', limit: limit}
    })
    const slugData: GetAllSlugsType[] = slugs.contents
    return slugData
  } catch (err) {
    console.log('-- getAllSlug --')
    console.log(err)
    throw undefined
  }
}


// すべての記事のtitle, slug, eyecatchを取得
export const getAllPosts = async(limit = 100): Promise<GetAllPostsType[]> => {
  try {
    const posts = await client().get({
      endpoint: 'blogs',
      queries: {
        fields: 'title,slug,eyecatch',
        orders: '-publishDate',
        limit: limit,
      },
    })
    const postsData : GetAllPostsType[] = posts.contents
    return postsData
  } catch (err) {
    console.log('-- getAllPosts --')
    console.log(err)
    throw undefined
  }
}


// 全カテゴリのname, id, slugを一括取得

export const getAllCategories = async(limit = 100) : Promise<GetAllCategoriesType[]>=> {
  try {
    const categories = await client().get({
      endpoint: 'categories',
      queries: {
        fields: 'name,id,slug',
        limit: limit,
      },
    })
    const categoriesData: GetAllCategoriesType[] = categories.contents
    return categoriesData
    
  } catch (err) {
    console.log('-- getAllCategories --')
    console.log(err)
    throw undefined
  }
}



// 特定のカテゴリに属する者のtitle, slug, eyecatchを取得する

export const getAllPostsByCategory = async(catID: string, limit: number = 100) : Promise<GetAllPostsByCategoriesType[]> => {
  try {
    const posts = await client().get({
      endpoint: 'blogs',
      queries: {
        filters: `categories[contains]${catID}`,
        fields: 'title,slug,eyecatch',
        orders: '-publishDate',
        limit: limit,
      },
    })

    const postsData: GetAllPostsByCategoriesType[] = posts.contents
    return postsData
  } catch (err) {
    console.log('-- getAllPostsByCategory --')
    console.log(err)
    throw undefined
  }
}
