
export const createVideo = async ( data ) => {

    const url = 'https://aluraflix-api-murex.vercel.app/videos'
    const res = await fetch(url,{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify( data )
    })

    const datos = await res.json()

    return datos 

}
