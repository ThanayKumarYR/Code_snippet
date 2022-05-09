import React, { Component } from 'react'
export const MContext = React.createContext();
export default class Myprovider extends Component {
    state = {message: "",
            aadio:null}
  render() {
    return (
      <div>
        <MContext.Provider value={
            {   state: this.state,
                setMessage: (value) => this.setState({
                            message: value }),
                setAadio:  (value)=> this.setState({
                            aadio: value})}}>
            {this.props.children}   
        </MContext.Provider>
      </div>
    )
  }
}
  //exporting context object
