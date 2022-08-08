import React, { useState } from "react";
import { AddsubTask } from "./AddSubTask";
import { v4 as uuid } from "uuid";
import Accordion from "react-bootstrap/Accordion";
import { Btn, Input, StyledButton } from "./styled";
const Todo = () => {
  const [todo, setTodo] = React.useState("");
  const [list, setList] = React.useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e) => {
    setTodo(e.target.value);
    console.log(e.target.value);
  };

  const addTodo = () => {
    const setdata = {
      mytodo: todo,
      status: false,
      id: uuid(),
      subtask: [],
    };

    setList([...list, setdata]);
    setTodo("");
  };

  const deleteTodo = (idPassed) => {
    const afterDel = list.filter((item) => item.id !== idPassed);
    setList(afterDel);
  };

  const toggleStatus = (idPassed) => {
    const changeStatus = list.map((item) => {
      return item.id === idPassed
        ? { ...item, status: !item.status }
        : { ...item };
    });

    setList(changeStatus);
  };

  return (
    <>
      <h2>Todos</h2>
      <br/>
      <div className="d-flex align-items-center justify-content-center">
        <Input
          placeholder="What to do?"
          value={todo}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <StyledButton onClick={addTodo}>New List</StyledButton>
      </div>

      <br />
      <br />
      <br />
      <div>
        <Accordion defaultActiveKey="0">
          {list.map((item, index) => {
            return (
              <Accordion.Item key={index} eventKey={`${index}`}>
                <Accordion.Header>
                  <Btn className="me-2" onClick={() => toggleStatus(item.id)}>
                    {item.status ? (
                      <i
                        style={{ color: "#28d" }}
                        className="ri-checkbox-fill"
                      ></i>
                    ) : (
                      <i
                        style={{ color: "#28d" }}
                        className="ri-checkbox-blank-line"
                      ></i>
                    )}
                  </Btn>
                 <Btn>{item.mytodo}</Btn> 
                  <Btn className="float-end" onClick={() => deleteTodo(item.id)}>
                    <i style={{color:"#DC143C"}} className="ri-delete-bin-7-fill"></i>
                  </Btn>
                </Accordion.Header>
                <Accordion.Body>
                  <AddsubTask />
                </Accordion.Body>
              </Accordion.Item>
            );
          })}
        </Accordion>
      </div>
    </>
  );
};

export default Todo;
