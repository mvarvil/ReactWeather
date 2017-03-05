var React = require('react');

var WeatherForm = React.createClass({

    onFormSubmit: function (e) {
        e.preventDefault();
        console.log(this.refs);

        var updates = {};

        var city = this.refs.city.value;

        if (city.length > 0) {
            this.refs.city.value = '';
            updates.city = city;
            this
                .props
                .onNewData(updates);
        }

    },

    render: function () {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div><input type="text" ref="city"/></div>
                    <div><input type="submit" value='Get Weather'/></div>
                </form>
            </div>
        );
    }
})

module.exports = WeatherForm;