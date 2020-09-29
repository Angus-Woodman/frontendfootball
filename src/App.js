import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { DragTestContainer, TeamBuilderContainer } from './Containers';
import { NotFound404 } from './Components';


class App extends Component {
    state = {
        players:[],
        teamName:'',
        teams:{},
        captainName:'Jose',

    }
    
    render(){
      return (
        <div className="App">
          <header>
            {/* This way for NavLinks */}
            {/* <NavBar /> */}
            {/* <Title /> */}
          </header>
  
          <main>
  
            <section>
              <Switch>

                <Route exact path="/" render={() => <h1 id="welcome">Welcome {this.state.captainName}</h1>} />
  
                <Route path="/teambuilder" component={TeamBuilderContainer} players={this.state.players} />

                <Route path="/dnd" component={DragTestContainer} />

                <Route component={NotFound404} />
              </Switch>
            </section>
            
          </main>
        </div>
      );
    }
  }
  
  export default App;

