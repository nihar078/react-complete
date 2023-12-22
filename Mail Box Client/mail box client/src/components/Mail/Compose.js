// import React, { useState } from "react";
// import { Button, Form } from "react-bootstrap";
// import { EditorState, convertToRaw } from "draft-js";
// import { Editor } from "react-draft-wysiwyg";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import "./Compose.css"

// const ComposeEmail = ({ onSend }) => {
//   const [editorState, setEditorState] = useState(EditorState.createEmpty());
//   const [receiverEmail, setReceiverEmail] = useState("");
//   const [subject, setSubject] = useState("");

//   const handleSend = () => {
//     // Convert editor content to raw text
//     const emailBody = JSON.stringify(
//       convertToRaw(editorState.getCurrentContent())
//     );

//     // Call the onSend prop to pass the email data to the parent component
//     onSend({
//       receiver: receiverEmail,
//       subject,
//       body: emailBody,
//     });

//     // Clear the form fields after sending
//     setReceiverEmail("");
//     setSubject("");
//     setEditorState(EditorState.createEmpty());
//   };

//   return (
//     <div>
//       <Form>
//         <Form.Group controlId="formReceiverEmail" style={{display: "flex" , position: "relative", alignItems: "center"}}>
//             <p>To</p>
//           <Form.Label style={{border: "none" , position: "absolute", left: "2px"}}></Form.Label>
//           <Form.Control plaintext
//             type="email"
//             placeholder="Recipient"
//             value={receiverEmail}
//             onChange={(e) => setReceiverEmail(e.target.value)}
//             style={{border: "none", position: "absolute"}}
//           />
//         </Form.Group>
//         <hr />
//         <Form.Group controlId="formSubject">
//           {/* <Form.Label>Subject:</Form.Label> */}
//           <Form.Control
//             type="text"
//             placeholder="Subject"
//             style={{border: "none"}}
//             value={subject}
//             onChange={(e) => setSubject(e.target.value)}
//           />
//         </Form.Group>
//         <Form.Group controlId="formEmailBody">
//           <Form.Label>Email Body:</Form.Label>
//           <Editor
//             toolbarClassName="gmail-toolbar"
//             wrapperClassName="gmail-wrapper"
//             editorClassName="gmail-editor"
//             onEditorStateChange={(newEditorState) => setEditorState(newEditorState)}
//             editorState={editorState}
//           />
//         </Form.Group>
//         <Button variant="primary" onClick={handleSend}>
//           Send
//         </Button>
//       </Form>
//     </div>
//   );
// };

// export default ComposeEmail;

// import React, { useState } from "react";
// import { Modal, Button, Form } from "react-bootstrap";
// import { EditorState, convertToRaw } from "draft-js";
// import { Editor } from "react-draft-wysiwyg";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// // import "./ComposeEmail.css"; // Create a separate CSS file for styling if needed

// const ComposeEmail = () => {
//   const [editorState, setEditorState] = useState(EditorState.createEmpty());
//   const [show, setShow] = useState(true);

//   const handleClose = () => {
//     setShow(false);
//   };

//   // Function to handle sending the email (you can customize this part)
//   const sendEmailHandler = () => {
//     const contentState = editorState.getCurrentContent();
//     const emailData = {
//       // Customize this structure based on your needs
//       recipient: "recipient@example.com",
//       subject: "Your Email Subject",
//       content: convertToRaw(contentState),
//     };
//     console.log(emailData);

//     // Perform the necessary actions (e.g., send a post request to Firebase)
//     // ...

//     // Close the compose email modal after sending
//     handleClose();
//   };

//   return (
//     <Modal show={show} onHide={handleClose} style={{ width: "500" }}>
//       <Modal.Header
//         closeButton
//         style={{ fontSize: "xx-small", backgroundColor: "lightblue" }}
//       >
//         <Modal.Title style={{ fontSize: "xx-small" }}>New message</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         {/* Text editor component */}
//         <div>
//           <Form>
//             <Form.Group
//               controlId="formReceiverEmail"
//               style={{
//                 display: "flex",
//                 position: "relative",
//                 alignItems: "center",
//               }}
//             >
//               <p>To</p>
//               <Form.Label
//                 style={{ border: "none", position: "absolute", left: "2px" }}
//               ></Form.Label>
//               <Form.Control
//                 plaintext
//                 type="email"
//                 placeholder="Recipient"
//                 // value={receiverEmail}
//                 // onChange={(e) => setReceiverEmail(e.target.value)}
//                 style={{ border: "none", position: "absolute" }}
//               />
//             </Form.Group>
//             <hr />
//             <Form.Group controlId="formSubject">
//               {/* <Form.Label>Subject:</Form.Label> */}
//               <Form.Control
//                 type="text"
//                 placeholder="Subject"
//                 style={{ border: "none" }}
//                 // value={subject}
//                 // onChange={(e) => setSubject(e.target.value)}
//               />
//             </Form.Group>
//             <Form.Group controlId="formEmailBody">
//               <Form.Label>Email Body:</Form.Label>
//               <Editor
//                 toolbarClassName="gmail-toolbar"
//                 wrapperClassName="gmail-wrapper"
//                 editorClassName="gmail-editor"
//                 onEditorStateChange={(newEditorState) =>
//                   setEditorState(newEditorState)
//                 }
//                 editorState={editorState}
//               />
//             </Form.Group>
//             <Button variant="primary" >
//               Send
//             </Button>
//           </Form>
//         </div>

//         <Editor
//           editorState={editorState}
//           onEditorStateChange={(newState) => setEditorState(newState)}
//         />
//       </Modal.Body>
//       {/* <Modal.Footer> */}
//       <Button variant="secondary" onClick={handleClose}>
//         Close
//       </Button>
//       <Button variant="primary" onClick={sendEmailHandler}>
//         Send
//       </Button>
//       {/* </Modal.Footer> */}
//     </Modal>
//   );
// };

// export default ComposeEmail;

// import React from "react";
// import { Button, Form } from "react-bootstrap";
// import { Editor } from "react-draft-wysiwyg";

// import "./Compose.css"

// const ComposeEmail = ()=>{

//   return (
//     <div className="mainContainer">
//     <div className="container1">
//       <Form >
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <div
//             style={{
//               display: "flex",
//               alignItems: "center",
//               marginBottom: "1rem",

//             }}
//           >
//             <Form.Label>
//               <span className="Space">
//                 <b>To</b>
//               </span>{" "}
//             </Form.Label>
//             <Form.Control type="email"  style={{border: "none"}}/>
//           </div>
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicPassword">
//           <div
//             style={{
//               display: "flex",
//               alignItems: "center",
//             }}
//           >
//             <Form.Label>
//               <span className="Space1">
//                 <b>Subject</b>
//               </span>
//             </Form.Label>
//             <Form.Control type="text"  />
//           </div>
//         </Form.Group>
//         <Form.Group
//           className="mb-3"
//           controlId="exampleForm.ControlTextarea1"
//         >
//           <div className="txtarea">
//             <Form.Control as="textarea" rows={5}  />
//           </div>
//         </Form.Group>
//         <div className="editors">
//           <Editor
//             // editorState={editorState}
//             toolbarClassName="toolbarClassName"
//             wrapperClassName="wrapperClassName"
//             editorClassName="editorClassName"
//             // onEditorStateChange={onEditorStateChange}
//           />
//         </div>
//         <Button variant="primary" type="submit" className="btnSend">
//           Send
//         </Button>
//       </Form>
//     </div>
//     </div>
//   );
// };

// export default ComposeEmail

// import React, { useState } from "react";
// import { Container, Modal, Form, Button } from "react-bootstrap";

// const ComposeEmail = (props) => {
//   // const [showModal, setShowModal] = useState(false);
//   const [to, setTo] = useState("");
//   const [subject, setSubject] = useState("");
//   const [message, setMessage] = useState("");

//   // const handleShowModal = () => setShowModal(true);
//   // const handleCloseModal = () => setShowModal(false);

//   const handleSend = () => {
//     // Handle sending the message (you can implement this part)
//     console.log("Sending message:", { to, subject, message });
//     // handleCloseModal();
//     props.onHide();
//   };
//   console.log("Modal props:", props); // Add a log to check props

//   return (
//     <Container>
//       {/* <Button variant="primary" onClick={handleShowModal}>
//         Compose New Message
//       </Button> */}

//       <Modal show={props.show} onHide={props.onHide}>
//         <Modal.Header closeButton>
//           <Modal.Title>New Message</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group controlId="formTo">
//               <Form.Label>To:</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="Enter recipient email"
//                 value={to}
//                 onChange={(e) => setTo(e.target.value)}
//               />
//             </Form.Group>

//             <Form.Group controlId="formSubject">
//               <Form.Label>Subject:</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter subject"
//                 value={subject}
//                 onChange={(e) => setSubject(e.target.value)}
//               />
//             </Form.Group>

//             <Form.Group controlId="formMessage">
//               <Form.Label>Message:</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 rows={3}
//                 placeholder="Enter your message"
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//               />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={props.onHide}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleSend}>
//             Send
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </Container>
//   );
// };

// export default ComposeEmail;

import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import "./Compose.css";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js"; 
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useSelector } from "react-redux";

const ComposeEmail = (props) => {
  const [toEmail, setToEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [editorState, setEditorState] = useState(
    EditorState.createEmpty());
  const userEmail = useSelector((state) => state.auth.email);
  const fromEmail =  userEmail ? userEmail.replace(/[@.]/g, "") : "";

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
    const emailObj = {
      to: toEmail,
      from: userEmail,
      subject: subject,
      message: editorState.getCurrentContent().getPlainText(),
      time: new Date()
    };
    console.log(emailObj);

    const response = await fetch(`https://react-mail-box-client-edd2a-default-rtdb.firebaseio.com/${fromEmail}.json`, {
      method: "POST",
      body: JSON.stringify(emailObj),
      headers: {
        "Content-Type": "application/json",
      },
    })

    if(response.ok){
      const data = await response.json() 
      console.log(data)
    }
    else{
      const data = await response.json() 
      console.error(data.error.message)
    }



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
            onEditorStateChange={(newEditorState) => setEditorState(newEditorState)}
          />
        </div>
        <Button type="submit" onClick={props.onClose}>Send</Button>
      </Form>
    </Container>
  );
};

export default ComposeEmail;
