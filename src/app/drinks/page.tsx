"use client";
import React, { useState } from 'react';
import './drinks.css';

function Drinks() {
    const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

    const handleFlip = (index: number) => {
        if (flippedIndex === index) {
            // If the same card is clicked, close it
            setFlippedIndex(null);
        } else {
            // Otherwise, flip the new card and close the previous one
            setFlippedIndex(index);
        }
    };

    return (
        <div className="drinks-page">
            <button className="home-button" onClick={() => window.location.href = '/Restaurant'}>Home</button>
            <div className="drinkindrink">
                <div className="cold">
                    <div className="coldheader">Cold</div>
                    <div className="coldcards">
                        {Array.from({ length: 10 }).map((_, index) => (
                            <div
                                key={index}
                                className={`card ${flippedIndex === index ? 'flipped' : ''}`}
                            >
                                <div className="front">
                                    <img
                                        className="drinksimg"
                                        src="https://d1ralsognjng37.cloudfront.net/c9999e66-7040-4890-bf72-c5ee49ff0a2a.jpeg"
                                        alt="drink"
                                    />
                                    <div className="drinksprice">30$</div>
                                    <button
                                        className="drinkdetails"
                                        onClick={() => handleFlip(index)}
                                    >
                                        details
                                    </button>
                                </div>
                                <div className="back">
                                    <img
                                        className="drinksimg"
                                        src="https://d1ralsognjng37.cloudfront.net/c9999e66-7040-4890-bf72-c5ee49ff0a2a.jpeg"
                                        alt="drink"
                                    />
                                    <div className="tex">
                                         Rem exercitationem possimus ipsa, aperiam tempore sequi suscipit.
                                    </div>
                                    <button
                                        className="gotocard"
                                        onClick={() => handleFlip(index)}
                                    >
                                        go back
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <hr />
                <div className="hot">
                    <div className="hotheader">Hot</div>
                    <div className="hotcards">
                        {Array.from({ length: 10 }, (_, i) => i + 10).map((index) => (
                            <div
                                key={index}
                                className={`card ${flippedIndex === index ? 'flipped' : ''}`}
                            >
                                <div className="front">
                                    <img
                                        className="drinksimg"
                                        src="https://d1ralsognjng37.cloudfront.net/c9999e66-7040-4890-bf72-c5ee49ff0a2a.jpeg"
                                        alt="drink"
                                    />
                                    <div className="drinksprice">30$</div>
                                    <button
                                        className="drinkdetails"
                                        onClick={() => handleFlip(index)}
                                    >
                                        details
                                    </button>
                                </div>
                                <div className="back">
                                    <img
                                        className="drinksimg"
                                        src="https://d1ralsognjng37.cloudfront.net/c9999e66-7040-4890-bf72-c5ee49ff0a2a.jpeg"
                                        alt="drink"
                                    />
                                    <div className="tex">
                                         Rem exercitationem possimus ipsa, aperiam tempore sequi suscipit.
                                    </div>
                                    <button
                                        className="gotocard"
                                        onClick={() => handleFlip(index)}
                                    >
                                        go back
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Drinks;
