import { GetAllSlugsType } from "utils/types"

type PostType = {
  title: string | undefined,
  slug: string | undefined,
}

export const prevNextPost = (allSlugs: GetAllSlugsType[], currentSlug: string):[PostType, PostType] => {
  const numberOfPosts = allSlugs.length

  const index = allSlugs.findIndex(
    ({ slug }) => slug === currentSlug,
  )

  const prevPost = 
    index + 1 === numberOfPosts
    ? { title: '', slug: ''}
    : allSlugs[index + 1]

  const nextPost = 
    index === 0
    ? {title: '', slug: ''}
    : allSlugs[index - 1]

  return [prevPost, nextPost]
}

