// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import './styles/Login.css';

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [message, setMessage] = useState('');
//     const navigate = useNavigate(); // Initialize useNavigate

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         setMessage('');

//         try {
//             const response = await axios.post('http://localhost:5000/api/auth/login', {
//                 email,
//                 password,
//             });

//             console.log(response.data);
//             const { token } = response.data;
//             localStorage.setItem('token', token);
//             // Redirect to doctor selection page after successful login
//             navigate('/doctor-selection'); // Navigate to doctor selection page
//         } catch (error) {
//             console.error('Login failed:', error.message);
//             setMessage('Login failed. Please check your credentials and try again.');
//         }
//     };

//     const handleForgotPassword = () => {
//         console.log('Forgot Password clicked');
//     };

//     return (
//         <div className="login-container">
//             <h2>Login</h2>
//             <form onSubmit={handleLogin}>
//                 <input
//                     type="email"
//                     placeholder="Email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                 />
//                 <input
//                     type="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                 />
//                 <button type="submit">Login</button>
//             </form>
//             {message && <p className="message">{message}</p>}
//             <button onClick={handleForgotPassword} className="forgot-password">
//                 Forgot Password?
//             </button>
//         </div>
//     );
// };

// export default Login;


import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../components/AuthContext';
import './styles/Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const handleLogin = async (e) => {
        e.preventDefault();
        setMessage('');

        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', {
                email,
                password,
            });

            console.log(response.data);
            const { token } = response.data;
            login(token); // Update global authentication state
            navigate('/doctor-selection'); // Redirect to doctor selection page
        } catch (error) {
            console.error('Login failed:', error.message);
            setMessage('Login failed. Please check your credentials and try again.');
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
            {message && <p className="message">{message}</p>}
        </div>
    );
};

export default Login;

