import { useDispatch } from "react-redux"
import { login } from '../stores/authSlice'
import { useNavigate } from "react-router-dom"

export default function Login() {

    const dispatch = useDispatch()

    const handleLogin = () => {
        //istek atılacak
        //backend den gelen data login'e basılacak
        const dummyData = {
            id: 1,
            name: 'Tayfun',
            token: 'qwre798654'
        }
        localStorage.setItem('auth', dummyData)
        dispatch(login(dummyData))
        useNavigate.push('/')
    }

    return (
        <div style={{ background: 'lightblue' }}>
            <h3>LOGIN PAGE _ GİRİŞ YAP</h3>
            <button onClick={handleLogin}> Giriş </button>
        </div>
    )
}