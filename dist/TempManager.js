

class TempManager {

    constructor() {
        this.cityData = [] 
    }

    async getDataFromDB() {
        let data = await $.get(`/cities`)
        let time = data.forEach(a => {a.updateAt});
       
        console.log(time);
        
        
            this.cityData = data
    }
    
    
    async getCityData(cityName) {
    let data = await $.get(`/city/${cityName}`)
    this.cityData.push(data)
    }



     saveCity(cityName) {
        for ( let city of this.cityData) {
                if (city.name == cityName ) {
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



