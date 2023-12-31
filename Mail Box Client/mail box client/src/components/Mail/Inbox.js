import React, { useEffect } from "react";
import "./Inbox.css";
import { Stack } from "react-bootstrap";
import EmailBox from "./EmailBox";
import { useDispatch, useSelector } from "react-redux";
import { inboxHandler } from "../../store/mailActions";
// import { useInbox } from "../../store/mailHooks";

const Inbox = () => {
  // Implement logic to fetch and display received emails
  // const [receivedEmails, setReceivedEmails] = useState([]);

  const userEmail = useSelector((state) => state.auth.email);
  const fromEmail = userEmail ? userEmail.replace(/[@.]/g, "") : "";
  const receivedEmails = useSelector((state) => state.mail.reciveMails);
  const dispatch = useDispatch();
  //   console.log(receivedEmails)

  useEffect(() => {
    const fetchReceivedEmails = () => {
      // Fetch received emails from Firebase
      //   const response = await fetch(
      //     `https://react-mail-box-client-edd2a-default-rtdb.firebaseio.com/${fromEmail}/inbox.json`
      //   );

      //   if (response.ok) {
      //     const data = await response.json();
      //     // console.log(data);
      //     // console.log("id" ,data.id)
      //     // for(const key in data){
      //     //   setReceivedEmails({id: key, ...data[key]})
      //     // }

      //     // const emails = Object.values(data);
      //     // console.log(emails)
      //     const emails = Object.keys(data).map((key) => ({
      //       id: key,
      //       ...data[key],
      //     }));
      //     setReceivedEmails(emails);
      //     console.log(emails);
      //   } else {
      //     console.error("Failed to fetch received emails");
      //   }

      //redux
      // dispatch(receiveMailHandler(fromEmail))
      dispatch(inboxHandler(fromEmail));
    };

    fetchReceivedEmails();
    const interval = setInterval(() => {
      fetchReceivedEmails();
    }, 2000);
    return () => clearInterval(interval);
  }, [dispatch, fromEmail]); // Make sure to replace userId with the actual user ID

  // use custom Hooks
  // const receivedEmails = useInbox()


  
  // if (!receivedEmails) {
  //   return <div>Loading...</div>; // You can replace this with your loading logic
  // }

  // Reverse the array to display the latest received email at the top
  const reversedEmails = [...receivedEmails].reverse();
  //   console.log(receivedEmails);
  return (
    <div className="inbox">
      <h1>Inbox</h1>
      {/* Display received emails */}
      <Stack>
        <span>
          {reversedEmails.map((email) => (
            <EmailBox
              key={email.id}
              id={email.id}
              title={email.from}
              to={email.to}
              subject={email.subject}
              message={email.message}
              time={email.time}
              isRead={email.isRead}
            />
          ))}
        </span>
        {/* <EmailBox /> */}
      </Stack>
    </div>
  );
};

export default Inbox;
