var React = require('react');
var Nav = require('Nav');
var Page = require('Page');

var Main = React.createClass({
  render: function () {
    return (
      <div>
        <h2>Main Component</h2>
        <Nav/>
        <Page/>
        
        {this.props.children}
      </div>
    );
  }
});

module.exports = Main;
