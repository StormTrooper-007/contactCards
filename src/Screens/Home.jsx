import React from 'react';
import Card from '../Components/Card';
import '../Styles/Home.css';


function Home({data}) {
    return (
        <>
                <div className="grid-container">
                    {data.map((card,index) => (
                    <Card key={card.id} card={card}/>
                    ))}
                </div>
        </>
    );
}

export default Home;