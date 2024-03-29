import { createSlice } from "@reduxjs/toolkit";

const initialMailState = { sentMails: [], reciveMails: [] };
const mailSlice = createSlice({
  name: "mail",
  initialState: initialMailState,
  reducers: {
    setSentMail(state, action) {
      state.sentMails = [...state.sentMails, action.payload];
    },
    setreciveMail(state, action) {
      state.reciveMails = [...state.reciveMails, action.payload];
      // state.reciveMails = action.payload
      //   state.reciveMail = action.payload.map((email) => ({
      //     ...email,
      //     isRead: false,
      //   }));
    },
    setInbox(state, action) {
      state.reciveMails = action.payload;
    },
    setSentbox(state, action) {
      state.sentMails = action.payload;
    },
    markAsReadSuccess(state, action) {
      // const emailId = action.payload;
      // const email = state.reciveMail.find((email) => email.id === emailId)
      // if(email){
      //     email.isRead= true
      // }
      // const emailIndex = state.reciveMails.findIndex((email) => email.id === emailId);
      // if (emailIndex !== -1) {
      //   state.reciveMails[emailIndex].isRead = true;
      // }
      state.reciveMails = state.reciveMails.map((email) =>
        email.id === action.payload.id
          ? { ...email, ...action.payload.update }
          : email
      );
    },
    deleteMail(state, action) {
      state.reciveMails = state.reciveMails.filter(
        (email) => email.id !== action.payload
      );
    },
    deleteSentMail(state, action) {
      state.sentMails = state.sentMails.filter(
        (email) => email.id !== action.payload
      );
    },
  },
});

export const mailActions = mailSlice.actions;
export default mailSlice.reducer;
