

class TempManager {

    constructor() {
        this.cityData = [] 
    }

    async getDataFromDB() {
        let data = await $.get(`/cities`)
       
         console.log(data);
        
        
            this.cityData = data
    }
    
    
    async getCityData(cityName) {
    let data = await $.get(`/city/${cityName}`)
    this.cityData.push(data)
    }



     saveCity(cityName) {
        for ( let city of this.cityData) {
                if (city.name == cityName ) {
                    city.isSaved = true
                    // console.log(city)
                    $.post("/city", city )
                }
            }
     }



    removeCity(cityName){
        $.ajax({
            url: "/city/" + cityName,
            method: "DELETE",
            success: function () {

             }   
        })
    }



}


