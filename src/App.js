
 
import { Cards, CountryPicker, Chart } from './Components'
import { fetchData } from './api'
import React from 'react';

class App extends React.Component {
 

  async componentDidMount() {
    const data = await fetchData();

    console.log(data)
  }

  
  render() {
    

    return (
      <div >
        
        <Cards />
        <CountryPicker />
        <Chart  /> 
      </div>
    );
  }
}

export default App;
