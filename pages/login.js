import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import cookie from 'js-cookie';
import Container from "../components/container";
import ErrorMessage from '../components/errorMessage';

const LogIn = () => {
  const [showError, setShowError] = useState(false);
  const { register, handleSubmit, formState: {errors} } = useForm();
  const router = useRouter();
  
  const onSubmit = async data => {
    const res = await fetch(
      'https://ecomerce-master.herokuapp.com/api/v1/login',
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
      const result = await res.json();
      cookie.set('token', result.token, {
        expires: 1800
      });
      router.push('/');
    } else {
      setShowError(true);
    }
  }

  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-6 p-4">
        <form onSubmit={handleSubmit(onSubmit)} className="flex-auto flex flex-col md:col-start-2 md:col-span-4 lg:col-start-3 lg:col-span-3">
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
            <button type="submit"
                    className="bg-white rounded-sm text-gray border-gray border hover:bg-green-600 hover:border-green-600 hover:text-white py-2 my-2 w-full">
                      Iniciar Sesión
            </button>
          </div>
          {
            showError ?
            <div className="w-full px-3 mb-3">
              <ErrorMessage>Su correo electrónico y/o contraseña son incorrectos</ErrorMessage>
            </div> :
            <></>
          }
        </form>
      </div>
    </Container>
  );
}
export default LogIn;