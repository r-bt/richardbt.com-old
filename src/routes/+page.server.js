import { readdir } from 'fs/promises';
import { dirname } from 'path';

export async function load() {
    const allProjectFiles = import.meta.glob('/src/routes/projects/*/*.svx')
    const iterableProjects = Object.entries(allProjectFiles);

    const allProjects = await Promise.all(
        iterableProjects.map(async ([path, resolver]) => {
            const { metadata } = await resolver();
            const postPath = path.slice(11, -3);

            const imgPath = postPath.split('/')[2];

            let projectImage;
            if (metadata.image) {
                projectImage = await import(`../lib/${imgPath}-assets/${metadata.image}?width=600&format=jpeg`);
            }

            return {
                metadata,
                path: dirname(postPath),
                imgUrl: metadata.image ? projectImage.default : '',
            }
        })
    )

    return {
        projects: allProjects,
    }
}