import React from 'react'
import { useCookies } from 'react-cookie'
const CookiesComponent = () => {
    /* to use cookies in react we have to install react-cookies by this command=> npm i react-cookie
    then useCookies is use which we destructure in 3 terms
    1=>any name by which we can access cookies data in object form
    2=>set method by which we can set cookies which has path and expiry date also
        path and expiry date is optional 
        path is use when we want particular data on particular page for that requirement we use path
        expiry date is we can set directly or accrding to current time in this example i have set time by current time + 2 minute 
        after two minutes this cookie is expire 
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