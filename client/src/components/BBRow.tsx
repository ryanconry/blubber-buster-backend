import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { RowProps } from '../interfaces'

export const BBRow: React.FC<RowProps> = ({ children }) => {
  return (
    <Row style={{ margin: "24px 0" }}>
      <Col></Col>
      <Col xs={6}>
        {children}
      </Col>
      <Col></Col>
    </Row>
  )
}