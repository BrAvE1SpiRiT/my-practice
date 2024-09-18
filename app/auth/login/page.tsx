import InputBox from '@/components/inputBox'
import Link from 'next/link'

const LoginPage = () => {
	return (
		<form className='flex w-full justify-center items-center flex-col' action="">
			<h2 className='text-[#333] uppercase tracking-[0.1em] text-xl sm:text-3xl font-bold'>Вход</h2>
			<InputBox text='Логин' type='text'></InputBox>
			<InputBox text='Пароль' type='password'></InputBox>
			<div className='flex justify-between w-full mt-4'>
				<Link className='text-[#00b8f8] text-[0.6em] sm:text-[1.1em]' href='/auth/forgot-password'>Забыли пароль?</Link>
				<Link className='text-[#8f65ec] text-[0.6em] sm:text-[1.1em]' href='/auth/register'>Зарегистрироваться</Link>
			</div>
			<button className='mt-6 sm:mt-10 bg-[#088be2] hover:bg-[#0599fc] text-white font-bold py-2 px-4 rounded tracking-[0.1em] text-sm sm:text-xl'>Войти</button>
		</form>

	)
}

export default LoginPage