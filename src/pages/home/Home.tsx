import './home.sass'
import { FaRegHeart } from "react-icons/fa";

export default function Home() {
    return (
        <div className="Home">
            <div className="info">
                <p className='container'><span><FaRegHeart />Немного о проекте тут!</span> <button className='button_info'><span>Чмок :3</span></button></p>
            </div>
            <div className="main__content">
                <div className="user__balance">
                    <img className='logo' src="/logo.png" alt="" />
                    <h2>10,851 HEARTS</h2>
                </div>
                <div className="daily__tasks">
                    <div className="task">

                    </div>
                </div>
            </div>
        </div>
    )
}