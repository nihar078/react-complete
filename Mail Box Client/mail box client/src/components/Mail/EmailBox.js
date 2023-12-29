import React from "react";
import "./EmailBox.css";
import { GrCheckbox } from "react-icons/gr";
import { CiStar } from "react-icons/ci";
import { FaCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { mailActions } from "../../store/mailSlice";
import { markAsReadHandlerBE } from "../../store/mailActions";
// import ShowMail from "./ShowMail";
// import { useNavigate } from "react-router-dom";

const EmailBox = (props) => {
  //   const [showDetail, setShowDetail] = useState(false);
  const dispatch = useDispatch();
  const userEmail = useSelector((state) => state.auth.email);
  const fromEmail = userEmail ? userEmail.replace(/[@.]/g, "") : "";
  const time = props.time;
  // console.log(time);
  //   const navigate = useNavigate();

  const dateObject = new Date(time);
  //   console.log(props);

  const options = {
    hour: "numeric",
    minute: "numeric",
    // second: "numeric",
    hour12: true, // Use 12-hour format
  };

  const formattedTime = dateObject.toLocaleTimeString("en-US", options);
  //   console.log(formattedTime);

  // const clickHandler = () => {
  //   // navigate(`/email/${props.id}`);
  //   setShowDetail(true);
  // };

  const markAsReadHandler = () => {
    // if(!props.isRead){
    // Dispatch an action to mark the email as read
    //   dispatch(mailActions.markAsRead(props.id))
    //   console.log(props.isRead)
    const updateemail = {
      id: props.id,
      from: props.title,
      to: props.to,
      subject: props.subject,
      message: props.message,
      time: props.time,
      isRead: true,
    };
    // if (!props.isRead) {
    //   props.isRead = true;
    dispatch(markAsReadHandlerBE(fromEmail, props.id, updateemail));
    // }
    //   console.log(props.id)
    // console.log(fromEmail)
    // }
  };

  return (
    <div>
      <Link
        to={`/email/${props.id}`}
        state={{ email: props }}
        style={{ textDecoration: "none", color: "inherit" }}
        onClick={markAsReadHandler}
      >
        <div className="emailRow">
          <div className="emailRow_options">
            <GrCheckbox style={{ marginLeft: "2px", marginRight: "6px" }} />
            <CiStar />
          </div>
          <div className="emailRead">{!props.isRead && <FaCircle />}</div>
          {!props.isRead ? <h5>{props.title}</h5> : <p>{props.title}</p>}
          <div className="emilRow_message">
            {!props.isRead ? (
              <h6 style={{ marginRight: "7px" }}>{props.subject}</h6>
            ) : (
              <span style={{ marginRight: "15px" }}>{props.subject}</span>
            )}
            {/* <p>fiok</p> */}
              <p dangerouslySetInnerHTML={{ __html: props.message }}></p>
          </div>

          <p style={{ position: "absolute", right: "0px" }}>{formattedTime}</p>
          {/* {showDetail && <ShowMail email={props} />} */}
        </div>
      </Link>
    </div>
  );
};

export default EmailBox;
