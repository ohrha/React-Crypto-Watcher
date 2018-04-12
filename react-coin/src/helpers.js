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


