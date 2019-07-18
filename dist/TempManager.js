

class TempManager {

    constructor() {
        this.cityData = [] 
    }

     getDataFromDB() {
     $.get(`/cities`, (response) => {
            this.cityData = response
    })
    }   
    


    async getCityData(cityName) {
    let data = await $.get(`/city/${cityName}`)
    this.cityData.push(data)
    }



   saveCity(cityName) {
   for (city of this.cityData) {
       if (city.name == cityName ) {
            $.post("/city", city ,function(response){
                console.log(city);
            })
        }
    }}



    removeCity(cityName){
        $.ajax({
            url: "/city" + cityName,
            method: "DELETE",
            success: function () {
             }   
        })
    }



}



