import type { IWPPage, IWPPost } from '../types/wordpress'
import type { IPages, IPost } from '../types/larapress'

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
  const page = async (slug: string): Promise<IPages> => {
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
    } as IPages

    return page
  }
  }

  return {
    page,
  }
}
