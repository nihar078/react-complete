import React, { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import "./Profile.css";
import { FaGithub } from "react-icons/fa";
import { PiGlobe } from "react-icons/pi";
import { useSelector } from "react-redux";
// import AuthContext from "../../store/AuthContext";

const Profile = () => {
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  // const authCtx = useContext(AuthContext);
  // const idToken = authCtx.token;
  // console.log(idToken)
  const authRdx = useSelector((state) => state.auth)
  const idToken = useSelector((state) => state.auth.token);
  // console.log(idToken)

  const nameHandler = (event) => {
    setName(event.target.value);
  };

  const photoURLHandler = (event) => {
    setPhotoURL(event.target.value);
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyA_AYVFYK_Apy1tAbRKzko3LPCcqO4Kf6w`,
          {
            method: "POST",
            body: JSON.stringify({ idToken: idToken }),
            headers: {
              "Content-type": "application/json",
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          const user = data.users[0];

          setName(user.displayName);
          setPhotoURL(user.photoUrl);
        } else {
          console.error("Error Edit user details");
        }
      } catch (error) {
        console.error(error);
      }
    };
    if (authRdx.isLoggedIn) {
      fetchUserData();
    }
  }, [authRdx.isLoggedIn, idToken]);
  const submitHandler = async (event) => {
    event.preventDefault();

    const response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:update?key=
        AIzaSyA_AYVFYK_Apy1tAbRKzko3LPCcqO4Kf6w`,
      {
        method: "POST",
        body: JSON.stringify({
          idToken: idToken,
          displayName: name,
          photoUrl: photoURL,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      const data = await response.json();
      console.log(data.error.message);
      alert(data.error.message);
    }
  };

  return (
    <Container className="container" style={{marginLeft: "210px"}}>
      <div className="contact">
        <h1>Contact Details</h1>
        <Button
          variant="outline-danger"
          style={{ padding: "0px 6px", fontSize: "20px" }}
        >
          Cancel
        </Button>
      </div>
      <Form className="form" onSubmit={submitHandler}>
        <div style={{ display: "flex" }}>
          <Form.Group>
            <Form.Label>
              <FaGithub style={{ height: "26px", width: "26px" }} /> Full Name:
            </Form.Label>
            <input type="text" id="name" value={name} onChange={nameHandler} />
          </Form.Group>
          <Form.Group>
            <Form.Label>
              <PiGlobe style={{ height: "26px", width: "26px" }} />
              Profile Photo URL
            </Form.Label>
            <input
              type="text"
              id="photo"
              value={photoURL}
              onChange={photoURLHandler}
            />
          </Form.Group>
        </div>
        <Button type="submit" variant="danger" style={{ margin: "20px" }}>
          Update
        </Button>
      </Form>
      <hr />
    </Container>
  );
};

export default Profile;
