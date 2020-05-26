import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://github.com/Markthapa/portfolio/blob/master/bitmap.png"
                alt="avatar"
                style={{height: '400px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Mark Thapa</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>I Like good memes and good Music</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>Nepal,lalitpur</p>
            <h5>Phone</h5>
            <p>9818*****</p>
            <h5>Email</h5>
            <p>markusthapa007@gmail.com.com</p>
            
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2002}
              endYear={2006}
              schoolName="My University"
              schoolDescription=""
               />

               <Education
                 startYear={2007}
                 endYear={2009}
                 schoolName="My 2nd University"
                 schoolDescription=""
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2009}
              endYear={2012}
              jobName="First Job"
              jobDescription=""
              />

              <Experience
                startYear={2012}
                endYear={2016}
                jobName="Second Job"
                jobDescription=""
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={55}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={60}
                  />
                  <Skills
                   skill="React"
                   progress={55}
                    />
                    <Skills
                     skill="Procrastination"
                     progress={99}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
