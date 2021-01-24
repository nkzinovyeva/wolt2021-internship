import React from 'react';
import { Blurhash } from 'react-blurhash';

/*
* card
*/
function MyCard({restaurant}) {
    
    const getClassName = () => {
        return restaurant.online ? 'online' : 'offline';
    };

    const getStatus = () => {
        return restaurant.online ? 'statusOnline' : 'statusOffline';
    };
    
    return (
        <div className="card">
            <div className="cardImage">
                <Blurhash
                    className={getClassName()}
                    hash={restaurant.blurhash}
                    width={200}
                    height={100}
                />
            </div>
            <div className="cardContent">
                <p className="cardTitle">{restaurant.name}</p>
                <p className={getStatus()}>{restaurant.online ? 'Open' : 'Closed'}</p>
            </div>
        </div> 
    );  
};


export default MyCard;