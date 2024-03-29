import { IMenu } from '../../../types/larapress'
import { IWPMenu } from '../../../types/wordpress'

export default function transformMenuData(data: IWPMenu): IMenu {
  return {
    ID: data.ID,
    post_author: data.post_author,
    post_date: data.post_date,
    post_date_gmt: data.post_date_gmt,
    post_content: data.post_content,
    post_title: data.post_title,
    post_excerpt: data.post_excerpt,
    post_status: data.post_status,
    comment_status: data.comment_status,
    ping_status: data.ping_status,
    post_password: data.post_password,
    post_name: data.post_name,
    to_ping: data.to_ping,
    pinged: data.pinged,
    post_modified: data.post_modified,
    post_modified_gmt: data.post_modified_gmt,
    post_content_filtered: data.post_content_filtered,
    post_parent: data.post_parent,
    guid: data.guid,
    menu_order: data.menu_order,
    post_type: data.post_type,
    post_mime_type: data.post_mime_type,
    comment_count: data.comment_count,
    filter: data.filter,
    db_id: data.db_id,
    menu_item_parent: data.menu_item_parent,
    object_id: data.object_id,
    object: data.object,
    type: data.type,
    type_label: data.type_label,
    url: data.url,
    path: data.url !== '/' ? new URL(data.url).pathname : '/',
    title: data.title,
    target: data.target,
    attr_title: data.attr_title,
    description: data.description,
    classes: data.classes,
    xfn: data.xfn,
  } as IMenu
}
