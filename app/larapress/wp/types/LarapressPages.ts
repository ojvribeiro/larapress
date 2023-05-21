export interface LarapressPages {
  id: number
  title: string
  date: string
  date_gmt: string
  guid: string
  modified: string
  author_id: number
  modified_gmt: string
  slug: string
  status: string
  type: string
  link: string
  content: string
  is_protected: boolean
  excerpt: string
  featured_media: number
  parent: number
  menu_order: number
  comment_status: string
  ping_status: string
  template: string
  meta: any[]
  acf: any
  _links: {
    self: {
      href: string
    }[]
    collection: {
      href: string
    }[]
    about: {
      href: string
    }[]
    replies: {
      embeddable: boolean
      href: string
    }[]
    'version-history': {
      count: number
      href: string
    }[]
    'predecessor-version': {
      id: number
      href: string
    }[]
    'wp:featuredmedia': {
      embeddable: boolean
      href: string
    }[]
    'wp:attachment': {
      href: string
    }[]
    'wp:term': {
      taxonomy: string
      embeddable: boolean
      href: string
    }[]
  }
}
