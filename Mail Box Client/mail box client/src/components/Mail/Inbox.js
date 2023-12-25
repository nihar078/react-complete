import React, { useEffect, useState } from "react";
import "./Inbox.css";
import { Stack } from "react-bootstrap";
import EmailBox from "./EmailBox";
import { useSelector } from "react-redux";

const Inbox = () => {
  // Implement logic to fetch and display received emails
  const [receivedEmails, setReceivedEmails] = useState([]);
  const userEmail = useSelector((state) => state.auth.email);
  const fromEmail = userEmail ? userEmail.replace(/[@.]/g, "") : "";
  useEffect(() => {
    const fetchReceivedEmails = async () => {
      // Fetch received emails from Firebase
      const response = await fetch(
        `https://react-mail-box-client-edd2a-default-rtdb.firebaseio.com/${fromEmail}/inbox.json`
      );

      if (response.ok) {
        const data = await response.json();
        // console.log(data);
        // console.log("id" ,data.id)
        // for(const key in data){
        //   setReceivedEmails({id: key, ...data[key]})
        // }

        // const emails = Object.values(data);
        // console.log(emails)
        const emails = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setReceivedEmails(emails);
        console.log(emails);
      } else {
        console.error("Failed to fetch received emails");
      }
    };

    fetchReceivedEmails();
  }, [fromEmail]); // Make sure to replace userId with the actual user ID

  // console.log(receivedEmails);
  return (
    <div className="inbox">
      <h1>Inbox</h1>
      {/* Display received emails */}
      <Stack>
        <span>
          {receivedEmails.map((email) => (
            <EmailBox
              key={email.id}
              title={email.from}
              subject={email.subject}
              message={email.message}
              time = {email.time}
            />
          ))}
        </span>
        {/* <EmailBox /> */}
      </Stack>
    </div>
  );
};

export default Inbox;
