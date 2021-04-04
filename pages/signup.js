import Container from "../components/container";

const SignUpForm = () => {
  const registerUser = async event => {
    event.preventDefault();
    console.log(event.target.name);
  }

  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-6 p-4">
        <form onSubmit={registerUser} className="flex-auto flex flex-col md:col-start-2 md:col-span-4 lg:col-start-3 lg:col-span-3">
          <div className="w-full px-3 mb-3">
            <label htmlFor="first_name" 
                    className="tracking-wide text-black text-xs font-bold mb-2">Nombre</label>
            <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" 
                    id="first_name" 
                    type="text" 
                    placeholder="Juan" 
                    required/>
          </div>
          <div className="w-full px-3 mb-3">
            <label htmlFor="last_name" 
                    className="tracking-wide text-black text-xs font-bold mb-2">Apellidos</label>
            <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" 
                    id="last_name" 
                    type="text" 
                    placeholder="López" 
                    required/>
          </div>
          <div className="w-full px-3 mb-3">
            <label htmlFor="email" 
                    className="tracking-wide text-black text-xs font-bold mb-2">Correo electrónico</label>
            <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" 
                    id="email" 
                    type="email" 
                    placeholder="juanlopez@correo.com" 
                    required/>
          </div>
          <div className="w-full px-3 mb-3">
            <label htmlFor="password" 
                    className="tracking-wide text-black text-xs font-bold mb-2">Contraseña</label>
            <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" 
                    id="password" 
                    type="password" 
                    placeholder="ContraseñaSuperSegura" 
                    required/>
          </div>
          <div className="w-full px-3 mb-3">
            <label htmlFor="profile_img" 
                    className="tracking-wide text-black text-xs font-bold mb-2">Foto de perfil</label>
            <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" 
                    id="profile_img" 
                    type="text" 
                    placeholder="Foto de perfil"/>
          </div>
          <div className="w-full px-3 mb-3">
            <label htmlFor="birth_date" 
                    className="tracking-wide text-black text-xs font-bold mb-2">Fecha de nacimiento</label>
            <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" 
                    id="birth_date" 
                    type="text" 
                    placeholder="dd/mm/yyyy"/>
          </div>
          <div className="w-full px-3 mb-3">
            <label htmlFor="gender" 
                    className="tracking-wide text-black text-xs font-bold mb-2">Género</label>
            <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" 
                    id="gender" 
                    type="text" 
                    placeholder="Seleccione"/>
          </div>
          <button type="submit"
                  className="bg-white rounded-sm text-gray hover:bg-green-600 hover:border-green-600 hover:text-white py-2 my-2 w-full">
                    Registrarme
          </button>
        </form>
      </div>
    </Container>
  );
}
export default SignUpForm;