import type { IWPPage, IWPPost, IWPMenu } from '../types/wordpress'
import type { IMenu, IPage, IPost } from '../types/larapress'

import transformPostData from '../functions/ts/transforms/post'
import transformPostsData from '../functions/ts/transforms/posts'
import transformPageData from '../functions/ts/transforms/page'
import transformMenuData from '../functions/ts/transforms/menu'

export function useWP() {
  /**
   * Fetches a single page from the WP REST API
   * @param slug - the slug of the page to fetch
   * @returns page - the page object
   * @example
   * ```ts
   * const page = useWP().page('about')
   * ```
   */
  const page = async (slug: string): Promise<IPage> => {
    const response = await fetch(`/wp-json/wp/v2/pages?slug=${slug}`)
    const data = await response.json()

    // Transform the data into a typed object
    const typedData: IWPPage = data[0]
    const page: IPage = transformPageData(typedData)

    return page
  }

  /**
   * Fetches all posts from the WP REST API
   * @returns posts - an array of posts
   * @example
   * ```ts
   * const posts = useWP().posts()
   * ```
   * @todo add pagination
   */
  const posts = async () => {
    const response = await fetch('/wp-json/wp/v2/posts')
    const data = await response.json()

    let posts = []

    data.map((post: IWPPost) => {
      posts.push(transformPostsData(post))
    })

    return posts as IPost[]
  }

  /**
   * Fetches a single post from the WP REST API
   * @param slug - the slug of the post to fetch
   * @returns post - the post object
   * @example
   * ```ts
   * const post = useWP().post('hello-world')
   * ```
   */
  const post = async (slug: string) => {
    const response = await fetch(`/wp-json/wp/v2/posts?slug=${slug}`)
    const data = await response.json()

    // Transform the data into a typed object
    const typedData: IWPPost = data[0]
    const post = transformPostData(typedData)

    return post
  }

  /**
   * Fetches the menu items from the WP REST API
   * @returns menu - the menu object
   * @example
   * ```ts
   * const menu = useWP().menu()
   * ```
   */
  const menu = async (): Promise<IMenu[]> => {
    const response = await fetch('/wp-json/larapress/menu')
    const data = await response.json()

    // Transform the data into a typed object
    const menuRef = ref<IMenu[]>([])
    const menuValue = data.map((item: IWPMenu): IMenu => {
      const obj: IMenu = transformMenuData(item)

      return obj
    })

    menuRef.value = menuValue

    return menuRef.value
  }

  return {
    page,
    posts,
    post,
    menu,
  }
}
