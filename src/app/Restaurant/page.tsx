"use client"
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

    return (
        <div>
            <div className="line">
                <h1>Restaurant</h1>
                <hr />
                <div className="button">
                    <button className="breakfast" onClick={() => filterMeals('breakfast')}>breakfast</button>
                    <button className="lunch" onClick={() => filterMeals('lunch')}>lunch</button>
                    <button className="dinner" onClick={() => filterMeals('dinner')}>dinner</button>
                    <button className="all" onClick={() => filterMeals('all')}>all</button>
                </div>

            </div>
            <Link href='./drinks'>
        <button className='drinks'>drinks</button>
        </Link>

            <div className="conmeal">
                <h1>our special</h1>

                <div className="meal breakfast">
                    <img src="https://th.bing.com/th/id/R.1e95d5b0a580872972cae45d7ad4b871?rik=KnX%2bSNgaVFPjEw&pid=ImgRaw&r=0" alt="breakfast" />
                    <div className="lorem">
                        <h2><p>breakfast</p> <p>20$</p></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel diam vel mauris iaculis malesuada. Donec sodales, velit id fermentum sagittis, nunc neque iaculis justo, non convallis neque velit vel massa.</p>
                    </div>
                </div>                <div className="meal breakfast">
                    <img src="https://th.bing.com/th/id/R.1e95d5b0a580872972cae45d7ad4b871?rik=KnX%2bSNgaVFPjEw&pid=ImgRaw&r=0" alt="breakfast" />
                    <div className="lorem">
                        <h2><p>breakfast</p> <p>20$</p></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel diam vel mauris iaculis malesuada. Donec sodales, velit id fermentum sagittis, nunc neque iaculis justo, non convallis neque velit vel massa.</p>
                    </div>
                </div>                <div className="meal breakfast">
                    <img src="https://th.bing.com/th/id/R.1e95d5b0a580872972cae45d7ad4b871?rik=KnX%2bSNgaVFPjEw&pid=ImgRaw&r=0" alt="breakfast" />
                    <div className="lorem">
                        <h2><p>breakfast</p> <p>20$</p></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel diam vel mauris iaculis malesuada. Donec sodales, velit id fermentum sagittis, nunc neque iaculis justo, non convallis neque velit vel massa.</p>
                    </div>
                </div>

                <div className="meal dinner">
                    <img src="https://th.bing.com/th/id/R.0071efd41c57b5415850656ff2d83fc9?rik=8Le%2b6ITaJjtQgA&pid=ImgRaw&r=0" alt="dinner" />
                    <div className="lorem">
                        <h2><p>dinner</p> <p>10$</p></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel diam vel mauris iaculis malesuada. Donec sodales, velit id fermentum sagittis, nunc neque iaculis justo, non convallis neque velit vel massa.</p>
                    </div>
                </div>
                <div className="meal dinner">
                    <img src="https://th.bing.com/th/id/R.0071efd41c57b5415850656ff2d83fc9?rik=8Le%2b6ITaJjtQgA&pid=ImgRaw&r=0" alt="dinner" />
                    <div className="lorem">
                        <h2><p>dinner</p> <p>10$</p></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel diam vel mauris iaculis malesuada. Donec sodales, velit id fermentum sagittis, nunc neque iaculis justo, non convallis neque velit vel massa.</p>
                    </div>
                </div>
                <div className="meal dinner">
                    <img src="https://th.bing.com/th/id/R.0071efd41c57b5415850656ff2d83fc9?rik=8Le%2b6ITaJjtQgA&pid=ImgRaw&r=0" alt="dinner" />
                    <div className="lorem">
                        <h2><p>dinner</p> <p>10$</p></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel diam vel mauris iaculis malesuada. Donec sodales, velit id fermentum sagittis, nunc neque iaculis justo, non convallis neque velit vel massa.</p>
                    </div>
                </div>

                <div className="meal lunch">
                    <img src="https://d1ralsognjng37.cloudfront.net/c9999e66-7040-4890-bf72-c5ee49ff0a2a.jpeg" alt="lunch" />
                    <div className="lorem">
                        <h2><p>lunch</p> <p>40$</p></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel diam vel mauris iaculis malesuada. Donec sodales, velit id fermentum sagittis, nunc neque iaculis justo, non convallis neque velit vel massa.</p>
                    </div>
                </div>
                <div className="meal lunch">
                    <img src="https://d1ralsognjng37.cloudfront.net/c9999e66-7040-4890-bf72-c5ee49ff0a2a.jpeg" alt="lunch" />
                    <div className="lorem">
                        <h2><p>lunch</p> <p>40$</p></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel diam vel mauris iaculis malesuada. Donec sodales, velit id fermentum sagittis, nunc neque iaculis justo, non convallis neque velit vel massa.</p>
                    </div>
                </div><div className="meal lunch">
                    <img src="https://d1ralsognjng37.cloudfront.net/c9999e66-7040-4890-bf72-c5ee49ff0a2a.jpeg" alt="lunch" />
                    <div className="lorem">
                        <h2><p>lunch</p> <p>40$</p></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel diam vel mauris iaculis malesuada. Donec sodales, velit id fermentum sagittis, nunc neque iaculis justo, non convallis neque velit vel massa.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Restaurant;
