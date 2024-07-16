import React, { useEffect, useState } from 'react'
import { Navbar } from './ui/Navbar'
import { ModalToRegister } from './ui/ModalToRegister';
import { ModalToUpdate } from './ui/ModalToUpdate';
import { getVideos } from './helpers/getVideos';
import { VideoContainer } from './components/VideoContainer';

export const AluraFlixApp = () => {

  const [ videos, setVideos ] = useState([])
  const [ openModalRegister, setOpenModalRegister ] = useState( false )
  const [ openModalUpdate, setOpenModalUpdate ] = useState( false )

  const [ videoId, setVideoId ] = useState()


  useEffect(() => {
    const fetchVideos = () => {
      getVideos().then(videos => setVideos(videos));
    };

    fetchVideos(); // Fetch videos immediately

    const interval = setInterval(fetchVideos, 1000); // Fetch videos every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);


  return (

    <section className='min-h-screen min-w-[375px] bg-black bg-opacity-90'>

      <Navbar statusModal={ openModalUpdate } setOpenModal={ setOpenModalRegister } setOpenModalUpdate={ setOpenModalUpdate }/>

        
      { openModalRegister && <ModalToRegister setOpenModal={ setOpenModalRegister } /> }

      { openModalUpdate && <ModalToUpdate id={ videoId } videos={ videos } setOpenModal={ setOpenModalUpdate } /> }

      { !openModalRegister && !openModalUpdate && 
        <VideoContainer videos={ videos } setOpenModalUpdate={ setOpenModalUpdate } setVideoId={ setVideoId } />
      }


    </section>
  )
}
 