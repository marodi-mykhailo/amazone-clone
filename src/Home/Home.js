import React from "react";
import './Home.css';
import Product from "../Home/Product/Product";
import landing from '../assets/image/landing.png'

const theLeanImg = 'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
const theLeanDesc = 'The Lean Startup isn\'t just about how to create a more successful entrepreneurial business...'

const HowToImg = 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1442726934l/4865._SY475_.jpg'
const HowToDesc = 'You can go after the job you want...and get it! You can take the job you have...and improve it! You can take any situation you\'re in...and make it work for you!'
function Home() {
    return (
        <div className={'home'}>
            <div className={'home__container'}>
                <img className={'home__image'}
                     src={landing}
                     alt={"amazonBg"}
                />
                <div className={'home__row'}>
                    <Product id={'2111221'}
                        title={"The Lean Startup"} price={32.99}
                             description={theLeanDesc}
                             image={theLeanImg}
                             rating={5}/>
                    <Product title={"the lean statup"} price={19.99}
                             description={HowToDesc}
                             image={HowToImg}
                             rating={5}/>
                </div>
                <div className={'home__row'}>
                    <Product id={'212313123'}
                        title={"the lean statup"} price={32.99}
                             description={theLeanDesc}
                             image={theLeanImg}
                             rating={5}/>
                    <Product id={'2123123'}
                             title={"the lean statup"} price={19.99}
                             description={HowToDesc}
                             image={HowToImg}
                             rating={5}/>
                    <Product id={'2713123'}
                             title={"the lean statup"} price={32.99}
                             description={theLeanDesc}
                             image={theLeanImg}
                             rating={5}/>
                </div>
                <div className={'home__row'}>
                    <Product id={'216513123'}
                             title={"the lean statup"} price={19.99}
                             description={HowToDesc}
                             image={HowToImg}
                             rating={5}/>
                </div>
            </div>
        </div>
    )
}

export default Home;
