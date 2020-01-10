import User from "../models/User";

let user = null;
let server = 'http://192.168.0.101:4000'

export async function login(username, password) {
    const data = {
        username:username,
        password:password,
    }
    const response = await fetch(`${server}/login`, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(data) // body data type must match "Content-Type" header
      });
      console.log(response)
      let us = await response.json();
      console.log(us)
}

export function isLoggedIn(){
    return user !== null;
}

export function logout(){
    user = null;
}