
export const updateVideo = async( id, data ) => {

    const url = `https://aluraflix-api-murex.vercel.app/videos/${ id }`

    const res = await fetch( url, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify( data )
    })

    const datos = await res.json()

    return datos
}
