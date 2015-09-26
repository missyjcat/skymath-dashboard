var React = require('react');

var InputDate = React.createClass({
    render: function() {
        return (
            <fieldset className={this.props.className}>
                <label className={this.props.labelClass}>
                    {this.props.label}
                    <span className="sub-label">{this.props.sublabel}</span>
                </label>
                <input onChange={this.props.onChange} className={this.props.inputClass} 
                    type="text" id={this.props.id} value={this.props.value} />
            </fieldset>
        );
    }
});

module.exports = InputDate;