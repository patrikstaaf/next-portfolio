export const getSinglePath = `
*[_type == "project"] { 
    _id,
    slug {
        current
    }
   }
`;

export const getSingleProject = `
*[_type=="project" && slug.current == $slug][0] {
    "projectScreenshot": projectImage.asset->url,
    "projectScreenshotAlt": projectImage.alt,
        title,
    slug,
    projectType,
    tags,
    projectScreenshot,
    projectScreenshotAlt,
    description,
    link,
    github,
  }
`;

export const getAllProjects = `
*[_type=="project"] | order(order asc) {
_id,
title,
explanation,
year,
slug
}
`;
