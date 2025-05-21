/*
* File: app.js
* Author: Lennert Ádám
* Copyright: 2025, Lennert Ádám
* Group: Szoft I-N
* Date: 2025-05-21
* Github: https://github.com/lennertadam
* Licenc: MIT
*/

const url="http://localhost:8000/api/bikes"
const tbody=document.querySelector("#tbody")

var bikeList=[]

function getBikes(){
    fetch(url).then(response=>response.json()).then(result=>{
        bikeList=result.data
        //renderTbody goes here so that it runs after the list is filled
        renderTbody()
    })

    
}

function renderTbody(){
    let rows=""
    for(let bike of bikeList){

        rows+=`
        <tr>
            <td>${bike.id}</td>
            <td>${bike.name}</td>
            <td>${bike.wheel}</td>
            <td>${bike.usage}</td>
            <td>${bike.price}</td>
        </tr>
        `
    }

    tbody.innerHTML+=rows
}

getBikes()
