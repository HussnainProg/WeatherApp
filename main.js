// Selecting the trigger here
let getCity;
let region;
let country;
let input = document.querySelector("#city");
let btn = document.querySelector("#showBtn");
let mainTemp = document.querySelector("#mainTemp"); 
let relation = document.querySelector("#relation")
let condition  = document.querySelector("#condition");
let feelTemp = document.querySelector("#feelLikeTemp");
let humid = document.querySelector("#humid");
// let divToShow = document.qs
// console.log(relation);


const checkInput = ()=>{

    if(input.value === ""){
        alert("Enter City Namer first");

    }
    else{
        getCity = input.value;
        // console.log(region,country);
        
        
    }
}
btn.addEventListener('click',()=>{
    checkInput();
    getWeatherData(getCity);
    input.value =""; 
    
})
let getWeatherData = async (city)=>{
    let data;
    const url = `http://api.weatherapi.com/v1/current.json?key=d0e7d8f7766e4b6bb1f50236240808&q=${city}`;
    await fetch(url, {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "text/plain"
        }
    })
    
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
            // region = data.location.region;
            country = data.location.country;
            mainTemp.innerText = `${data.current.temp_c} C`
            relation.innerText = `${getCity},${country}`;
            condition.innerText = `${data.current.condition.text}`;
            feelTemp.innerText = `${data.current.feelslike_c} C`;
            humid.innerText = `${data.current.humidity}`;
            document.querySelector("#second").style.visibility = "visible";
            // console.log(data.current.condition.text);

        })
    // console.log(data.location.country);
    


}







// data.current.temp_c  ---> it gives temprature in celcius.
// data.current.temp_c  ---> it gives temprature in farenhite.

// console.log(response.json);