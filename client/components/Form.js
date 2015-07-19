const {Map} = require('immutable');
const React = require('react');

const Input = React.createClass({
  displayName: 'Input Field',

  propTypes: {
    handleChange: React.PropTypes.func.isRequired,
    type: React.PropTypes.string,
    desc: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      type: 'text'
    };
  },

  onChange: function(e) {
    const type = this.props.type;
    let value = e.target.value;
    if (type === 'number') {
      if (!/\d*/.test(value)) {
        return;
      }
      value = Number.parseInt(value);
    }
    return this.props.handleChange(value);
  },

  render: function() {
    const {type, value, desc, name} = this.props
    const desc2 = desc || name

    return (
        <input type={type} value={value} onChange={this.onChange} placeholder={desc2} {...this.props} />
    )
  }
});

const Select = React.createClass({
  onChange: function(e) {
    return this.props.handleChange(e.target.value);
  },
  render: function() {
    const options = Map(this.props.options).map((description, value) =>
      <option value={value} key={value}>{description}</option>
    ).toList()

    return (
      <select value={this.props.value} className="form-control" onChange={this.onChange}>
        {options}
      </select>
    )
  }
});

const toDefaultsObject = function(fields) {
  return Map(fields.map((x) =>
    [x.prop, x["default"]]
  )).toJS();
};

const Form = React.createClass({
  displayName: 'Form',
  propTypes: {
    onSubmit: React.PropTypes.func.isRequired,
    fields: React.PropTypes.array.isRequired,
    go: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      go: 'Go!'
    };
  },

  getInitialState: function() {
    return toDefaultsObject(this.props.fields);
  },

  componentWillReceiveProps: function(newProps) {
    const oldDefaults = this.state;
    const updated = newProps.fields.filter(x => oldDefaults[x.prop] !== x["default"])
    return this.setState(toDefaultsObject(updated));
  },

  keyPress: function(e) {
    if (e.which !== 13) return;
    this.submit();
  },

  submit: function() {
    this.props.onSubmit(this.state);
  },

  changeHandler: function(prop) {
    return function(value) {
      this.setState({[prop]: value});
    }.bind(this);
  },

  render: function() {
    const fields = this.props.fields.map(x =>
      <Field {...x} value={this.state[x.prop]} handleChange={this.changeHandler(x.prop)} key={x.prop} />
    )

    return (
      <div>
        <div onKeyPress={this.keyPress}>
          {fields}
        </div>
        <button className="btn-primary btn btn-lg btn-block" onClick={this.submit}>
          {this.props.go}
        </button>
      </div>
    )
  }
});
let idForLabels = 1;

const Field = React.createClass({
  getInitialState: function() {
    return {
      label: 'label-are-so-lame' + (idForLabels++).toString()
    };
  },

  render: function() {
    const Tag = this.props.type === 'select' ? Select : Input;
    return (
      <div className="form-group">
        <label htmlFor={this.state.label}>{this.props.name}</label>
        <Tag {...this.props} id={this.state.label} className="form-control" />
      </div>
    )
  }
});

module.exports = {
  Form: Form,
  Field: Field
};
