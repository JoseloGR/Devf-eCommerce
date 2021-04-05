import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Container from "../components/container";
import ErrorMessage from '../components/errorMessage';
import SuccessMessage from '../components/successMessage';

const SignUpForm = () => {
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const { register, handleSubmit, formState: {errors} } = useForm();
  
  const onSubmit = async data => {
    Object.keys(data).forEach((k) => (data[k] === '' || data[k] == null) && delete data[k]);
    const res = await fetch(
      'https://ecomerce-master.herokuapp.com/api/v1/signup',
      {
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      }
    );
    if (res.status == 200) {
      setShowError(false);
      setShowSuccess(true);
      const result = await res.json();
    } else {
      setShowError(true);
    }
  }

  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-6 p-4">
        <form onSubmit={handleSubmit(onSubmit)} className="flex-auto flex flex-col md:col-start-2 md:col-span-4 lg:col-start-3 lg:col-span-3">
          <div className="w-full px-3 mb-3">
            <label htmlFor="first_name" 
                    className="tracking-wide text-black text-xs font-bold mb-2">Nombre *</label>
            <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" 
                    id="first_name" 
                    name="first_name"
                    {...register("first_name", {required:true})}
                    type="text" 
                    placeholder="Juan"/>
            {
              errors.first_name && 
              <ErrorMessage>
                {errors.first_name.type === 'required' && 'El nombre es requerido'}
              </ErrorMessage> 
            }
          </div>
          <div className="w-full px-3 mb-3">
            <label htmlFor="last_name" 
                    className="tracking-wide text-black text-xs font-bold mb-2">Primer Apellido *</label>
            <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" 
                    id="last_name"
                    name="last_name"
                    {...register("last_name", {required:true})}
                    type="text" 
                    placeholder="López"/>
            {
              errors.last_name && 
              <ErrorMessage>
                {errors.last_name.type === 'required' && 'El apellido es requerido'}
              </ErrorMessage> 
            }
          </div>
          <div className="w-full px-3 mb-3">
            <label htmlFor="email" 
                    className="tracking-wide text-black text-xs font-bold mb-2">Correo electrónico *</label>
            <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" 
                    id="email" 
                    name="email"
                    {...register("email", {required:true, pattern: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i})}
                    type="text" 
                    placeholder="juanlopez@correo.com"/>
            {
              errors.email && 
              <ErrorMessage>
                {errors.email.type === 'required' && 'El correo electrónico es requerido'}
                {errors.email.type === 'pattern' && 'Ingrese un correo electrónico válido'}
              </ErrorMessage> 
            }
          </div>
          <div className="w-full px-3 mb-3">
            <label htmlFor="password" 
                    className="tracking-wide text-black text-xs font-bold mb-2">Contraseña *</label>
            <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" 
                    id="password" 
                    name="password"
                    {...register("password", {required:true, minLength: 8, pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\!\@\#\$\%\^\&\*\.,:])([a-zA-Z0-9])+/})}
                    type="password" 
                    placeholder="ContraseñaSuperSegura"/>
            {
              errors.password && 
              <ErrorMessage>
                {errors.password.type === 'required' && 'La contraseña es requerida'}
                {errors.password.type === 'minLength' && 'Debe contener por lo menos 8 caracteres'}
                {errors.password.type === 'pattern' && 'Debe contener por lo menos una mayúscula, una minúscula, un número y un caracter especial como: !@#$%^&*.,:'}
              </ErrorMessage> 
            }
          </div>
          <div className="w-full px-3 mb-3">
            <label htmlFor="profile_img" 
                    className="tracking-wide text-black text-xs font-bold mb-2">Foto de perfil</label>
            <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" 
                    id="profile_img" 
                    name="profile_img"
                    {...register("profile_img")}
                    type="text" 
                    placeholder="Foto de perfil"/>
          </div>
          <div className="w-full px-3 mb-3">
            <label htmlFor="birth_date" 
                    className="tracking-wide text-black text-xs font-bold mb-2">Fecha de nacimiento</label>
            <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" 
                    id="birth_date" 
                    name="birth_date"
                    {...register("birth_date")}
                    type="date" 
                    placeholder="mm/dd/yyyy"/>
          </div>
          <div className="w-full px-3 mb-3">
            <label htmlFor="gender" 
                    className="tracking-wide text-black text-xs font-bold mb-2">Sexo</label>
            <div class="relative">
              <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none" 
                      id="gender"
                      name="gender"
                      defaultValue=""
                      {...register("gender")}>
                <option value="" disabled>Selecciona</option>
                <option value="M">Hombre</option>
                <option value="F">Mujer</option>
                <option value="X">Otro</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>
          <div className="w-full px-3 mb-3">
            <button type="submit"
                    className="bg-white rounded-sm text-gray border-gray border hover:bg-green-600 hover:border-green-600 hover:text-white py-2 my-2 w-full">
                      Registrarme
            </button>
          </div>
          {
            showError ?
            <div className="w-full px-3 mb-3">
              <ErrorMessage>Verifique que sus datos sean correctos</ErrorMessage>
            </div> :
            <></>
          }
          {
            showSuccess ?
            <div className="w-full px-3 mb-3">
              <SuccessMessage>
                Su cuenta ha sido creada exitosamente. &nbsp;
                <Link href="/login">
                  <a className="text-green-900 underline">
                    Haga click aquí para iniciar sesión
                  </a>
                </Link>
                </SuccessMessage>
            </div> :
            <></>
          }
        </form>
      </div>
    </Container>
  );
}
export default SignUpForm;