import React from "react";
import "./ShowMail.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { deleteMailHandler } from "../../store/mailActions";
import { Button } from "react-bootstrap";

const ShowMail = () => {
  const param = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userEmail = useSelector((state) => state.auth.email);
  const rcvEmail = userEmail ? userEmail.replace(/[@.]/g, "") : "";

  console.log(param);
//   console.log(param.id);
  const location = useLocation();
//   console.log(location.state.email);

  const email  = {
    id: param.id,
    subject: location.state.email.subject,
    from: location.state.email.title,
    to: location.state.email.to,
    message: location.state.email.message,
    time: location.state.email.time,
  }

  // Convert the timestamp to a Date object
  const dateObject = new Date(email.time);

  // Format the time in the desired format
  const formattedTime = dateObject.toLocaleString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  const emailId = param.id

  const remvHandler = () => {
      dispatch(deleteMailHandler(rcvEmail, emailId));
      navigate("/home");
  };

  return (
    <div className="showMail">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button variant="link" onClick={() => navigate("/inbox")} className="backNavigation">
          <MdOutlineKeyboardBackspace />
          {"Back"}
        </Button>
        <Button variant="link" className="delNavigation" onClick={remvHandler}>
          <MdDelete style={{ fontSize: "22px" }} />
          {"Delete"}
        </Button>
      </div>
      <hr style={{ marginLeft: "-20px" }} />
      <h2>{email.subject}</h2>
      <div className="mainMessagebg">
        <div className="messagecontact">
          <span>
            <p>From: {email.from}</p>
            <p>To: {email.to}</p>
          </span>
          <p>{formattedTime}</p>
        </div>
        <p
          style={{
            marginLeft: "19px",
            padding: "5px",
            whiteSpace: "pre-line",
            fontSize: "large",
          }}
        >
          {email.message}
        </p>
        {/* <p
          style={{ marginLeft: "19px", padding: "5px", whiteSpace: "pre-line", fontSize: "large" }}
          dangerouslySetInnerHTML={{ __html: email.message }}
        >
        </p> */}
      </div>
    </div>
  );
};


export default ShowMail;
