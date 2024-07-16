import { useForm } from "react-hook-form"
import { updateVideo } from "../helpers/updateVideo"

export const ModalToUpdate = ({ id, videos = [], setOpenModal = false }) => {

    const { register, handleSubmit } = useForm()

    const getVideoById = videos.find( video => video.id === id )

    const { titulo, categoria, imagen, video, descripcion } = getVideoById 

    
    const onSubmit = handleSubmit( data => {

        updateVideo( id, data ).then( data => console.log( data ) )
        setOpenModal( false ) 
    }) 


  return (
    <section className="min-h-screen p-6 bg-[#03122F] bg-opacity-75 flex justify-center">

        <div className="min-w-[550px] p-4 text-white bg-[#03122F] border-8 border-[#6BD1FF] rounded-2xl">
            
            <div className="text-end">
                <button className="text-end border-white text-white" onClick={ () => setOpenModal( false ) }><i className='bx bx-x-circle bx-lg'></i></button>
            </div>

            <div className="*:uppercase text-center">
                <h1 className="lg:py-0 font-bold texto text-3xl py-5 text-[#2271D1]">Editar Video</h1>
            </div>

            <form className="pt-10 *:p-5 lg:p-0 " onSubmit={ onSubmit }>
                <div className="flex flex-col gap-2">
                    <label htmlFor="" className="font-semibold">Título</label>
                    <input defaultValue={ titulo } {...register('titulo', { required: { value: true, message: 'Título debe ser requerido'} })} className="p-3 outline-none bg-[#191919] border-2 border-[#262626] rounded-xl" type="text" placeholder="título del video" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="" className="font-semibold">Categoría</label>
                    <select defaultValue={ categoria } {...register('categoria', { required: { value: true, message: 'Categoria debe ser requerido'} })} name="categoria" id="" className="bg-[#191919] border-2 border-[#262626] rounded-xl outline-none *:text-white p-3">
                        {/* <option value="0" selected disabled>Seleccione una categoría:</option> */}
                        <option value="frontend">frontend</option>
                        <option value="backend">backend</option>
                        <option value="innovacion-y-gestion">Innovación y gestión</option>
                    </select>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="" className="font-semibold">Imagen</label>
                    <input defaultValue={ imagen } {...register('imagen', { required: { value: true, message: 'Imagen debe ser requerido'} })} className="p-3 outline-none bg-[#191919] border-2 border-[#262626] rounded-xl" type="text" placeholder="Link de la imagen" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="" className="font-semibold">Vídeo</label>
                    <input defaultValue={ video } {...register('video', { required: { value: true, message: 'Video debe ser requerido'} })} className="p-3 outline-none bg-[#191919] border-2 border-[#262626] rounded-xl" type="text" placeholder="Link del video" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="" className="font-semibold">Descripción</label>
                    <textarea defaultValue={ descripcion } {...register('descripcion', { required: { value: true, message: 'Descripcion debe ser requerido'} })} className="lg:h-[100px] p-3 h-[150px] outline-none resize-none bg-[#191919] border-2 border-[#262626] rounded-xl" placeholder="¿De qué se trata este vídeo?"></textarea>
                </div>
            
                <div className="flex justify-center gap-4 font-bold *:uppercase *:p-3 *:rounded-xl *:border-2">
                    <button className="bg-[#2271D1] border-none">Guardar</button>
                </div>
        
            </form>
        </div>

    </section>
  )
}
