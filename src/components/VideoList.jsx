import { useState } from "react"
import { deleteVideo } from "../helpers/deleteVideo"
import { getVideosByCategory } from "../helpers/getVideosByCategory"

export const VideoList = ({ videos, categoria, setOpenModal, setVideoId }) => {

    const videosByCategory = getVideosByCategory( videos, categoria )

    const videoStyle = {
        'frontend': `${ categoria === 'frontend' && '*:border-blue-500' }`,
        'backend': `${ categoria === 'backend' && '*:border-green-500' }`,
        'innovacion-y-gestion': `${ categoria === 'innovacion-y-gestion' && '*:border-orange-500' }`,
    }


    const onDeleteVideo = ( id ) => {
        deleteVideo( id ).then( data => console.log( data ))
    }
    

  return (

    <div className="p-4">
        <ul className={`flex flex-col gap-4 *:border-2 *:rounded-sm ${ videoStyle.frontend } ${ videoStyle.backend } ${ videoStyle["innovacion-y-gestion"] }`}>
            {
                videosByCategory.map(({ id, imagen, video })=>(
                    <li key={ id }>
                        <img className="object-scale-down w-full size-48" src={ imagen } alt={ imagen } />
                        <div className="p-2 flex justify-evenly *:uppercase  bg-black *:text-white *:font-semibold">
                            <button className="flex items-center" onClick={ () => onDeleteVideo( id )}><i className='pr-2 bx bx-trash bx-md text-white'></i>Borrar</button>
                            <button className="flex items-center" onClick={ () => { setOpenModal( true ); setVideoId( id ) }}><i className='pr-2 bx bx-edit bx-md text-white'></i>Editar</button>
                        </div>
                    </li>
                ))
            }
        </ul>
    </div>

  )
}
