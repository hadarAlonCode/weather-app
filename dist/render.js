class Render {

    renderData(data) {
        $('.weatherData').empty()

        const source = $('#weather-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template({data});
        $('.weatherData').append(newHTML);

    }



}