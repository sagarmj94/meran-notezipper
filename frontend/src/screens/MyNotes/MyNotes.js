import React from "react";
import MainScreen from "../../components/MainScreen";
import { Accordion, Badge, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { notes } from "./note";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
const MyNotes = () => {
  let deleteHandle = (id) => {
    if (window.confirm("Are your sure")) {
      console.log("deleted item", id);
    }
  };

  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log("totally custom!")
    );

    return (
      <button
        type="button"
        style={{ backgroundColor: "pink" }}
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
  }

  return (
    <MainScreen title={"WelCome Back Sagar Jadhav"}>
      <Link to="createnote" size="lg">
        <Button style={{ marginLeft: 10, marginBottom: 6 }}>
          Create New Note
        </Button>
      </Link>
      {notes.map((item, index) => {
        return (
          <Accordion defaultActiveKey="0">
            <Card style={{ margin: 10 }}>
              <Card.Header style={{ display: "flex", border: "none" }}>
                <span
                  style={{
                    color: "black",
                    textDecoration: "none",
                    flex: 1,
                    cursor: "pointer",
                    alignSelf: "center",
                    fontSize: 18,
                  }}
                >
                  <CustomToggle eventKey="0">{item.title}</CustomToggle>
                </span>
                <div>
                  <Button href={`/note/${item._id}`}>Edit</Button>
                  <Button
                    variant="danger"
                    className="mx-2"
                    onClick={() => deleteHandle(item._id)}
                  >
                    Delete
                  </Button>
                </div>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <h6>
                    <Badge variant="success" bg="success">
                      Category - {item.category}
                    </Badge>
                  </h6>
                  <blockquote className="blockquote mb-0">
                    <p>{item.content}</p>
                    <footer className="blockquote-footer">
                      Created On - date
                    </footer>
                  </blockquote>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
          // <Accordion>
          //   <Card style={{ margin: 10 }}>
          //     <Card.Header style={{ display: "flex" }}>
          //       <span
          //         style={{
          //           color: "black",
          //           textDecoration: "none",
          //           flex: 1,
          //           cursor: "pointer",
          //           alignSelf: "center",
          //           fontSize: 18,
          //         }}
          //       >
          //         <Accordion.Toggle as={Card.Text} variant="link" eventKey="0">
          //           {item.title}
          //         </Accordion.Toggle>
          //       </span>
          //       <div>
          //         <Button href={`/note/${item._id}`}>Edit</Button>
          //         <Button
          //           variant="danger"
          //           className="mx-2"
          //           onClick={() => deleteHandle(item._id)}
          //         >
          //           Delete
          //         </Button>
          //       </div>
          //     </Card.Header>
          //     <Accordion.Collapse eventKey="0">
          //       <Card.Body>
          //         <h6>
          //           <Badge variant="success" bg="success">
          //             Category - {item.category}
          //           </Badge>
          //         </h6>
          //         <blockquote className="blockquote mb-0">
          //           <p>{item.content}</p>
          //           <footer className="blockquote-footer">
          //             Created On - date
          //           </footer>
          //         </blockquote>
          //       </Card.Body>
          //     </Accordion.Collapse>
          //   </Card>
          // </Accordion>
        );
      })}
    </MainScreen>
  );
};

export default MyNotes;
