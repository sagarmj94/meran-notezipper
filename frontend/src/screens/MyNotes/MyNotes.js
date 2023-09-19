import React from "react";
import MainScreen from "../../components/MainScreen";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { notes } from "./note";

const MyNotes = () => {
  return (
    <MainScreen title={"WelCome Back Sagar Jadhav"}>
      <Button>Create New Note</Button>

      {notes.map((item, index) => {
        // console.log(item._id);
        console.log(item.title);
        return (
          <Link
            to="createnote"
            style={{ marginLeft: 10, marginBottom: 6 }}
            size="lg"
            key={item._id}
          >
            <Card style={{ margin: 10 }}>
              <Card.Header style={{ display: "flex" }}>
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
                  {item.title}
                </span>
                <div>
                  <Button>Edit</Button>
                  <Button variant="danger" className="mx-2">
                    Delete
                  </Button>
                </div>
              </Card.Header>
            </Card>
          </Link>
        );
      })}
    </MainScreen>
  );
};

export default MyNotes;
