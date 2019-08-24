import React from 'react';
import {Container, TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import PaperCard from '../components/PaperCard'
export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div>
        <Container>
        <Nav tabs>
          <NavItem style={{cursor: 'pointer'}}>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Tab1
            </NavLink>
          </NavItem>
          <NavItem style={{cursor: 'pointer'}}>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Tab2
            </NavLink>
          </NavItem>
          <NavItem style={{cursor: 'pointer'}}>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              Tab3
            </NavLink>
          </NavItem>
          <NavItem style={{cursor: 'pointer'}}>
            <NavLink
              className={classnames({ active: this.state.activeTab === '4' })}
              onClick={() => { this.toggle('4'); }}
            >
              Tab4
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab} className="mt-4">
          <TabPane tabId="1">
            
              <Row>
                {/* <Col xs={{ size: 8, offset: 2 }} md={{ size: 3 ,offset: 0}} >
                  <PaperCard />
                </Col>
                <Col sm="6" md="4">
                  <PaperCard />
                </Col>
                <Col sm="6" md="4">
                  <PaperCard />
                </Col> */}
                Tab1
              </Row>
           
          </TabPane>
          <TabPane tabId="2">
              <Row>
              <Col sm="6" md="4">
                  <PaperCard />
                </Col>
                <Col sm="6" md="4">
                  <PaperCard />
                </Col>
                <Col sm="6" md="4">
                  <PaperCard />
                </Col>
              </Row>
          </TabPane>
          <TabPane tabId="3">
              <Row>
                {/* <Col xs={{ size: 8, offset: 2 }} md={{ size: 3 ,offset: 0}} >
                  <PaperCard />
                </Col>
                <Col sm="6" md="4">
                  <PaperCard />
                </Col>
                <Col sm="6" md="4">
                  <PaperCard />
                </Col> */}
                Tab3
              </Row>
          </TabPane>
          <TabPane tabId="4">
              <Row>
                <Col xs={{ size: 8, offset: 2 }} md={{ size: 3 ,offset: 0}} >
                  <PaperCard />
                </Col>
                <Col sm="6" md="4">
                  <PaperCard />
                </Col>
                <Col sm="6" md="4">
                  <PaperCard />
                </Col>
              </Row>
          </TabPane>
        </TabContent>
        </Container>
      </div>
    );
  }
}