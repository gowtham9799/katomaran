import React, { useState } from 'react';
import { Container, Row, Col, FormControl } from "react-bootstrap";
// import { FiSearch } from "react-icons/fi";
import { Route, Routes, Link } from 'react-router-dom';
import Textmessage from './Textmessage';

export default function Chatpage() {

  // <----searchbar filter ---->
  const contact = ['Gunasekeran', 'Shanmugapriya', 'gowtham', 'ganeshkumar', 'logeshwaran', 'suprith'];

  const [search, setSearch] = useState('');

  return (
    <Container fluid>
      <Row>
        <Col md={4} className='label1 p-0'>
          <div className='page-left'>

            {/* <FiSearch className='emoji3' /> */}

            <input type="search" className='sdesign' placeholder='search a contect' onChange={e => { setSearch(e.target.value,) }} />

            <ul className='pgdesign2'>
              {
                contact.filter((v) => {
                  if (search !== '') {
                    return v.toLowerCase().includes(search.toLowerCase())
                  }
                  else {
                    return v
                  }
                }).map((v, i) => {
                  return <li key={i + 1}><Link to={`/${v}`}>{v}</Link></li>
                })
              }
            </ul>
          </div>
        </Col>

        {/* <------right hand side-----> */}
        <Col md={8} className='label2 p-0'>
          <div className='page-right' expand='sm'>
            <FormControl className='search2' placeholder='text a message'>

              {/* <------name click to right name view------> */}

            </FormControl>
            <Routes>
              <Route className="g5" path='/ganeshkumar' element={<Textmessage name='ganeshkumar' />} />
              <Route path='/Shanmugapriya' element={<Textmessage name='Shanmugapriya' />} />
              <Route path='/Gunasekeran' element={<Textmessage name='Gunasekeran' />} />
              <Route path='/gowtham' element={<Textmessage name='gowtham' />} />
              <Route path='/logeshwaran' element={<Textmessage name='logeshwaran' />} />
              <Route path='/suprith' element={<Textmessage name='suprith' />} />
              <Route path='/pathmavathi' element={<Textmessage name='pathmavathi' />} />
              <Route path='/duvarakesh' element={<Textmessage name='duvarakesh' />} />
            </Routes>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
