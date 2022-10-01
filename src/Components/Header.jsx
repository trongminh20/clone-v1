import Navbar from "./Navbar";
import "../Style/header.scss";

export default function Header (props){

    return (
        <header className="header">
            <section className="promotion">
                <p>Free shipping for other <span> $ 100 + </span></p>
            </section>
            <section>
                <Navbar />
            </section>
        </header>
    )
}