import React from "react";
import './Home.css';
import Product from "../Home/Product/Product";


function Home() {
    return (
        <div className={'home'}>
            <div className={'home__container'}>
                <img className={'home__image'}
                     src={'https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'}
                     alt={"amazonBg"}
                />
                <div className={'home__row'}>
                    <Product id={'2111221'}
                        title={"theaddasdnamdnbabdavdasdadva ah sdbasd babf abfba b" +
                        "adasdasdadasdaffanfk jna fab fbaeb hfhs lean statup"} price={29.99}
                             image={'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'}
                             rating={5}/>
                    <Product title={"the lean statup"} price={29.99}
                             image={'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'}
                             rating={5}/>
                </div>
                <div className={'home__row'}>
                    <Product id={'212313123'}
                        title={"the lean statup"} price={29.99}
                             image={'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'}
                             rating={5}/>
                    <Product id={'2123123'}
                             title={"the lean statup"} price={29.99}
                             image={'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'}
                             rating={5}/>
                    <Product id={'2713123'}
                             title={"the lean statup"} price={29.99}
                             image={'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'}
                             rating={5}/>
                </div>
                <div className={'home__row'}>
                    <Product id={'216513123'}
                             title={"the lean statup"} price={29.99}
                             image={'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'}
                             rating={5}/>
                </div>
            </div>
        </div>
    )
}

export default Home;
