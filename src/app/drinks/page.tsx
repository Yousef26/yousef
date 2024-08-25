import React from 'react'
import './drinks.css'
import  lgo  from'/images/d1.jpg'
import Image from 'next/image'
function drinks() {
    return (
        <div>
            <div className="drinkindrink">
                <div className="cold">
                    <div className="coldheader">cold</div>
                    <div className="coldcards">
                    <div className="card"><Image src={lgo} alt="" className='drinksimg'/><div className="drinksprice">30$</div><button className='drinkdetails'>details </button></div>
                    <div className="card"><Image src={lgo} alt="" className='drinksimg'/><div className="drinksprice">30$</div><button className='drinkdetails'>details </button></div>
                    <div className="card"><Image src={lgo} alt="" className='drinksimg'/><div className="drinksprice">30$</div><button className='drinkdetails'>details </button></div>
                    <div className="card"><Image src={lgo} alt="" className='drinksimg'/><div className="drinksprice">30$</div><button className='drinkdetails'>details </button></div>
                    <div className="card"><Image src={lgo} alt="" className='drinksimg'/><div className="drinksprice">30$</div><button className='drinkdetails'>details </button></div>
                    <div className="card"><Image src={lgo} alt="" className='drinksimg'/><div className="drinksprice">30$</div><button className='drinkdetails'>details </button></div>
                    <div className="card"><Image src={lgo} alt="" className='drinksimg'/><div className="drinksprice">30$</div><button className='drinkdetails'>details </button></div>
                    <div className="card"><Image src={lgo} alt="" className='drinksimg'/><div className="drinksprice">30$</div><button className='drinkdetails'>details </button></div>
                    <div className="card"><Image src={lgo} alt="" className='drinksimg'/><div className="drinksprice">30$</div><button className='drinkdetails'>details </button></div>
                    <div className="card"><Image src={lgo} alt="" className='drinksimg'/><div className="drinksprice">30$</div><button className='drinkdetails'>details </button></div>
                    <div className="card"><Image src={lgo} alt="" className='drinksimg'/><div className="drinksprice">30$</div><button className='drinkdetails'>details </button></div>
                    <div className="card"><Image src={lgo} alt="" className='drinksimg'/><div className="drinksprice">30$</div><button className='drinkdetails'>details </button></div>
                    </div>
                </div>
                <hr />
                <div className="hot">
                <div className="hotheader">hot</div>
                    <div className="coldcards">
                    <div className="card"><Image src={lgo} alt="" className='drinksimg'/><div className="drinksprice">30$</div><button className='drinkdetails'>details </button></div>
                    <div className="card"><Image src={lgo} alt="" className='drinksimg'/><div className="drinksprice">30$</div><button className='drinkdetails'>details </button></div>
                    <div className="card"><Image src={lgo} alt="" className='drinksimg'/><div className="drinksprice">30$</div><button className='drinkdetails'>details </button></div>
                    <div className="card"><Image src={lgo} alt="" className='drinksimg'/><div className="drinksprice">30$</div><button className='drinkdetails'>details </button></div>
                    <div className="card"><Image src={lgo} alt="" className='drinksimg'/><div className="drinksprice">30$</div><button className='drinkdetails'>details </button></div>
                    <div className="card"><Image src={lgo} alt="" className='drinksimg'/><div className="drinksprice">30$</div><button className='drinkdetails'>details </button></div>
                    <div className="card"><Image src={lgo} alt="" className='drinksimg'/><div className="drinksprice">30$</div><button className='drinkdetails'>details </button></div>
                    <div className="card"><Image src={lgo} alt="" className='drinksimg'/><div className="drinksprice">30$</div><button className='drinkdetails'>details </button></div>
                    <div className="card"><Image src={lgo} alt="" className='drinksimg'/><div className="drinksprice">30$</div><button className='drinkdetails'>details </button></div>
                    <div className="card"><Image src={lgo} alt="" className='drinksimg'/><div className="drinksprice">30$</div><button className='drinkdetails'>details </button></div>
                    <div className="card"><Image src={lgo} alt="" className='drinksimg'/><div className="drinksprice">30$</div><button className='drinkdetails'>details </button></div>
                    <div className="card"><Image src={lgo} alt="" className='drinksimg'/><div className="drinksprice">30$</div><button className='drinkdetails'>details </button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default drinks