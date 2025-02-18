
import "@/app/globals.css"

import localFont from 'next/font/local'

const dreamFont = localFont({
    src: './fonts/Dream MMA.ttf',
    display: 'swap',
    variable: '--dreamFont'
})
const Card = () => {

    return (
        <div className="cartao bg-cover   ">
            <div className="border"></div>
            <div className="content">
                <div className="logo flex">
                <div className="logo3 order-2" id="logo-second">
                        <h1 className={dreamFont.className}>ne</h1>
                    </div>
                    <div className="logo1 order-1">
                        <h1 className={dreamFont.className}>x</h1>
                        {/* <Image id="logo-main" src={Nexos} height={90} width={50} className="bg-white bg-cover" alt="logo" /> */}
                    </div>
                    
                    <div id="logo-second" className="logo2 order-3">
                        <h1 className={dreamFont.className}>os</h1>
                    </div>
                    <span className="trail"></span>
                </div>
                <span className="logo-bottom-text">Bem vindo a Nexos</span>
            </div>
            <span className="bottom-text text-base">nexos.com.br</span>
        </div>
    )
}
export default Card;
