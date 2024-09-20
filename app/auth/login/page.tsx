'use client'
import InputBox from '@/components/inputBox';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const { email, password } = loginData;

    // Получение данных пользователя из localStorage
    const storedUserData = localStorage.getItem('userData');
    
    if (storedUserData) {
      const parsedUserData = JSON.parse(storedUserData);

      // Проверка на совпадение email и пароля
      if (email === parsedUserData.email && password === parsedUserData.password) {
        
        // Перенаправление на страницу в зависимости от роли
        if (parsedUserData.role === 'student') {
          router.push('/student');
        } else if (parsedUserData.role === 'company') {
          router.push('/company');
        }
      } else {
        setError('Неверный email или пароль');
      }
    } else {
      setError('Пользователь не найден');
    }
  };

  return (
    <div className='flex w-full justify-center items-center flex-col'>
      <h2 className='text-[#333] uppercase tracking-[0.1em] text-xl sm:text-3xl font-bold'>Вход</h2>
      <form onSubmit={handleLogin} className='flex w-full justify-center items-center flex-col'>
        <InputBox text='E-mail' type='email' name='email' value={loginData.email} onChange={handleInputChange} required />
        <InputBox text='Пароль' type='password' name='password' value={loginData.password} onChange={handleInputChange} required />

				{/* Ссылки на восстановление пароля и регистрацию */}
				<div className='flex justify-between w-full mt-4'>
        <Link className='text-[#00b8f8] text-[0.6em] sm:text-[1.1em]' href='/auth/forgot-password'>Забыли пароль?</Link>
        <Link className='text-[#8f65ec] text-[0.6em] sm:text-[1.1em]' href='/auth/register'>Зарегистрироваться</Link>
      </div>

      {/* Ошибка авторизации */}
      {error && <p className='text-red-500 mt-4'>{error}</p>}

        {error && <p className='text-red-500'>{error}</p>}

        <button className='mt-10 bg-[#6e6cf5] hover:bg-[#8f65ec] duration-300 text-white font-bold py-2 px-4 rounded tracking-[0.1em] text-sm sm:text-xl'>
          Войти
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
