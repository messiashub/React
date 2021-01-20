

function Menu(props){

        const listLinks = props.link.map((link, index) => <li key={index}>{link}</li>)

        return(
            <ul className="menu">
            {listLinks}
        </ul>
        )
    
    }

    


export default Menu;