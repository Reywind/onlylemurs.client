import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Card from './components/card.js'
import Navbar from './components/navbar.js'
import { Container } from 'react-bootstrap';
import { Component } from 'react';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      lemurs: []
    };
  }
  

  componentDidMount() {
    const fetchData = async () => {
      const response = await fetch(
        'https://localhost:7215/api/Lemur/GetAllLemurs'
      );
      const data = await response.json();
      console.log(data);

      this.setState({lemurs:data});
    };
    
    fetchData();
  }

  render(){
    return (
      <>
      <div  style={{backgroundColor: "#E0FFFF", minHeight:"100vh"}}>
        <Navbar/>
        <div className="Container" >
          <header>
          </header>
          <Container >
            <div className='row d-flex'>
              {this.state.lemurs.map(lemur => (
                <div className='col'>
                  <Card name={lemur.name} specie={lemur.specie} url_foto={lemur.url_foto}/>
                </div>
              ))}
            </div>
          </Container>
        </div>
      </div>
      </>
    );
  }
}

export default App;
