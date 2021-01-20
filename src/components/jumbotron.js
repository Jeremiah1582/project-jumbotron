import React, { Component } from "react";

import { Jumbotron, Card, CardDeck, Button } from "react-bootstrap";

class MyJumbotron extends Component {
  render() {
    let { author, myImage, cardTitle, textInCard } = this.props;

    return (
      <div>
        <Jumbotron>
          <CardDeck>
            <Card>
              <Card.Img variant="top" src={myImage} fluid />
              <Card.Body>
                <Card.Title>{cardTitle}</Card.Title>
                <Card.Text>
                  {" "}
                  {textInCard} {author}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="primary" style={{ width: 150 }}>
                  more info
                </Button>{" "}
              </Card.Footer>
            </Card>

            <Card>
              <Card.Img variant="top" src={myImage} />
              <Card.Body>
                <Card.Title>{cardTitle}</Card.Title>
                <Card.Text>
                  {textInCard} {author}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="primary" style={{ width: 150 }}>
                  more info
                </Button>{" "}
              </Card.Footer>
            </Card>

            <Card>
              <Card.Img variant="top" src={myImage} />
              <Card.Body>
                <Card.Title>{cardTitle}</Card.Title>
                <Card.Text>
                  {textInCard} {author}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="primary" style={{ width: 150 }}>
                  more info
                </Button>{" "}
              </Card.Footer>
            </Card>
          </CardDeck>
        </Jumbotron>
      </div>
    );
  }
}
export default MyJumbotron;
