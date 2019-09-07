import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div className="footer" style={{position: 'fixed', bottom: '0', height: '20x', backgroundColor: '#DDF7EE', width: '100%', textAlign: 'center', overflow: 'hidden'}}>
         <span style={{fontSize: '20px'}}>&copy;</span> IndianTechRishu       
      </div>
    )
  }
}
