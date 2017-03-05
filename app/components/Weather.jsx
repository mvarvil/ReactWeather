var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage= require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    getInitialState:  function() {
        return {
            isLoading: false
        }
    },

    handleSearch: function (updates) {
        var city = updates.city;
        var temp = updates.temp;
        debugger;
        console.log("handleNewData city:  ", city);
        this.setState({city:  city, temp: temp});
        var that = this;

        this.setState({isLoading:true});

        openWeatherMap.getTemp(city).then(function(temp) {
            that.setState({city: city, temp: temp });
            that.setState({isLoading:false});
        }, function(errorMessage) {
            alert(errorMessage);
            that.setState({isLoading:false});
        });
    },

    render: function () {
        console.log("state", this.state);
        var {isLoading, city, temp} = this.state

        function renderMessage() {
            if (isLoading) {
              return <h3>Fetching weather...</h3>;  
            } else if (temp && city) {
                return <WeatherMessage temp={temp} city={city} />
            }
        }

        return (
            <div>
                <h3>Weather Component</h3>
                <WeatherForm onNewData={this.handleSearch}/>
                {renderMessage()}
                
            </div>
        );
    }
})

module.exports = Weather;