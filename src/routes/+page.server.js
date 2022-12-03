import { dirname } from 'path';
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';

export async function load() {
    const allProjectFiles = import.meta.glob('/src/routes/projects/*/*.svx')
    // const allThumbnails = import.meta.glob('/src/lib/*/*thumbnail*.*', {
    //     // query: { format: 'jpeg', width: '600', url: true },
    //     as: "raw"
    // });
    const iterableProjects = Object.entries(allProjectFiles);

    // console.log({allThumbnails})

    // const processedThumbnails = {};
    // Object.keys(allThumbnails).forEach((thumbnail) => {
    //     const postPath = thumbnail.split('/')[3];

    //     processedThumbnails[postPath] = allThumbnails[thumbnail];
    // })

    const allProjects = await Promise.all(
        iterableProjects.map(async ([path, resolver]) => {
            const { metadata } = await resolver();
            const postPath = path.slice(11, -3);

            // const imgPath = postPath.split('/')[2];

            // let projectImage;

            // if (`${imgPath}-assets` in processedThumbnails) {
            //     projectImage = await processedThumbnails[`${imgPath}-assets`]();
            //     console.log({projectImage})
            // }

            return {
                metadata,
                path: dirname(postPath),
                // imgUrl: metadata.image ? projectImage : '',
            }
        })
    )

    return {
        projects: allProjects,
    }
}