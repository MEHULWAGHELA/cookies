import React from 'react'
import { useCookies } from 'react-cookie'
const CookiesComponent = () => {
    /* to use cookies in react we have to install react-cookies by this command=> npm i react-cookie
    then useCookies is use which we destructure in 3 terms
    1=>any name by which we can access cookies data in object form
    2=>set method by which we can set cookies which has path and expiry date also
        path and expiry date is optional 
        path is 
    3=>remove cookie by which we can remove cookie */
    /*  */
    let [cookies, setcookies, removecookies] = useCookies()
    const setData = () => {
        let expiryDate = new Date()
        expiryDate.setMinutes(expiryDate.getMinutes() + 2)
        setcookies('greet', 'Mehul Waghela', { path: '/', expires: expiryDate })
        setcookies('greetNew', 'Sagar Davara', { path: '/home' })
    }
    const getData = () => {
        console.log(cookies)
    }
    const removeData = () => {
        removecookies('greet')
    }
    return (
        <div>
            <div>
                {cookies.greet}
            </div>
            <div>
                <button onClick={setData}>Set Cookies</button>
                <button onClick={getData}>Get Cookies</button>
                <button onClick={removeData}>Remove Cookies</button>
            </div>
        </div>
    )
}

export default CookiesComponent