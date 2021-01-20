
import Menu from "./Menu"
import './App.css'


function Header(props) {
    return(
    <header className="header">
    <h1>{props.name}</h1>
    <ul className="menu">
        <li>{props.link[0]}</li>
        <li>{props.link[1]}</li>
        <li>{props.link[2]}</li>
    </ul>
</header>);

}


export default Header;