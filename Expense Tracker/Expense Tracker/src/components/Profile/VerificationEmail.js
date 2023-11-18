import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import AuthContext from "../../store/AuthContext";

const VerificationEmail = () => {
  const authCtx = useContext(AuthContext);

  const verifyEmailHandler = async () => {
    const response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyA_AYVFYK_Apy1tAbRKzko3LPCcqO4Kf6w`,
      {
        method: "POST",
        body: JSON.stringify({
          requestType: "VERIFY_EMAIL",
          idToken: authCtx.token,
        }),
        headers: { "Content-Type": "application/json" },
      }
    );
    if(response.ok){
        const data = await response.json()
        console.log(data)
    }
    else{
        const data = await response.json()
        console.error(data.error.message)
        alert(data.error.message)
    }
  };
  return (
    <div>
      <Button variant="outline-primary" onClick={verifyEmailHandler}>Verify Your Email</Button>
    </div>
  );
};

export default VerificationEmail;
