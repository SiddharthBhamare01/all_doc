import { useState } from "react";
import { useNavigate } from "react-router-dom";

// useContext
// useEffect
// useNavigate
// useHistory 

// function == method == hook  

const Login = (props) => {

    const [loginData, setLoginData] = useState({ username: '', password: '' });
    const [afterLoginMessage, setAfterLoginMessage] = useState('');
    const navigate = useNavigate();

    const handleLoginInput = (evt) => {
        console.log(evt.target.name);
        console.log(evt.target.value);
        setLoginData({
            ...loginData, // V a
            [evt.target.name]: evt.target.value
        });
    };

    const handleLoginSubmit = (evt) => {
        if (loginData.username === 'sonu' && loginData.password === 'sonu') {
            setAfterLoginMessage(`Hi ${loginData.username}! You've logged in successfully!`);
            setLoginData({ username: '', password: '' });
            alert(`Hi ${loginData.username}! You've logged in successfully!`);
            navigate('/home');
        }
        else {
            setAfterLoginMessage(`Invalid credentials!`);
            alert(`Invalid credentials!`);
            setLoginData({ username: '', password: '' });
        }
        evt.preventDefault();
    };

    return (
        <>
            <h1>Login Component</h1>
            <p>Login here</p>
            <form onSubmit={handleLoginSubmit}>
                <input type="text" name="username" value={loginData.username} onChange={handleLoginInput} />
                <input type="password" name="password" value={loginData.password} onChange={handleLoginInput} />
                <input type="submit" value="Login" />
            </form>
            <>
                <p>{afterLoginMessage && afterLoginMessage} </p>
            </>
        </>
    );
};
export default Login;