import type { IWPPage, IWPPost } from '../types/wordpress'
import type { IPages, IPost } from '../types/larapress'

export function useWP() {
  const page = async (slug: string): Promise<IPages> => {
    const response = await fetch(`/wp-json/wp/v2/pages?slug=${slug}`)
    const data = await response.json()

    const apiDataTransformed = {
      id: apiData.id,
      slug: apiData.slug,
      title: apiData.title.rendered,
      content: apiData.content.rendered,
      excerpt: apiData.excerpt.rendered,
      author_id: apiData.author,
      date: apiData.date,
      date_gmt: apiData.date_gmt,
      guid: apiData.guid.rendered,
      modified: apiData.modified,
      modified_gmt: apiData.modified_gmt,
      status: apiData.status,
      type: apiData.type,
      link: apiData.link,
      is_protected: apiData.content.protected,
      featured_media: apiData.featured_media,
      parent: apiData.parent,
      menu_order: apiData.menu_order,
      comment_status: apiData.comment_status,
      ping_status: apiData.ping_status,
      template: apiData.template,
      meta: apiData.meta,
      acf: apiData.acf,
      _links: apiData._links,

    return apiDataTransformed
    const typedData: IWPPage = data[0]
    } as IPages
  }

  return {
    page,
  }
}
