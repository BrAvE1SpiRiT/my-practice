'use client'
import InputBox from '@/components/ui/inputBox';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    university: '',
    email: '',
    password: '',
    confirmPassword: '',
    companyName: '',
    companyEmail: '',
    companyPassword: '',
    companyConfirmPassword: '',
  });
  
  const [error, setError] = useState('');
  const [selectedRole, setSelectedRole] = useState('student'); // Состояние для хранения выбранной роли
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  // Функция для обработки переключения вкладок (выбор роли)
  const handleTabChange = (role: string) => {
    setSelectedRole(role);
  };

  // Функция для регистрации студента
  const handleRegisterStudent = (e: React.FormEvent) => {
    e.preventDefault();
    const { firstName, lastName, university, email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      setError('Пароли не совпадают');
      return;
    }

    // Сохраняем данные студента и роль
    const studentData = {
      firstName,
      lastName,
      university,
      email,
      password,
      role: selectedRole, // Сохраняем роль "student"
    };
    localStorage.setItem('userData', JSON.stringify(studentData));

    // Перенаправляем на страницу входа
    router.push('/auth/login');
  };

  // Функция для регистрации компании
  const handleRegisterCompany = (e: React.FormEvent) => {
    e.preventDefault();
    const { companyName, companyEmail, companyPassword, companyConfirmPassword } = formData;

    if (companyPassword !== companyConfirmPassword) {
      setError('Пароли не совпадают');
      return;
    }

    // Сохраняем данные компании и роль
    const companyData = {
      companyName,
      companyEmail,
      companyPassword,
      role: selectedRole, // Сохраняем роль "company"
    };
    localStorage.setItem('userData', JSON.stringify(companyData));

    // Перенаправляем на страницу входа
    router.push('/auth/login');
  };

  return (
    <div className='flex w-full justify-center items-center flex-col'>
      <h2 className='text-[#333] uppercase tracking-[0.1em] text-xl sm:text-3xl font-bold'>Регистрация</h2>
      <Tabs defaultValue="student" className="w-[400px]" onValueChange={handleTabChange}>
        <TabsList>
          <TabsTrigger value="student">Студент</TabsTrigger>
          <TabsTrigger value="company">Компания</TabsTrigger>
        </TabsList>

        {/* Форма для регистрации студента */}
        <TabsContent value="student">
          <form onSubmit={handleRegisterStudent} className='flex w-full justify-center items-center flex-col'>
            <InputBox text='Имя' type='text' name='firstName' value={formData.firstName} onChange={handleInputChange} required />
            <InputBox text='Фамилия' type='text' name='lastName' value={formData.lastName} onChange={handleInputChange} required />
            <InputBox text='Полное название учебного заведения' type='text' name='university' value={formData.university} onChange={handleInputChange} required />
            <InputBox text='E-mail' type='email' name='email' value={formData.email} onChange={handleInputChange} required />
            <InputBox text='Придумайте пароль' type='password' name='password' value={formData.password} onChange={handleInputChange} required />
            <InputBox text='Повторите пароль' type='password' name='confirmPassword' value={formData.confirmPassword} onChange={handleInputChange} required />

            {error && <p className='text-red-500'>{error}</p>}

            <button className='mt-10 bg-[#6e6cf5] hover:bg-[#8f65ec] duration-300 text-white font-bold py-2 px-4 rounded tracking-[0.1em] text-sm sm:text-xl'>
              Зарегистрироваться
            </button>
          </form>
        </TabsContent>

        {/* Форма для регистрации компании */}
        <TabsContent value="company">
          <form onSubmit={handleRegisterCompany} className='flex w-full justify-center items-center flex-col'>
            <InputBox text='Название компании' type='text' name='companyName' value={formData.companyName} onChange={handleInputChange} required />
            <InputBox text='E-mail компании' type='email' name='companyEmail' value={formData.companyEmail} onChange={handleInputChange} required />
            <InputBox text='Придумайте пароль' type='password' name='companyPassword' value={formData.companyPassword} onChange={handleInputChange} required />
            <InputBox text='Повторите пароль' type='password' name='companyConfirmPassword' value={formData.companyConfirmPassword} onChange={handleInputChange} required />

            {error && <p className='text-red-500'>{error}</p>}

            <button className='mt-10 bg-[#6e6cf5] hover:bg-[#8f65ec] duration-300 text-white font-bold py-2 px-4 rounded tracking-[0.1em] text-sm sm:text-xl'>
              Зарегистрироваться
            </button>
          </form>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default RegisterPage;
