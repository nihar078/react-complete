import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData =  () => {
      const response =  fetch(url);
      if (response.ok) {
        const result =  response.json();
        setData(result);
      } else {
        console.error("Failed to fetch");
      }
    };
    fetchData();
  }, [url]);

  return [data];
};

export default useFetch;

// import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { mailActions } from "./mailSlice";

// const useFetch = (url) => {
//   const dispatch = useDispatch();
//   const userEmail = useSelector((state) => state.auth.email);
//   const fromEmail = userEmail ? userEmail.replace(/[@.]/g, "") : "";

//   useEffect(
//     (url) => {
//       const fetchData = () => {
//         const response = fetch(url);
//         if (response.ok) {
//           const result = response.json();
//           const emailData = [];
//           for (const key in result) {
//             emailData.push({
//               id: key,
//               ...result[key],
//             });
//           }
//           dispatch(mailActions.setSentbox(emailData));
//         } else {
//           console.error("Failed to fetch");
//         }
//       };
//       fetchData();
//     },
//     [url]
//   );


// };

// export default useFetch;

// export const sentboxHandler = (fromEmail) => {
//   return async (dispatch) => {
//     const response = await fetch(
//       `https://react-mail-box-client-edd2a-default-rtdb.firebaseio.com/${fromEmail}/sent.json`
//     );

//     if (response.ok) {
//       const data = await response.json();
//       // console.log(data)
//       const emailData = [];
//       for (const key in data) {
//         emailData.push({
//           id: key,
//           ...data[key],
//         });
//       }

//       // console.log(emailData);
//       dispatch(mailActions.setSentbox(emailData));
//     } else {
//       console.error("Failed to fetch sent emails");
//     }
//   };
// };

// import { useState, useEffect } from "react";

// const useFetch = (url) => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(url);

//         if (response.ok) {
//           const result = await response.json();
//           setData(result);
//         } else {
//           console.error("Failed to fetch");
//         }
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, [url]);

//   return [data];
// };

// export default useFetch;

// import { useState, useEffect } from "react";

// const useFetch = (url) => {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(url);

//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const contentType = response.headers.get("content-type");
//         if (contentType && contentType.includes("application/json")) {
//           const result = await response.json();
//           setData(result);
//         } else {
//           throw new Error("Response is not in JSON format");
//         }
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setError(error.message);
//       }
//     };

//     fetchData();
//   }, [url]);

//   return [data, error];
// };

// export default useFetch;
