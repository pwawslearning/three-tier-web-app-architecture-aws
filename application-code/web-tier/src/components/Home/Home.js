
    import React, {Component} from 'react';
    import architecture from '../../assets/homepage.png'

    class Home extends Component {
        render () {
        return (
            <div>
            <h1 style={{color:"white"}}>3Tier Web Application Architecture on AWS</h1>
            <img src={architecture} alt="3T Web App Architecture" style={{height:400,width:825}} />
          </div>
        );
      }
    }

    export default Home;