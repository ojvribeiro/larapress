export interface IWPPage {
  id: number
  date: string
  date_gmt: string
  guid: {
    rendered: string
  }
  modified: string
  modified_gmt: string
  slug: string
  status: string
  type: string
  link: string
  title: {
    rendered: string
  }
  content: {
    rendered: string
    protected: boolean
  }
  excerpt: {
    rendered: string
    protected: boolean
  }
  author: number
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

export interface IWPPost {
  id: number
  date: string
  date_gmt: string
  guid: {
    rendered: string
  }
  modified: string
  modified_gmt: string
  slug: string
  status: string
  type: string
  link: string
  title: {
    rendered: string
  }
  content: {
    rendered: string
    protected: boolean
  }
  excerpt: {
    rendered: string
    protected: boolean
  }
  author: number
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

export interface IWPMenu {
  ID: number
  post_author: string
  post_date: string
  post_date_gmt: string
  post_content: string
  post_title: string
  post_excerpt: string
  post_status: string
  comment_status: string
  ping_status: string
  post_password: string
  post_name: string
  to_ping: string
  pinged: string
  post_modified: string
  post_modified_gmt: string
  post_content_filtered: string
  post_parent: number
  guid: string
  menu_order: number
  post_type: string
  post_mime_type: string
  comment_count: string
  filter: string
  db_id: number
  menu_item_parent: string
  object_id: string
  object: string
  type: string
  type_label: string
  url: string
  title: string
  target: string
  attr_title: string
  description: string
  classes: string[]
  xfn: string
}

export interface IWPCategory {
  id: number
  count: number
  description: string
  link: string
  name: string
  slug: string
  taxonomy: string
  parent: number
  meta: any[]
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
    'wp:post_type': {
      href: string
    }[]
    curies: {
      name: string
      href: string
      templated: true
    }[]
  }
}
