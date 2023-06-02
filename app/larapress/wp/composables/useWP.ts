import type {
  IWPPage,
  IWPPost,
  IWPMenu,
  IWPCategory,
} from '~/app/larapress/wp/types/wordpress'

import type {
  IMenu,
  IPage,
  IPost,
  ICategory,
} from '~/app/larapress/wp/types/larapress'

import transformPostData from '~/app/larapress/wp/functions/ts/transforms/post'
import transformPostsData from '~/app/larapress/wp/functions/ts/transforms/posts'
import transformPageData from '~/app/larapress/wp/functions/ts/transforms/page'
import transformMenuData from '~/app/larapress/wp/functions/ts/transforms/menu'
import transformCategoryData from '~/app/larapress/wp/functions/ts/transforms/categories'

import { usePageLoadingStore } from '~/app/vue/shared/stores/usePageLoadingStore'

/**
 * A composable function that provides access to the WP REST API
 * @returns an object containing functions to fetch data from the WP REST API
 * @example
 * ```vue
 * <script setup lang="ts">
 * const page = await useWP().page('about')
 * </script>
 *
 * <template>
 *   <div>
 *     <h1>{{ page.title }}</h1>
 *     <div v-html="page.content"></div>
 *   </div>
 * </template>
 * ```
 */
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
    const pageLoadingStore = usePageLoadingStore()
    pageLoadingStore.loading = true

    const response = await fetch(`/wp-json/wp/v2/pages?slug=${slug}`)
    const data = await response.json()

    // Transform the data into a typed object
    const typedData: IWPPage = data[0]
    const page: IPage = transformPageData(typedData)

    pageLoadingStore.loading = false

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
    const pageLoadingStore = usePageLoadingStore()
    pageLoadingStore.loading = true

    const response = await fetch(`/wp-json/wp/v2/posts?slug=${slug}`)
    const data = await response.json()

    // Transform the data into a typed object
    const typedData: IWPPost = data[0]
    const post = transformPostData(typedData)

    pageLoadingStore.loading = false

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

  /**
   * Fetches all categories from the WP REST API
   * @returns categories - the categories object
   * @example
   * ```ts
   * const categories = useWP().categories()
   * ```
   */
  const categories = async () => {
    const response = await fetch('/wp-json/wp/v2/categories')
    const data = await response.json()

    let categories = []

    data.map((category: IWPCategory) => {
      categories.push(transformCategoryData(category))
    })

    return categories as ICategory[]
  }

  return {
    page,
    posts,
    post,
    menu,
    categories,
  }
}
