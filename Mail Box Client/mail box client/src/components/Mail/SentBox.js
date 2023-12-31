import React, { useEffect } from "react";
import "./SentBox.css";
import { Stack } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { sentboxHandler } from "../../store/mailActions";
import SentEmailBox from "./SentMail/SentEmailBox";
// import SentEmailBox from "./SentEmailBox";

const SentBox = () => {
  // Implement logic to fetch and display sent emails
  const userEmail = useSelector((state) => state.auth.email);
  const fromEmail = userEmail ? userEmail.replace(/[@.]/g, "") : "";
  const sentMails = useSelector((state) => state.mail.sentMails);
  const dispatch = useDispatch();
  //   console.log(sentMails)

  useEffect(() => {
    const fetchSentEmails = () => {
      dispatch(sentboxHandler(fromEmail));
    };
    fetchSentEmails();
  }, [dispatch, fromEmail]);

  const reversedEmails = [...sentMails].reverse();
  //   console.log(reversedEmails)
  return (
    <div className="sent">
      <h1>Sent Box</h1>
      {/* Display sent emails */}
      <Stack>
        <span>
          {reversedEmails.map((email) => (
            <SentEmailBox
              key={email.id}
              id={email.id}
              to={email.to}
              from={email.from}
              subject={email.subject}
              message={email.message}
              time={email.time}
            />
          ))}
        </span>
      </Stack>
    </div>
  );
};

export default SentBox;
