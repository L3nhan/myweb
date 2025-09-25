import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <table>
                <tr>
                    <td>
                        <Link to='/'>
                            <button className="btn btn-info">Home</button>
                        </Link>
                    </td>
                    <td>
                        <Link to='/chat'>
                            <button className="btn btn-info">Chatbot</button>
                        </Link>
                    </td>
                </tr>
            </table>
        </>
    );
}

export default NavBar;

