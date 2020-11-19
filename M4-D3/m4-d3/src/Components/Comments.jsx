import React from "react";

import { Container, ListGroup, Alert, Badge, InputGroup, DropdownButton, Dropdown, FormControl } from "react-bootstrap";

import menu from '../data/menu.json'

class Comments extends React.Component {
    state = {
        selectedDish:null,
      };
      selectNewDish = (dish) => {
        console.log("Dish selected", dish);
        this.setState({ selectedDish:dish });
      };
    render(){
        return (
            <Container>
                <h2>Comments Section</h2>
                <InputGroup>
                    <DropdownButton
                      as={InputGroup.Prepend}
                      id="dropdown-basic-button"
                      className="mb-3"
                      title={this.state.selectedDish}
                    >
                      {menu.map((dish, index) => {
                        return (
                          <Dropdown.Item
                            href="#/action-1"
                            key={`dropdown-category-${index}`}
                            onClick={this.selectNewDish.bind(this, dish)}
                          >
                            {dish.name}
                          </Dropdown.Item>
                        );
                      })}
                    </DropdownButton>
                    <FormControl
                      placeholder="Which plate"
                      aria-label="Search"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                  <Container>
      {this.state.selectedDish ? (
        <ListGroup className="mt-5 mb-5">
          <h2 className="text-center mb-3">{this.state.selectedDish.name}</h2>
          {this.state.selectedDish.comments.map((comment, index) => {
            let variant = "";

            switch (comment.rating) {
              case 1:
                variant = "danger";
                break;
              case 2:
                variant = "warning";
                break;
              case 3:
                variant = "secondary";
                break;
              default:
                variant = "success";
                break;
            }

            return (
              <ListGroup.Item key={`list-item-${index}`}>
                {comment.author}: {comment.comment} |{" "}
                <Badge pill variant={variant}>
                  {comment.rating}
                </Badge>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      ) : (
        <Alert variant="danger" className="mt-5 ">
          No dish selected, please click on a Dish to show the comments
        </Alert>
      )}
    </Container>
            </Container>
          );
    }
  
};
export default Comments