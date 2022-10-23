import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import ShoppingForm from './components/ShoppingForm';
import ShoppingList from './components/ShoppingList';
import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom';

function App() {

  const [state, setState] = useState({
    list: []
  })

  const [urlRequest, setUrlRequest] = useState({
    url: '',
    request: {},
    action: ''
  })

  useEffect(() => {

    const fetchData = async () => {
      if (!urlRequest.url) {
        return;
      }
      const response = await fetch(urlRequest.url, urlRequest.request);
      if (!response) {
        console.log('Error fetching!');
        return;
      }
      if (response.ok) {
        switch (urlRequest.action) { // jos joku klikkaa heti perään, action muuttuu, mutta applikaatiorakenne on sellainen että frontin kautta ei pysty aiheuttamaan hallaa
          case 'additem': // huom additem pienellä
            getList();
            return
          case 'getlist':
            let data = await response.json();
            if (data) {
              setState({
                list: data
              })
            }
            return;
          default: // laita aina default, vaikka sen ainoa sisältö olisi tyhjä return
            return;
        }
      } else {
        switch (urlRequest.action) {
          case 'additem':
            console.log('Error in adding new item. Server responded with a status', response.status, response.statusText);
            return;
          case 'getlist':
            console.log('Error in fetching data. SErver responded with a status', response.status, response.statusText);
            return;
          default:
            return;
        }
      }
    }

    fetchData();

  }, [urlRequest])

  const getList = () => {
    setUrlRequest({
      url: '/api/shopping',
      request: {
        method: 'GET',
        headers: { "Content-Type": "application/json" }
      },
      action: 'getlist'
    })
  }

  const addItem = (item) => {
    setUrlRequest({
      url: '/api/shopping',
      request: {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item)
      },
      action: 'additem'
    })
  }

  return (
    <div className="App">
      <NavBar />
      <hr />
      <Routes>
        <Route exact path='/' element={<ShoppingList list={state.list} />} />
        <Route exact path='/form' element={<ShoppingForm addItem={addItem} />} />
      </Routes>
    </div>
  );
}

export default App;
