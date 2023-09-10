const searchbar = document.getElementById("search")
const container = document.getElementById("container")
const btn = document.getElementById("btn")


function getuser(val){
    let apiurl;

    if(val === undefined)
    {
         apiurl = "https://api.github.com/users"; 
    }
    else{
         apiurl = `https://api.github.com/users/${val}`;
    }


     const promise = fetch(apiurl);
promise.then((response) => {
    return response.json();
}).then((data) => {
    let res = data;
    console.log(container); 
    console.log(res);
    if(val === undefined)
    {
        res.map((ele) => {
           
            const container1 = document.createElement(" ");
            const head = document.createElement("h2");
            const para = document.createElement("p");
            const link = document.createElement("a");
            const img = document.createElement("img");
            head.innerText = ele.login;
            img.src = ele.avatar_url;
            link.href = ele.url;
            link.innerHTML = "Git Hub Link";
            container1.appendChild(img);
            container1.appendChild(head);
            container1.appendChild(link);
            container.appendChild(container1);
        });
    }
    else{
        container.innerHTML="";
            const container1 = document.createElement("div");
            container1.classList.add("user-container");
            const head = document.createElement("h2");
            const para = document.createElement("p");
            const link = document.createElement("a");
            const img = document.createElement("img");
            head.innerText = res.login;
            img.src = res.avatar_url;
            link.href = res.url;
            link.innerHTML = "Git Hub Link";
            container1.appendChild(img);
            container1.appendChild(head);
            container1.appendChild(link);
            container.appendChild(container1);
       

    }
    console.log(res); 
});

}



btn.addEventListener("click",(e)=>{
    e.preventDefault();
    const val = searchbar.value;
    getuser(val);

}) 

getuser();



  
