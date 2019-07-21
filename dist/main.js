
const renderer = new Render
const tempmanager = new TempManager

//refresh
let loadPage = async function(){
    await tempmanager.getDataFromDB()
    if (!tempmanager.cityData.length){ return }  
     renderer.renderData(tempmanager.cityData) 
   
}


// add city from the input val
let handleSearch =  async function(cityName) {
   await tempmanager.getCityData(cityName)
        renderer.renderData(tempmanager.cityData)
}


// input click 
$(".cityButton").on("click", async function () {
    let cityName = $(".input").val();
    await handleSearch(cityName)

  });



//save click

$(".weatherData").on("click", ".saver",  function () {
    let cityName = $(this).closest(".cityBox").find(".name").text()
    tempmanager.saveCity(cityName)
    $(this).closest(".cityBox").find( ".saveDelete" ).append( "<div class='remove'><i class='fas fa-heart'></i></div>" );
    $(this).closest(".cityBox").find( ".saver" ).remove()
    // loadPage()


 });


 //delete from DB
 $(".weatherData").on("click", ".remove",  function () {
    let cityName = $(this).closest(".cityBox").find(".name").text()
    tempmanager.removeCity(cityName)
    $(this).closest(".cityBox").find( ".saveDelete" ).append( "<div class='saver'><i class='far fa-heart'></i></div>" );
    $(this).closest(".cityBox").find( ".remove" ).remove()

})

    $(".weatherData").on("click", ".trash",  function () {
        // loadPage()
        $(this).closest(".cityBox").remove()
        
 })
 


//  $(".weatherData").on("click", ".updateAt",  async function () {
//     let cityName = $(this).closest(".cityBox").find(".name").text()
//     await tempmanager.updateCity(cityName)
//     renderer.renderData(tempmanager.cityData)
//  });



 //click with enter
 var input = document.getElementById("myInput");
 input.addEventListener("keyup", function(event) {
   if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("myBtn").click();
   }
 });







 loadPage()