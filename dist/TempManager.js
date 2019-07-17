
class TempManager {

    constructor() {
        this.cityData = [] 
    }

    getDataFromDB() {
        $.get(`/cities`, function(response){
            this.cityData = response
        })
    }


    async getCityData(cityName) {
    let data = await $.get(`/city/${cityName}`)
    this.cityData.push(data)
    }


    
    saveCity(cityName) {
        City.findOne( { name: cityName } , function (err, city) {
            $.post("/city", city ,function(response){
                console.log(city);
            })
        })
    }


    removeCity(cityName){
        $.ajax({
            url: "/city" + cityName,
            method: "DELETE",
            success: function () {
             }   
        })
    }



}



