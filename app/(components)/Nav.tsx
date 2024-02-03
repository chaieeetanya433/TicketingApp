import { faHome, faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Nav = () => {
    return (
        <nav className="flex justify-between bg-nav p-4">
            <div className="flex items-center space-x-4">
                <p className="text-default-text text-transform: uppercase font-bold tracking-widest text-2xl">TickeTrail</p>
                <Link href="/">
                    <FontAwesomeIcon icon={faHome} className="icon"/>
                </Link>
                <Link href="/TicketPage/new">
                    <FontAwesomeIcon icon={faTicket} className="icon"/>
                </Link>
            </div>
            <div>
                <p className="text-default-text">chaitanyaagarkar11@gmail.com</p>
            </div>
        </nav>
    );
}

export default Nav;