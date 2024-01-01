import React from "react";
import "./SentEmailBox.css";
import { GrCheckbox } from "react-icons/gr";
import { CiStar } from "react-icons/ci";
// import { FaCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { deleteSentMailHandler } from "../../../store/mailActions";

const SentEmailBox = (props) => {
  const dispatch = useDispatch();
  const userEmail = useSelector((state) => state.auth.email);
  const fromEmail = userEmail ? userEmail.replace(/[@.]/g, "") : "";
  const time = props.time;

  const dateObject = new Date(time);
  //   console.log(props);

  const options = {
    hour: "numeric",
    minute: "numeric",
    // second: "numeric",
    hour12: true, // Use 12-hour format
  };

  const formattedTime = dateObject.toLocaleTimeString("en-US", options);

  const removeSentHandler = async () => {
    await dispatch(deleteSentMailHandler(props.id, fromEmail));
  };

  return (
    <div style={{ position: "relative", alignItems: "center" }}>
      <Link
        to={`/sentmail/${props.id}`}
        state={{ email: props }}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div className="emailRow">
          <div className="emailRow_options">
            <GrCheckbox style={{ marginLeft: "2px", marginRight: "6px" }} />
            <CiStar />
          </div>
          {/* <div className="emailRead">{!props.isRead && <FaCircle />}</div> */}
          <p>{props.to}</p>
          <div className="emilRow_message">
            <span>{props.subject}</span>
            <p dangerouslySetInnerHTML={{ __html: props.message }}></p>
          </div>

          <p style={{ position: "absolute", right: "0px" }} className="time">
            {formattedTime}
          </p>
          <Link
            // role="link"
            style={{
              color: "red",
              position: "absolute",
              right: "1px",
              fontSize: "30px",
            }}
            className="deleteLink"
            onClick={removeSentHandler}
          >
            <MdDelete />
          </Link>
        </div>
      </Link>
    </div>
  );
};

export default SentEmailBox;
