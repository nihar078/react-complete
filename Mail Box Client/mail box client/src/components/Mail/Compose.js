import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import "./Compose.css";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useDispatch, useSelector } from "react-redux";
import { receiveMailHandler, sentMailHandler } from "../../store/mailActions";
import { useNavigate } from "react-router-dom";

const ComposeEmail = (props) => {
  const [toEmail, setToEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const userEmail = useSelector((state) => state.auth.email);
  const fromEmail = userEmail ? userEmail.replace(/[@.]/g, "") : "";
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const editorHandler = (newEditorState) => {
  //   setEditorState(newEditorState);
  // };
  const toHandler = (event) => {
    setToEmail(event.target.value);
  };
  const subjectHandler = (event) => {
    setSubject(event.target.value);
  };

  const mailSubmitHandler = async (event) => {
    event.preventDefault();
    const reciverEmail = toEmail.replace(/[@.]/g, "");
    const emailObj = {
      to: toEmail,
      from: userEmail,
      subject: subject,
      message: editorState.getCurrentContent().getPlainText(),
      time: new Date().toISOString(),
    };
    console.log(emailObj);

    // Save the email to the sender's "sent" folder
    // const response = await fetch(`https://react-mailbox-pr-default-rtdb.firebaseio.com/${fromEmail}/sent.json`, {
    //   method: "POST",
    //   body: JSON.stringify(emailObj),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    // if(response.ok){
    //   const data = await response.json()
    //   console.log(data)
    // }
    // else{
    //   const data = await response.json()
    //   console.error(data.error.message)
    // }

    //redux
    dispatch(sentMailHandler(fromEmail, emailObj)).then(() => {
      navigate("/inbox");
    });

    // Save the email to the receiver's "inbox" folder
    // await fetch(
    //   `https://react-mailbox-pr-default-rtdb.firebaseio.com/${reciverEmail}/inbox.json`,
    //   {
    //     method: "POST",
    //     body: JSON.stringify(emailObj),
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   }
    // );
    dispatch(receiveMailHandler(reciverEmail, emailObj))
  };

  return (
    <Container>
      <Form onSubmit={mailSubmitHandler}>
        <div className="format">
          <label>To</label>
          <input
            type="text"
            placeholder="Recipient"
            value={toEmail}
            onChange={toHandler}
          ></input>
        </div>
        <hr />
        <div className="format">
          <input
            type="text"
            placeholder="subjet"
            value={subject}
            onChange={subjectHandler}
          />
        </div>
        <hr />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Editor
            wrapperClassName="editor-wrapper"
            editorClassName="gmail-editor"
            editorState={editorState}
            // onChange={editorHandler}
            onEditorStateChange={(newEditorState) =>
              setEditorState(newEditorState)
            }
          />
        </div>
        <Button type="submit" onClick={props.onClose}>
          Send
        </Button>
      </Form>
    </Container>
  );
};

export default ComposeEmail;
