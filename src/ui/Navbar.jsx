
export const Navbar = ({ statusModal, setOpenModal }) => {



  return (

    <nav className={`${ statusModal ? 'hidden': 'flex' } font-archivo p-3 bg-[#262626] h-[100px] justify-between items-center gap-2`}>
        <figure className="w-[130px]">
            <img className="" src="https://firebasestorage.googleapis.com/v0/b/react-firebase-alurageek.appspot.com/o/logo-aluraflix.png?alt=media&token=02e1f05e-5174-47d7-837d-2d3644fd7d01" alt="Logo de Aluraflix" />
        </figure>
        <div className="flex gap-2 *:uppercase *:p-2 *:rounded-2xl *:font-bold *:border-2">
            <button className="border-[#2271D1] text-[#2271D1]">Home</button>
            <button className="border-white text-white" onClick={ () => setOpenModal(true) }>Nuevo Video</button>
        </div>
    </nav>

  )
}
