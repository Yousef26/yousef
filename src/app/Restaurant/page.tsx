"use client";
import React, { useState, useEffect } from 'react';
import './res.css'; // Importing the CSS file
import Link from 'next/link';

const Restaurant: React.FC = () => {
    const [mealType, setMealType] = useState('all');

    const filterMeals = (type: string) => {
        setMealType(type);
    };

    useEffect(() => {
        const meals = document.querySelectorAll('.meal');
        meals.forEach(meal => {
            if (mealType === 'all' || meal.classList.contains(mealType)) {
                (meal as HTMLElement).style.display = 'flex';
            } else {
                (meal as HTMLElement).style.display = 'none';
            }
        });
    }, [mealType]);

    const showForm = () => {
        const formElement = document.querySelector('.coninp') as HTMLElement;
        if (formElement) {
            formElement.style.display = 'flex';
setTimeout(() => {
    formElement.style.opacity = '1';
    
}, 100);

        }
    };
    const hideForm = () => {
        const formElement = document.querySelector('.coninp') as HTMLElement;
        if (formElement) {
            formElement.style.opacity = '0';
            setTimeout(() => {
                formElement.style.display = 'none';

                
            }, 500);

        }
    };
function aler() {
    hideForm();
    alert("your order has arrive after 1 hour");

    
}
    return (
        <div>
            <div className="coninp">
                <button className="inpback" onClick={hideForm}>Go Back</button>
                <h1>Delivery</h1>
                <form>
                    <input type="text" placeholder="Place" />
                    <select>
                        <option value="all">Large Size</option>
                        <option value="breakfast">Medium Size</option>
                        <option value="lunch">Small Size</option>
                    </select>
                    <input type="button" onClick={aler} value="Submit" />
                </form>
            </div>
            <div className="line">
                <h1>Restaurant</h1>
                <hr />
                <div className="button">
                    <button className="breakfast" onClick={() => filterMeals('breakfast')}>Breakfast</button>
                    <button className="lunch" onClick={() => filterMeals('lunch')}>Lunch</button>
                    <button className="dinner" onClick={() => filterMeals('dinner')}>Dinner</button>
                    <button className="all" onClick={() => filterMeals('all')}>All</button>
                </div>
            </div>
            <Link href="./drinks">
                <button className="drinks">Drinks</button>
            </Link>
            <div className="conmeal">
                <h1>Our Special</h1>
                <div className="meal breakfast">
                    <img src="https://th.bing.com/th/id/R.1e95d5b0a580872972cae45d7ad4b871?rik=KnX%2bSNgaVFPjEw&pid=ImgRaw&r=0" alt="breakfast" />
                    <div className="lorem">
                        <h2><p>Breakfast</p> <p>$20</p></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel diam vel mauris iaculis malesuada.</p>
                        <button onClick={showForm}>Buy</button>
                    </div>
                </div>
                <div className="meal lunch">
                    <img src="https://th.bing.com/th/id/R.1e95d5b0a580872972cae45d7ad4b871?rik=KnX%2bSNgaVFPjEw&pid=ImgRaw&r=0" alt="lunch" />
                    <div className="lorem">
                        <h2><p>Lunch</p> <p>$20</p></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel diam vel mauris iaculis malesuada.</p>
                        <button onClick={showForm}>Buy</button>
                    </div>
                </div>
                <div className="meal dinner">
                    <img src="https://th.bing.com/th/id/R.1e95d5b0a580872972cae45d7ad4b871?rik=KnX%2bSNgaVFPjEw&pid=ImgRaw&r=0" alt="dinner" />
                    <div className="lorem">
                        <h2><p>Dinner</p> <p>$20</p></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel diam vel mauris iaculis malesuada.</p>
                        <button onClick={showForm}>Buy</button>
                    </div>
                </div><div className="meal breakfast">
                    <img src="https://th.bing.com/th/id/R.1e95d5b0a580872972cae45d7ad4b871?rik=KnX%2bSNgaVFPjEw&pid=ImgRaw&r=0" alt="breakfast" />
                    <div className="lorem">
                        <h2><p>Breakfast</p> <p>$20</p></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel diam vel mauris iaculis malesuada.</p>
                        <button onClick={showForm}>Buy</button>
                    </div>
                </div>
                <div className="meal lunch">
                    <img src="https://th.bing.com/th/id/R.1e95d5b0a580872972cae45d7ad4b871?rik=KnX%2bSNgaVFPjEw&pid=ImgRaw&r=0" alt="lunch" />
                    <div className="lorem">
                        <h2><p>Lunch</p> <p>$20</p></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel diam vel mauris iaculis malesuada.</p>
                        <button onClick={showForm}>Buy</button>
                    </div>
                </div>
                <div className="meal dinner">
                    <img src="https://th.bing.com/th/id/R.1e95d5b0a580872972cae45d7ad4b871?rik=KnX%2bSNgaVFPjEw&pid=ImgRaw&r=0" alt="dinner" />
                    <div className="lorem">
                        <h2><p>Dinner</p> <p>$20</p></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel diam vel mauris iaculis malesuada.</p>
                        <button onClick={showForm}>Buy</button>
                    </div>
                </div><div className="meal breakfast">
                    <img src="https://th.bing.com/th/id/R.1e95d5b0a580872972cae45d7ad4b871?rik=KnX%2bSNgaVFPjEw&pid=ImgRaw&r=0" alt="breakfast" />
                    <div className="lorem">
                        <h2><p>Breakfast</p> <p>$20</p></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel diam vel mauris iaculis malesuada.</p>
                        <button onClick={showForm}>Buy</button>
                    </div>
                </div>
                <div className="meal lunch">
                    <img src="https://th.bing.com/th/id/R.1e95d5b0a580872972cae45d7ad4b871?rik=KnX%2bSNgaVFPjEw&pid=ImgRaw&r=0" alt="lunch" />
                    <div className="lorem">
                        <h2><p>Lunch</p> <p>$20</p></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel diam vel mauris iaculis malesuada.</p>
                        <button onClick={showForm}>Buy</button>
                    </div>
                </div>
                <div className="meal dinner">
                    <img src="https://th.bing.com/th/id/R.1e95d5b0a580872972cae45d7ad4b871?rik=KnX%2bSNgaVFPjEw&pid=ImgRaw&r=0" alt="dinner" />
                    <div className="lorem">
                        <h2><p>Dinner</p> <p>$20</p></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel diam vel mauris iaculis malesuada.</p>
                        <button onClick={showForm}>Buy</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Restaurant;
