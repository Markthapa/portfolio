import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://github.com/Markthapa/portfolio/blob/master/bitmap.png"
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Hy, Welcome</h1>

            <hr/>

          <p>This is a simple page made using React, a javascript library.<br></br>
        Join me on,</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://np.linkedin.com/in/markus-thapa-39a49b146" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/Markthapa" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>
          {/*Facebook*/}
          <a href="https://www.facebook.com/useles.maan/"rel="noopener noreferrer" target="_blank">
            <i className="fa fa-facebook-square" aria-hidden="true" />
                      </a>

    
          {/* Instagram*/}
          <a href="https://www.instagram.com/sucram420/" rel="noopener noreferrer" target="_blank">
          <i class="fa fa-instagram" aria-hidden="true"/>
            </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
