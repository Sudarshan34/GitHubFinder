const searchbar = document.getElementById("search");
const container = document.getElementById("container");
const btn = document.getElementById("btn");

function getUser(val) {
  let apiurl;

  if (val === undefined) {
    apiurl = `https://api.github.com/users`;
  } else {
    apiurl = `https://api.github.com/users/${val}`;
  }

  const promise = fetch(apiurl);

  promise
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      if (Array.isArray(data)) {
        // If data is an array, it means you received multiple user profiles, and you can loop through them
        data.forEach((user) => {
          const container1 = document.createElement("div");
          const head = document.createElement("h2");
          const para = document.createElement("p");
          const link = document.createElement("a");
          const img = document.createElement("img");
          head.innerText = user.login;
          img.src = user.avatar_url;
          link.href = user.html_url;
          link.innerHTML = "GitHub Link";
          container1.appendChild(img);
          container1.appendChild(head);
          container1.appendChild(link);
          container.appendChild(container1);
        });
      } else {
        // If data is not an array, it's a single user profile
        const container1 = document.createElement("div");
        const head = document.createElement("h2");
        const para = document.createElement("p");
        const link = document.createElement("a");
        const img = document.createElement("img");
        head.innerText = data.login;
        img.src = data.avatar_url;
        link.href = data.html_url;
        link.innerHTML = "GitHub Link";
        container1.appendChild(img);
        container1.appendChild(head);
        container1.appendChild(link);
        container.appendChild(container1);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const val = searchbar.value;
  getUser(val);
});

getUser();


//      promise.then((response)=>{
//         return response.json();
//      }).then((data)=>{
//         let res = data
//         console.log(container);
//         console.log(res);
//         res.map((ele) => {
//         const container1 = document.createElement("div")
//         const head = document.createElement("h2")
//         const para = document.createElement("p")
//         const link = document.createElement("a")
//         const img = document.createElement("img")
//         head.innerText = ele.login
//         img.src = ele.avatar_url
//         link.href = ele.url
//         link.innerHTML="Git Hub Link"
//         container1.appendChild(img)
//         container1.appendChild(head)
//         container1.appendChild(link)
//         container.appendChild(container1)

//         })
     
//      })
//     //  console.log(promise)
//      console.log(res);
// }