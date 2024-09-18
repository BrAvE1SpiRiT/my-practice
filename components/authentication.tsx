import InputBox from './inputBox'

const LoginBlock = ({text}:{text:string}) => {
	return (
		<form action="">
			<h2>Вход</h2>
			<InputBox text='Username' type='text'></InputBox>
			<InputBox text='Password' type='password'></InputBox>
		</form>
	)
}

export default LoginBlock