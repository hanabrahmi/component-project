import logo from './logo.svg';
import './App.css';
import './style.css';
import ProfilePhoto from './Components/Profile/ProfilePhoto';
import FullName from './Components/Profile/FullName';
import Adresse from './Components/Profile/Adresse';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
function App() {
  return (
    <div className="App">
 
            <h1 className='card-1'>My Profile</h1>
     
      <Card border="info" style={{ width: '18rem', height: '25rem'}} className='card'>
      <Card.Img variant="top" /> <ProfilePhoto  />
      <Card.Body>
        
        <Card.Text >
        <FullName />
      <Adresse />
        </Card.Text>
        <Button variant="info">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default App;
