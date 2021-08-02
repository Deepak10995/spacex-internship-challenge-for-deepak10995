import React from 'react';
import { Col, Row } from 'react-bootstrap';
import LaunchDropDown from '../LaunchesDropdown';

const columns = [
  {
    Header: 'No.',
    accessor: 'index',
  },
  {
    Header: 'Launched',
    accessor: 'age',
  },
];

function Index() {
  return (
    <div className='container pt-3'>
      <Row>
        <div className='d-flex justify-content-end overflow-visible'>
          <LaunchDropDown />
        </div>
      </Row>
      <Row>
        <Col></Col>
      </Row>
    </div>
  );
}

export default Index;
