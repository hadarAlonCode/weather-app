
const renderer = new Render
const tempmanager = new TempManager


let loadPage = function(){
    let array = tempmanager.getDataFromDB()
    renderer.renderData(array)
}



let handleSearch =  async function(cityName) {
   let data = await $.get(`/city/${cityName}`)
        tempmanager.getCityData(cityName)
        renderer.renderData(data)

    
}

// input click 
$(".cityButton").on("click", function () {
    let cityName = $(".input").val();
    handleSearch(cityName)

  });



//save click

$(".weatherData").on("click", ".saver",  function () {
    // let temperature = $(this).closest(".cityBox").find(".temperature").text()
    let name = $(this).closest(".cityBox").find(".name").text()
    // let updateAt = $(this).closest(".cityBox").find(".updateAt").text()
    // let condition = $(this).closest(".cityBox").find(".condition").text()
    // let conditionPic = $(this).closest(".cityBox").find(".img").attr('src')
    // let data = {name: name , temperature: temperature , updateAt: updateAt, condition: condition, conditionPic: conditionPic}
      

     $.post("/city", data ,function(response){
        console.log(data);
        
     })
 });