import React from "react";
import { v4 as uuid } from "uuid";
import { Btn, Input, StyledButton, SubTasks } from "./styled";

const AddsubTask = () => {
  const [subTask, setSubTask] = React.useState("");
  const [subList, setSubList] = React.useState([]);

  const AddSubTask = () => {
    const subData = {
      mySubtodo: subTask,
      status: false,
      id: uuid(),
    };
    setSubList([...subList, subData]);
  };

  const subDelete = (id) => {
    const afterDeleteSub = subList.filter((item) => item.id !== id);

    setSubList(afterDeleteSub);
  };

  const handleStatus = (id) => {
    const changeStatus = subList.map((item) =>
      item.id === id ? { ...item, status: !item.status } : { ...item }
    );

    setSubList(changeStatus);
  };
  return (
    <div>
      <div className="d-flex align-items-center justify-content-center">
        <Input
          placeholder="Add Sub Task"
          value={subTask}
          onChange={(e) => setSubTask(e.target.value)}
        />

        <StyledButton onClick={AddSubTask}>Add Sub Task</StyledButton>
      </div>

      <div>
        {subList?.map((item, index) => {
          return (
            <>
              <br />
              <SubTasks
                key={index}
                className="d-flex justify-content-between align-items-center"
              >
                <Btn className="me-2" onClick={() => handleStatus(item.id)}>
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
                <div className="me-5">{item.mySubtodo}</div>
                <Btn className="me-2 btn" onClick={(e) => subDelete(item.id)}>
                  <i style={{color:"#DC143C"}} class="ri-delete-bin-7-fill"></i>
                </Btn>
              </SubTasks>
            </>
          );
        })}
      </div>
    </div>
  );
};
export { AddsubTask };
