import { VideoList } from './VideoList'

export const VideoContainer = ({ videos = [], setOpenModalUpdate, setVideoId }) => {
  return (
    <>
            <section className='hidden md:block '>
                <img className='lg:block lg:w-full' src="/assets/banner-main.png" alt="Banner Main" />
            </section>

            <div className='flex flex-wrap justify-center gap-5 *:w-[380px] *:uppercase *:font-bold p-4'> 
            
            <section className=''>
                <h3 className='text-white rounded-2xl p-5 bg-blue-500 '>Frontend</h3>
                <VideoList videos={ videos } categoria="frontend" setOpenModal={ setOpenModalUpdate } setVideoId={ setVideoId }/>
            </section>

            <section>
                <h3 className='text-white rounded-2xl  p-5 bg-green-500'>Backend</h3>
                <VideoList videos={ videos } categoria="backend" setOpenModal={ setOpenModalUpdate } setVideoId={ setVideoId }/>
            </section>

            <section>
                <h3 className='text-white rounded-2xl p-5 bg-orange-500'>Innovación y gestión</h3>
                <VideoList videos={ videos } categoria="innovacion-y-gestion" setOpenModal={ setOpenModalUpdate } setVideoId={ setVideoId }/>
            </section>

        </div>
    </>

  )
}
