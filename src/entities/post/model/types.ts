/** Типы данных шаблона поста (GraphQL page query). */

export type BlogPostAdjacent = {
  fields: {
    slug: string;
  };
  frontmatter: {
    title: string;
  };
};

export type BlogPostPageData = {
  markdownRemark: {
    id: string;
    excerpt: string;
    html: string;
    frontmatter: {
      title: string;
      date: string;
      description?: string | null;
    };
  };
  previous?: BlogPostAdjacent | null;
  next?: BlogPostAdjacent | null;
};
