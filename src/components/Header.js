import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"

export default function Header() {

    const { dark, language } = useSelector(state => state.site)

    return (
        <div>
            <h3>HEADER</h3>
            <nav>
                <NavLink to='/' exact={true} activeClassName='active'>Ana Sayfa </NavLink>
                <NavLink to='/profile' exact={true} activeClassName='active'>Profile</NavLink>
                <NavLink to='/about' exact={true} activeClassName='active'>About </NavLink>
            </nav>
            <h5>{'  '} MEVCUT TEMA : {dark ? 'KARANLIK TEMA' : 'AYDINLIK TEMA'} {'  '} <br /></h5>
            <h5>{'  '} MEVCUT DİL : {language} {'  '}</h5>
        </div>
    )
}