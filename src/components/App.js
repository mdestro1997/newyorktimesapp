import React, { Component } from 'react';

import MostViewed from './displayMostViewed'

class App extends Component{

    render(){

        return( 

            <div>
                <h1 className="container text-center display-4">
                    New York Times Most Popular
                </h1>

                <MostViewed />
                
            </div>
         )
    }
}

export default App;