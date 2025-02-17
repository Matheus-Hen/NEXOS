
import "@/app/globals.css"
import Nexos from '../public/nexos.svg'
import Image from 'next/image';
import localFont from 'next/font/local'

const dreamFont = localFont({
    src: './fonts/Dream MMA.ttf',
    display: 'swap',
    variable: '--dreamFont'
})
const Card = () => {

    return (
        <div className="cartao">
            <div className="border"></div>
            <div className="content">
                <div className="logo">
                <div className="logo3" id="logo-second">
                        <h1 className={dreamFont.className}>ne</h1>
                    </div>
                    <div className="logo1">
                        <Image id="logo-main" src={Nexos} height={50} className="bg-white" alt="logo" />
                    </div>
                    
                    <div id="logo-second" className="logo2">
                        <h1 className={dreamFont.className}>os</h1>
                    </div>
                    <span className="trail"></span>
                </div>
                <span className="logo-bottom-text">uiverse.io</span>
            </div>
            <span className="bottom-text">universe of ui</span>
        </div>
    )
}
export default Card;
