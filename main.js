async function getData(){
    let query= document.getElementById("query").value 
    console.log(query)

    let url =  `https://swapi.dev/api/people/?search=${query}`



    try {
        var res= await fetch(url)

    var data= await res.json()
    console.log(data)
    return data.results
    } catch (error) {
        console.log("error:", error)
    }
    

   
}
var data=JSON.parse(localStorage.getItem("data")) || []
function appendData(data){
    let results= document.getElementById("results")
    results.innerHTML=null

    data.forEach(function(el){
        let p= document.createElement("p")
        p.innerText=el.name
        p.addEventListener("click",function(){
            arr.push(el)
            console.log(arr)
            var data= localStorage.setItem("data",JSON.stringify(arr))
            console.log(data)
            window.location.href="data.html"
        })

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
id=setTimeout(function(){
    func()
},delay)
}