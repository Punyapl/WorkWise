export const BASE_URL = "http://127.0.0.1:8000";

const checkServerResponse = (res) => {
    if (res.ok) {
        console.log(res.json)
        return res.json();
    }
    return Promise.reject(res);
};

export const editUser = (token, data) => {
    return fetch(`${BASE_URL}/users/info/update`, {
        // mode: "no-cors",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "Token": token,
            "Birthday": data.Birthday,
            "City": data.City,
            "Course": ''+data.Course,
            "Discord": data.Discord,
            "EDU": data.EDU,
            "Email": data.Email,
            "Group": data.Group,
            "Name": data.Name,
            "Phone": data.Phone,
            "Tg": data.Tg,
            "Vk": data.Vk
        }),
    })
        .then((res) => checkServerResponse(res))
};

export const getLastTestResults = (token) => {
    return fetch(`${BASE_URL}/get_last_results`, {
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

export const getAllTestsNames = () => {
    return fetch(`${BASE_URL}/test/special`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }).then((res) => checkServerResponse(res));
};

export const getTestQuestions = (ID, categories) => {
    return fetch(`${BASE_URL}/get_questions`, {
        // mode: "no-cors",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "ID_Special": ID,
            "OTF_Categories": categories
        }),
    })
        .then((res) => checkServerResponse(res))
};

export const submitAnswers = (token, idSpec, answers) => {
    return fetch(`${BASE_URL}/submit_answers`, {
        // mode: "no-cors",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "Token": token,
            "ID_Special": idSpec,
            "ANS": answers
        }),
    })
        .then((res) => checkServerResponse(res))
};

export const getSpider = (IDPass) => {
    return fetch(`${BASE_URL}/otf_spider_diagram`, {
        // mode: "no-cors",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "ID_Pass": IDPass
        }),
    })
        .then((res) => checkServerResponse(res))
};

export const getHistory = (token) => {
    return fetch(`${BASE_URL}/pass_history`, {
        // mode: "no-cors",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "Token": token
        }),
    })
        .then((res) => checkServerResponse(res))
};