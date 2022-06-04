export default class APIService {
    // Insert an article
    static PostDemand(token, data) {
        return fetch('/productDemands/', {
            //mode: "no-cors",
            'method': 'POST',
             headers: {
            'Content-Type': 'application/json',
            'x-access-token':  token
        },
        body: JSON.stringify(data)
        })

    }
    static GetDemand(token){
        return fetch('/productDemands', {
            'method': 'GET',
            mode: 'no-cors',
            headers:{
                'x-access-token': token
            }
        }).catch(error => console.log(error)).then(response => response.json()).then(response =>{
            console.log(response);
            return response
        })
    }
}