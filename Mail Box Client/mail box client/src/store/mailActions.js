import { mailActions } from "./mailSlice";

export const sentMailHandler = (fromEmail, emailObj) => {
  return async (dispatch) => {
    const response = await fetch(
      `https://react-mail-box-client-edd2a-default-rtdb.firebaseio.com/${fromEmail}/sent.json`,
      {
        method: "POST",
        body: JSON.stringify(emailObj),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      // console.log(data)
      // const createMail = {id: data.name, ...emailObj}
      dispatch(mailActions.setSentMail(data));
    } else {
      const data = await response.json();
      console.error(data.error.message);
    }
  };
};

export const receiveMailHandler = (reciverEmail, emailObj) => {
  const addextraemailobj = { isRead: false, ...emailObj };
  return async (dispatch) => {
    const response = await fetch(
      `https://react-mail-box-client-edd2a-default-rtdb.firebaseio.com/${reciverEmail}/inbox.json`,
      {
        method: "POST",
        body: JSON.stringify(addextraemailobj),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      const createMail = { id: data.name, ...addextraemailobj };
      dispatch(mailActions.setreciveMail(createMail));
    } else {
      console.log("Error receiving data");
    }
  };
};

export const inboxHandler = (fromEmail) => {
  return async (dispatch) => {
    const response = await fetch(
      `https://react-mail-box-client-edd2a-default-rtdb.firebaseio.com/${fromEmail}/inbox.json`
    );

    if (response.ok) {
      const data = await response.json();
      // console.log(data)
      const emailData = [];
      for (const key in data) {
        emailData.push({
          id: key,
          ...data[key],
        });
      }

      // console.log(emailData);
      dispatch(mailActions.setInbox(emailData));
    } else {
      console.error("Failed to fetch received emails");
    }
  };
};

export const markAsReadHandlerBE = (fromEmail, emailId, updated) => {
  return async (dispatch, getState) => {
    try {
      // Make API call to mark email as read
      const response = await fetch(
        `https://react-mail-box-client-edd2a-default-rtdb.firebaseio.com/${fromEmail}/inbox/${emailId}.json`,
        {
          method: "PUT",
          body: JSON.stringify(updated),
          headers: {
            "Content-Type": "application.json",
          },
        }
      );
      if (response.ok) {
        const { mail } = getState();
        const emailIndex = mail.reciveMails.findIndex((email) => email.id === emailId);
        if (emailIndex !== -1) {
            dispatch(
              mailActions.markAsReadSuccess({
                id: emailId,
                update: { isRead: true },
              })
            );
          }
        // dispatch(
        //   mailActions.markAsReadSuccess({ emailId, updated })
        // );
      } else {
        throw new Error("Failed to mark email as read");
      }

      // Dispatch action to update the Redux store
    } catch (error) {
      console.error(error);
      // Handle error if necessary
    }
  };
};

export const deleteMailHandler = (emailId, fromEmail) => {
    return async(dispatch)=>{
        const response = await fetch(`https://react-mail-box-client-edd2a-default-rtdb.firebaseio.com/${fromEmail}/inbox/${emailId}.json`,{
            method: "DELETE",
        })
        if(response.ok){
            dispatch(mailActions.deleteMail(emailId))
            console.log("Expense Delete Succesfully from the server")
        }
        else{
            console.error("something went wrong in delete");
        }
    }
}
