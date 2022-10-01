import { menuItems } from "./Contents/Menu";
import "../Style/navbar.scss";

export default function Navbar () {

    const printSubmenu = (submenu) => {
        return (
            <p>
                {
                    submenu.map(key => {
                        return key.title
                    })
                }
            </p>
        )
    }
    return (
        <section className="navbar">
            <div className="navbar-menu">
                <div className="logo">LOGO</div>
                <form>
                    <input type="text" placeholde="Search" />
                    <button type="submit" className="" >search</button>
                </form>
                <div className="user">
                    <div>
                        <img src="" alt="" className="user-profile" />
                        <div>
                            <p className="useer-name">Username</p>
                            <p className="role">user's role</p>
                        </div>
                        <div className="action">
                            <div className="like">like</div>
                            <div className="cart">Cart</div>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="navbar-nav">
            {
                menuItems.map((key, value) =>{
                    return <p>{key.submenu ? printSubmenu(key.submenu): key.title}</p>
                })    
            }
            </nav>
        </section>
    )
}