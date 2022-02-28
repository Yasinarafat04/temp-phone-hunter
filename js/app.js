const spinner = document.getElementById('spinner');
const searchBox= document.getElementById('search-box'); // search Input;

const searchPhone =()=>{
    spinner.style.display="block";//loading spinner display Block;
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchBox.value}`;
    fetch(url)
    .then(res => res.json())
    .then(data => allPhones(data.data))

}


function allPhones(data) {

    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent ="";


    console.log(data)
    if(data.length === 0){
        const errorMessage = document.getElementById('error-message');
        errorMessage.style.display="flex";
        spinner.style.display = "none";
        document.getElementById('device-name').innerText=searchBox.value; //error Handler 
        }
    else{
        for(phone of data){
            const div = document.createElement('div');
            
            div.classList.add("card");
            div.innerHTML = `
            <img src="${phone.image}" class="card-img-top" alt="...">
                 <div class="card-body">
                   <h4 class="card-title">${phone.phone_name}</h4>
                   <h5 class="card-title">${phone.brand}</h5>
                   
                   <a href="#" class="btn btn-primary">Go somewhere</a>
                 </div>
            `;
             phoneContainer.appendChild(div);
             spinner.style.display = "none";
        document.getElementById('error-message').style.display="none";

    }
   
    
    
    }
     
}



// Main Body Loading Spinner 
                            // Main Body Loading Spinner 


document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        spinner.style.display = "block";
    } else {
        spinner.style.display = "none";
    }
};