import { useSelector, useDispatch } from "react-redux"
import { setDarkMode, setLanguage } from '../stores/siteSlice'
import { logout } from "../stores/authSlice"

export default function Footer() {

    const { dark, language } = useSelector(state => state.site)
    const dispatch = useDispatch()
    const {user} = useSelector(state => state.auth)
    const languages = ['TR', 'EN']

    const handleLanguage = (lang) => {
        dispatch(setLanguage(lang))
    }

    return (
        <div>
            <h3>FOOTER</h3>
            <div>
                {languages.map((lang, index) => (
                    <button onClick={() => handleLanguage(lang)} className={lang === language ? 'active' : ''} key={index}>{lang}</button>
                ))}
            </div>
            <div>
                {

                }
                <button onClick={() => dispatch(setDarkMode())}>{dark ? 'Light Moda Geç' : 'Dark Moda Geç'}</button>
            </div>
            {user && (
                <div>
                    <button onClick={()=>dispatch(logout())}> Çıkış Yap </button>
                </div>
            )}
        </div>
    )
}