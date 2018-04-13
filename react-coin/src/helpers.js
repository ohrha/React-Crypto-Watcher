import React from 'react';
/** 
    Fetch error helper
    @param {object} response
*/

export const handleResponse = (response) => {

    return response.json().then(json => { // Converts response object to JSON object.
        return response.ok ? json : Promise.reject(json);// Then checks whether response was successful.
        //Or else rejects the promise. So you can respond to the error in the catch handler 
        //method.
    });

}
/**
 * Render change percent helper
 * @param {string} percent 
 */
 export const  renderChangePercent = (percent)=>{

        if (percent > 0) {
            return <span className="percent-raised">{percent}% &uarr;</span>
        } else if (percent < 0) {
            return <span className="percent-fallen">{percent}% &darr;</span>
        } else {
            return <span>{percent}</span>
        }

    }

