import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Card, Col, Row, Spinner } from 'react-bootstrap';
import News from './components/News/News';

// const c = [];
// const number = c.length === 0 ? 5 : 10;


function App() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-09-02&sortBy=publishedAt&apiKey=3d0594702504425b8dc762f72b0e5bff')
    .then(res => res.json())
    .then(data => setNews(data.articles))
  }, [])
  return (
    <div className="App">
      {
        news.length === 0 ?
        <Spinner animation="grow" />
        :
        <Row xs={1} md={3} className="g-4">
         {
           news.map( nw => <News news={nw}></News>)
         }
      </Row>
      }
    </div>
  );
}

export default App;
