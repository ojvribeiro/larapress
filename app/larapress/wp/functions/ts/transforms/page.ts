import { IPage } from '../../../types/larapress'
import { IWPPage } from '../../../types/wordpress'

export default function transformPageData(data: IWPPage): IPage {
  return {
    id: data.id,
    slug: data.slug,
    title: data.title.rendered,
    content: data.content.rendered,
    excerpt: data.excerpt.rendered,
    author_id: data.author,
    date: data.date,
    date_gmt: data.date_gmt,
    guid: data.guid.rendered,
    modified: data.modified,
    modified_gmt: data.modified_gmt,
    status: data.status,
    type: data.type,
    link: data.link,
    is_protected: data.content.protected,
    featured_media: data.featured_media,
    parent: data.parent,
    menu_order: data.menu_order,
    comment_status: data.comment_status,
    ping_status: data.ping_status,
    template: data.template,
    meta: data.meta,
    acf: data.acf,
    _links: data._links,
  } as IPage
}
