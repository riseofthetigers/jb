import React from 'react'

export const ApplyContainer = React.createClass({
  render() {
    const {title, children} = this.props
    return (
      <div className="form-group">
        <h5 htmlFor="job-email">{title}</h5>
        {children}
      </div>
    )
  }
})

export const ApplyInput = React.createClass({
  onChange(e) {
    this.props.onChange(e.target.value)
  },

  render() {
    const {type, value, placeholder} = this.props
    return  <input type={type || 'text'} value={value} className="form-control"
                   placeholder={placeholder} onChange={this.onChange} />
  }
})

export const ApplyField = React.createClass({
  onChange(e) {
    this.props.onChange(e.target.value)
  },

  render() {
    const {onChange, type, value, placeholder, title} = this.props
    return (
      <ApplyContainer title={title}>
        <ApplyInput type={type} value={value} placeholder={placeholder} onChange={onChange} />
      </ApplyContainer>
    )
  }
})

export const ApplyRadio = React.createClass({
  onChange(e) {
    const {checked, value} = e.target
    if(!checked) return
    this.props.onChange(value === "true" ? true : false)
  },

  render() {
    const {yes, no, value} = this.props
    const isTrue = value // Nothing has to be done as the value already is a boolean

    return (
      <div>
        <label><input type="radio"  value={true} checked={isTrue} onChange={this.onChange} /> {yes}</label>
        <br />
        <label><input type="radio" value={false} checked={!isTrue} onChange={this.onChange} /> {no}</label>
      </div>
    )
  }
})
