interface SanityDocument {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
}

interface Slug {
  _type: string;
  current: string;
}

export interface Project extends SanityDocument {
  title: string;
  projectType: string;
  tags: string[];
  slug: Slug;
  projectScreenshot: string;
  projectScreenshotAlt: string;
  description: string;
  link: string;
  github: string;
  explanation: string;
  year: string;
}
