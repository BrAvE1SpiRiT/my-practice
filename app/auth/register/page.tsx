import InputBox from '@/components/inputBox';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label"



const RegisterPage = () => {
	return (
		<div className='flex w-full justify-center items-center flex-col'>
			<h2 className='text-[#333] uppercase tracking-[0.1em] text-xl sm:text-3xl font-bold'>Регистрация</h2>
			<Tabs defaultValue="student" className="w-[400px]">
				<TabsList>
					<TabsTrigger value="student">Студент</TabsTrigger>
					<TabsTrigger value="company">Компания</TabsTrigger>
					<TabsTrigger value="university">ВУЗ</TabsTrigger>
				</TabsList>
				<TabsContent value="student">
					<form className='flex w-full justify-center items-center flex-col' action="">
						<InputBox text='Имя' type='text'></InputBox>
						<InputBox text='Фамилия' type='text'></InputBox>
						<InputBox text='Полное название учебного заведения' type='text'></InputBox>
						<InputBox text='E-mail' type='text'></InputBox>
						<InputBox text='Придумайте пароль' type='password'></InputBox>
						<InputBox text='Повторите пароль' type='password'></InputBox>
						
						<button className='mt-10 bg-[#088be2] hover:bg-[#0599fc] text-white font-bold py-2 px-4 rounded tracking-[0.1em] text-sm sm:text-xl'>Зарегистрироваться</button>
					</form>
				</TabsContent>
				<TabsContent value="company">Форма для компании</TabsContent>
				<TabsContent value="university">Форма для ВУЗа</TabsContent>
			</Tabs>
		</div>
		
	)
}

export default RegisterPage