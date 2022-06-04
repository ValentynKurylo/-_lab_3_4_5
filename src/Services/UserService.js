export default class APIService {
    // Insert an article

    static EnterUser(body) {
        console.log(body)
        return fetch('/users/login', {
            mode: "no-cors",
            'method': 'POST',
            headers: {
                'Content-Type': 'application/json',
                //'Authorization': 'Basic ' + btoa(`${body.Username}:${body.Password}`)
            },
            body: JSON.stringify(body)
        }).catch(error => console.log(error)).then(response => response.json()).then(response => {
            console.log(response);
            return response
        })
    }
    static PostUser(body){
        return fetch('/users/', {
            mode: "no-cors",
            'method': 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
    }

    static GetCurrentUser(token){
        return fetch('/users/CurrentUser/' ,{
            'method': 'GET',
            headers: {
                'x-access-token':  token
            },
        }).catch(error => console.log(error)).then(response => response.json()).then(response =>{
            return response
        })
    }


}