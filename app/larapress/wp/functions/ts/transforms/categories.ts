import { IWPCategory } from '../../../types/wordpress'
import { ICategory } from '../../../types/larapress'

export default function transformCategoryData(data: IWPCategory): ICategory {
  return {
    id: data.id,
    count: data.count,
    description: data.description,
    link: data.link,
    name: data.name,
    slug: data.slug,
    taxonomy: data.taxonomy,
    parent: data.parent,
    meta: data.meta,
    _links: {
      self: data._links.self,
      collection: data._links.collection,
      about: data._links.about,
      'wp:post_type': [
        {
          href: data._links['wp:post_type'][0].href,
        },
      ],
      curies: [
        {
          name: data._links.curies[0].name,
          href: data._links.curies[0].href,
          templated: data._links.curies[0].templated,
        },
      ],
    },
  } as ICategory
}
