import'./home.sass'
import { FaRegHeart } from "react-icons/fa";

export default function Home() {
    return (
        <div className="Home">
            <div className="info">
                <p className='container'><span><FaRegHeart />Немного о проекте тут!</span> <button className='button_info'><span>Чмок :3</span></button></p>
            </div>
            <img src="/logo.png" alt="" />
        </div>
    )
}