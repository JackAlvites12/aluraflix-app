
export const getVideosByCategory = ( videos = [], categoria ) => {

    const validCategories = ['frontend', 'backend', 'innovacion-y-gestion']

    if(!validCategories.includes( categoria )){
        throw new Error(`Categoria ${ categoria } no válida`)
    }

    return videos.filter( video => video.categoria === categoria )
}
