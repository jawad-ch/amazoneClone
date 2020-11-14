import React from 'react';
import './home.css'
import Product from './Product'
import ProductData from './dummyData'
// trainers

// 
// 
// 
// 
// 

// hp
// 
// 
// 
// 
// 
// 

//phones
// 
// 
// 
//  
// 

// pants
// 
// 
// 
// 
// 
// 

// t-shirts
// 
// 
// 
// 
// 
// 
// 
function Home() {

    return (
        <div className="home">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>
            <div className="home__container">
                <div className="home__column">
                    { ProductData.slice(0,14).map((product, i) =>(
                        <Product key={i} id={product.id} title={product.name} price={product.price} image={product.imageUrl} rating={product.rate} />
                    ))}
                </div>
                <div className="home__column">
                    { ProductData.slice(15,25).map((product,i) =>(
                        <Product key={i+1} id={product.id} title={product.name} price={product.price} image={product.imageUrl} rating={product.rate} />
                    ))}
                </div>
                <div className="home__column">
                    { ProductData.slice(26,33).map((product,i) =>(
                        <Product key={i+2} id={product.id} title={product.name} price={product.price} image={product.imageUrl} rating={product.rate} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home
