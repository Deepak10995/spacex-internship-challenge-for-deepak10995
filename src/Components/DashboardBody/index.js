import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { loadData } from '../../Actions/loadLaunchesActions';
import LaunchDropDown from '../LaunchesDropdown';
import List from './List';

const Index = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadData());
  }, [dispatch]);

  return (
    <div className='container pt-3'>
      <Row>
        <div className='d-flex justify-content-end overflow-visible'>
          <LaunchDropDown />
        </div>
      </Row>
      <Row>
        <Col>
          <List />
        </Col>
      </Row>
    </div>
  );
};

export default Index;
