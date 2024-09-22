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
                <div className="daily__tasks container">
                    <h2 className='section__name'>Daily Tasks</h2>
                    <div className="task dashed">
                        <div className="task__info">
                            <p>Зайди на дискорд сервер</p>
                            <span>+50 HEARTS <button className='check'>Check</button></span>
                        </div>
                        <a className='join' href='https://'>Join</a>
                    </div>
                </div>
            </div>
        </div>
    )
}