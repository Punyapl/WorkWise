export const BASE_URL = "http://127.0.0.1:8000";

const checkServerResponse = (res) => {
    if (res.ok) {
        console.log(res.json)
        return res.json();
    }
    return Promise.reject(res);
};

export const register = (email,name, password) => {
    return fetch(`${BASE_URL}/register`, {
        // mode: "no-cors",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "Email": email, 
            "Name": name,
            "Password": password, 
        }),
    })
    .then((res) => checkServerResponse(res))
};


export const login = (email, password) => {
    return fetch(`${BASE_URL}/login`, {
        // mode: "no-cors",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "Email": email,
            "Password": password
        }),
    })
        .then((res) => checkServerResponse(res))
        .then((data) => {
            // console.log(data.token)
            if (data) {
                localStorage.setItem("token", data.Token);
                return data;
            }
        });
};

export const getUser = (token) => {
    return fetch(`${BASE_URL}/users/info/full_no_password`, {
        // mode: "no-cors",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "Token": token,
        }),
    })
        .then((res) => checkServerResponse(res))
};