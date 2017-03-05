var React = require('react');

var WeatherMessage = React.createClass({

    render: function (pros) {
        var {temp, city} = this.props
        return (
            <div>
                <h4>It is {temp} in {city}</h4>
            </div>
        );
    }
})

module.exports = WeatherMessage;