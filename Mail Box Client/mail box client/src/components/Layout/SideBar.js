import React, { useState } from "react";
import { Stack, Button, Modal } from "react-bootstrap";
import { MdOutlineEdit } from "react-icons/md";
import { BiImageAlt } from "react-icons/bi";
import { BiSend } from "react-icons/bi";
import "./SideBar.css";
import ComposeEmail from "../Mail/Compose";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import ComposeEmail from "../Mail/Compose";

const SideBar = () => {
  // const [showComposeEmail, setShowComposeEmail] = useState(false);

  // const handleComposeEmailOpen = () => {
  //   setShowComposeEmail(true);
  // };

  // const handleComposeEmailClose = () => {
  //   setShowComposeEmail(false);
  // };
  // const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const recevMail = useSelector((state) => state.mail.reciveMails)
  let totalUnreadMessage = ""
  recevMail.forEach((email) => {
    if(!email.isRead){
        totalUnreadMessage ++
    }
  })



  const showComposeHandel = () => {
    setShowModal(true);
  };
  const closeComposeHandel = () => {
    // console.log("Closing compose email modal");
    setShowModal(false);
  };
  return (

      <Stack direction="vertical" style={{
        backgroundColor: "rgb(247, 247, 247)",
        width: "180px",
        marginTop: "-16px",
        height: "625px",
        display: "flex",
      flexDirection: "column",
    //   justifyContent: "space-between",
      }}>
        {/* <div> */}
        <div>
          <Button
            variant="secondary"
            style={{
              borderRadius: "2rem",
              fontSize: "20px",
              marginBottom: "0.5rem",
              marginTop: "15px",
              width: "160px"
            }}
            onClick={showComposeHandel}
          >
            {<MdOutlineEdit style={{ marginRight: "0.5rem" }} />}
            {"Compose"}
          </Button>
          <Modal show={showModal} onHide={closeComposeHandel} size="xl">
            <Modal.Header closeButton style={{ fontSize: "xx-small" }} />
            <Modal.Body>
              <ComposeEmail onClose={closeComposeHandel} />
            </Modal.Body>
          </Modal>
        </div>
        <div>
          <Link to="/inbox " >
            <Button
              variant="light"
              style={{
                borderRadius: "2rem",
                fontSize: "20px",
                fontWeight: "600",
                width: "150px",
                marginBottom: "0.1rem",
                // display: "flex"
              }}
            >
              {<BiImageAlt style={{ marginRight: "1rem" }} />}
              {"Inbox"} {totalUnreadMessage}
            </Button>
          </Link>
        </div>
        <div>
          <Button
            variant="light"
            style={{
              borderRadius: "2rem",
              fontSize: "20px",
              fontWeight: "600",
              width: "125px",
            }}
          >
            {<BiSend style={{ marginRight: "1rem" }} />}
            {"Sent"}
          </Button>
        </div>
        {/* </div> */}
      </Stack>
  );
};

export default SideBar;

/* <Button
          variant="secondary"
          style={{
            borderRadius: "2rem",
            fontSize: "20px",
            marginBottom: "0.5rem",
          }}
          onClick={showComposeHandel}
          // onClick={handleComposeEmailOpen}
        >
          {<MdOutlineEdit style={{ marginRight: "0.5rem" }} />}
          {"Compose"}
          <ComposeEmail show={showModal} onHide={closeComposeHandel} />
        </Button> */
