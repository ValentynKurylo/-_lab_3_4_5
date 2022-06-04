export default class APIService {
    // Insert an article
    static GetProducts() {
        return fetch('/products/', {
             mode: "no-cors",
            'method': 'GET',

        }).catch(error => console.log(error)).then(response => response.json()).then(response =>{
            return response
        })

    }
    static PostProduct(token, body){
        return fetch('/products/', {
            'method': 'POST',
            headers: {

                'Content-Type': 'application/json',
                'x-access-token':  token

            },
            body: JSON.stringify(body)
        }).then(resp=>{
            console.log(token, resp)
        })
    }
    static GetProduct(id){
        return fetch('/products/' + id, {
             mode: "no-cors",
            'method': 'GET',

        }).catch(error => console.log(error)).then(response => response.json()).then(response =>{
            return response
        })
    }
    static UpDateProduct(token, id, body){
        return fetch('/products/' + id, {
            'method': 'PUT',
            headers: {

                'Content-Type': 'application/json',
                'x-access-token':  token

            },
            body: JSON.stringify(body)
        })
    }
    static DeleteProduct(token, id){
        return fetch('/products/' + id, {
            'method': 'DELETE',
            headers: {

                'Content-Type': 'application/json',
                'x-access-token':  token

            },
        })
    }
}