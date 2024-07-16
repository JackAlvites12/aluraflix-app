
export const getVideos = async () => {

    const url = 'https://aluraflix-api-murex.vercel.app/videos'

    const res = await fetch( url ) 
    const data = await res.json()

    return data

}