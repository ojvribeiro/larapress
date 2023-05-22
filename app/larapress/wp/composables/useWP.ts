import type { IWPPage, IWPPost, IWPMenu } from '../types/wordpress'
import type { IMenu, IPage, IPost } from '../types/larapress'

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

    const typedData: IWPPage = data[0]
    const page = {
      id: typedData.id,
      slug: typedData.slug,
      title: typedData.title.rendered,
      content: typedData.content.rendered,
      excerpt: typedData.excerpt.rendered,
      author_id: typedData.author,
      date: typedData.date,
      date_gmt: typedData.date_gmt,
      guid: typedData.guid.rendered,
      modified: typedData.modified,
      modified_gmt: typedData.modified_gmt,
      status: typedData.status,
      type: typedData.type,
      link: typedData.link,
      is_protected: typedData.content.protected,
      featured_media: typedData.featured_media,
      parent: typedData.parent,
      menu_order: typedData.menu_order,
      comment_status: typedData.comment_status,
      ping_status: typedData.ping_status,
      template: typedData.template,
      meta: typedData.meta,
      acf: typedData.acf,
      _links: typedData._links,
    } as IPage

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
    const response = await fetch(`/wp-json/wp/v2/posts`)
    const data = await response.json()

    let posts = []

    data.map((post: IWPPost) => {
      posts.push({
        id: post.id,
        slug: post.slug,
        title: post.title.rendered,
        content: post.content.rendered,
        excerpt: post.excerpt.rendered,
        author_id: post.author,
        date: post.date,
        date_gmt: post.date_gmt,
        guid: post.guid.rendered,
        modified: post.modified,
        modified_gmt: post.modified_gmt,
        status: post.status,
        type: post.type,
        link: new URL(post.link).pathname, // link as path name
        is_protected: post.content.protected,
        featured_media: post.featured_media,
        parent: post.parent,
        menu_order: post.menu_order,
        comment_status: post.comment_status,
        ping_status: post.ping_status,
        template: post.template,
        meta: post.meta,
        acf: post.acf,
        _links: post._links,
      })
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

    const typedData: IWPPost = data[0]
    const post = {
      id: typedData.id,
      slug: typedData.slug,
      title: typedData.title.rendered,
      content: typedData.content.rendered,
      excerpt: typedData.excerpt.rendered,
      author_id: typedData.author,
      date: typedData.date,
      date_gmt: typedData.date_gmt,
      guid: typedData.guid.rendered,
      modified: typedData.modified,
      modified_gmt: typedData.modified_gmt,
      status: typedData.status,
      type: typedData.type,
      link: typedData.link,
      is_protected: typedData.content.protected,
      featured_media: typedData.featured_media,
      parent: typedData.parent,
      menu_order: typedData.menu_order,
      comment_status: typedData.comment_status,
      ping_status: typedData.ping_status,
      template: typedData.template,
      meta: typedData.meta,
      acf: typedData.acf,
      _links: typedData._links,
    } as IPost

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
    const response = await fetch(`/wp-json/larapress/menu`)
    const data = await response.json()

    const menuRef = ref<IMenu[]>([])

    const menuValue = data.map((item: IWPMenu) => {
      const obj: IMenu = {
        ID: item.ID,
        post_author: item.post_author,
        post_date: item.post_date,
        post_date_gmt: item.post_date_gmt,
        post_content: item.post_content,
        post_title: item.post_title,
        post_excerpt: item.post_excerpt,
        post_status: item.post_status,
        comment_status: item.comment_status,
        ping_status: item.ping_status,
        post_password: item.post_password,
        post_name: item.post_name,
        to_ping: item.to_ping,
        pinged: item.pinged,
        post_modified: item.post_modified,
        post_modified_gmt: item.post_modified_gmt,
        post_content_filtered: item.post_content_filtered,
        post_parent: item.post_parent,
        guid: item.guid,
        menu_order: item.menu_order,
        post_type: item.post_type,
        post_mime_type: item.post_mime_type,
        comment_count: item.comment_count,
        filter: item.filter,
        db_id: item.db_id,
        menu_item_parent: item.menu_item_parent,
        object_id: item.object_id,
        object: item.object,
        type: item.type,
        type_label: item.type_label,
        url: item.url,
        path: item.url !== '/' ? new URL(item.url).pathname : '/',
        title: item.title,
        target: item.target,
        attr_title: item.attr_title,
        description: item.description,
        classes: item.classes,
        xfn: item.xfn,
      }

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
