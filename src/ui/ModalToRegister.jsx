import { useForm } from "react-hook-form"
import { createVideo } from "../helpers/createVideo"

export const ModalToRegister = ({ setOpenModal = false }) => {

    const { register, reset, handleSubmit } = useForm()

    
    const onSubmit = handleSubmit( data => {

        createVideo( data ).then( data => console.log( data ) )
        setOpenModal( false ) 
        // console.log( data );
    }) 

    const onResetForm = () => {
        reset()
    }

  return (
    <section className="w-full p-4 text-white flex justify-center">

        <div className="max-w-[550px]">
            <div className="text-end">
                <button className="text-end border-red-600 text-red-600" onClick={ () => setOpenModal( false ) }><i className='bx bx-x-circle bx-lg'></i></button>
            </div>

            <div className="*:uppercase text-center">
                <h1 className="font-bold texto text-3xl py-5">Nuevo Video</h1>
                <p className="pb-10 text-sm ">Complete el formulario para crear una nueva tarjeta de video</p>
            </div>

            <h2 className="border-2 border-[#191919] border-y-[#262626] text-center font-semibold text-3xl py-4" >Crear Tarjeta</h2>
            
            <form className="pt-10 *:p-5" onSubmit={ onSubmit }>
                <div className="flex flex-col gap-2">
                    <label htmlFor="" className="font-semibold">Título</label>
                    <input {...register('titulo', { required: { value: true, message: 'Título debe ser requerido'} })} className="p-3 outline-none bg-[#191919] border-2 border-[#262626] rounded-xl" type="text" placeholder="título del video" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="" className="font-semibold">Categoría</label>
                    <select {...register('categoria', { required: { value: true, message: 'Categoria debe ser requerido'} })} name="categoria" id="" className="bg-[#191919] border-2 border-[#262626] rounded-xl outline-none *:text-white p-3">
                        {/* <option value="0" selected disabled>Seleccione una categoría:</option> */}
                        <option value="frontend">frontend</option>
                        <option value="backend">backend</option>
                        <option value="innovacion-y-gestion">Innovación y gestión</option>
                    </select>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="" className="font-semibold">Imagen</label>
                    <input {...register('imagen', { required: { value: true, message: 'Imagen debe ser requerido'} })} className="p-3 outline-none bg-[#191919] border-2 border-[#262626] rounded-xl" type="text" placeholder="Link de la imagen" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="" className="font-semibold">Vídeo</label>
                    <input {...register('video', { required: { value: true, message: 'Video debe ser requerido'} })} className="p-3 outline-none bg-[#191919] border-2 border-[#262626] rounded-xl" type="text" placeholder="Link del video" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="" className="font-semibold">Descripción</label>
                    <textarea {...register('descripcion', { required: { value: true, message: 'Descripcion debe ser requerido'} })} className="p-3 h-[150px] outline-none resize-none bg-[#191919] border-2 border-[#262626] rounded-xl" placeholder="¿De qué se trata este vídeo?"></textarea>
                </div>
            
                <div className="flex justify-center gap-4 font-bold *:uppercase *:p-3 *:rounded-xl *:border-2">
                    <button className="bg-[#2271D1] border-none">Guardar</button>
                    <button className="border-green-500 text-green-500" onClick={ () => onResetForm() }>Limpiar</button>
                </div>
            
            </form>
        </div>

    
    </section>
  )
}
