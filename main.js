async function getData(){
    let query= document.getElementById("query").value 
    console.log(query)

    let url =  `https://swapi.dev/api/people/?search=${query}`

    var res= await fetch(url)

    var data= await res.json()
    console.log(data)
    return data.results

   
}

function appendData(data){
    let results= document.getElementById("results")
    results.innerHTML=null

    data.forEach(function(el){
        let p= document.createElement("p")
        p.innerText=el.name

        results.append(p)
    })
    
}

async function main(){
   let data=await getData()
    appendData(data)
}
let id;
function debouncing(func, delay){
    if(id){
        clearTimeout(id)
    }
setTimeout(function(){
    func()
},delay)
}