
export const deleteVideo = async( id ) => {

    const url = `https://aluraflix-api-murex.vercel.app/videos/${ id }`

    const res = await fetch( url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    return { message: 'Video eliminado correctamente'}

}
