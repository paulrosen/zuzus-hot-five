import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import login from "../../utility/login.js";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../firebase.js";
import FirebaseUploadGallery from "../../components/admin/FirebaseUploadGallery.js";
import FirebaseUploadEvent from "../../components/admin/FirebaseUploadEvent.js";
import FirestoreGalleryListing from "../../components/admin/FirestoreGalleryListing.js";
import FirestoreEventsListing from "../../components/admin/FirestoreEventsListing.js";
import { eventConfig, galleryConfig } from "../../siteInfo";
import signUpEmail from "../../utility/signUpEmail.js";
import loginEmail from "../../utility/loginEmail.js";
import Meta from "../../components/home/Meta";
import { sendPasswordResetEmail } from "firebase/auth";

const Admin = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [updateCounter, setUpdateCounter] = useState(0);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState(null);
    const [isGallery, setIsGallery] = useState(false);
    const [passwordEmailSent, setPasswordEmailSent] = useState(false);
    const [eventFormData, setEventFormData] = useState(
        JSON.parse(JSON.stringify(eventConfig))
    );

    const handleSignIn = async () => {
        const user = await login();
        if (user) {
            const userRef = doc(db, "users", user.uid);
            const task = await getDoc(userRef).then((response) => {
                setIsAdmin(response.data().admin);
                setIsLoggedIn(true);
            });
        }
    };
    const handleSignUpEmail = async () => {
        const user = await signUpEmail(email, password);
        if (user) {
            const userRef = doc(db, "users", user.uid);
            const task = await getDoc(userRef).then((response) => {
                setIsAdmin(response.data().admin);
                setIsLoggedIn(true);
            });
        }
    };
    const handleLoginEmail = async () => {
        const user = await loginEmail(email, password, setLoginError);
        if (user) {
            const userRef = doc(db, "users", user.uid);
            const task = await getDoc(userRef).then((response) => {
                setIsAdmin(response.data().admin);
                setIsLoggedIn(true);
            });
        }
    };

    const handleSendPasswordResetEmail = () => {
        if (!email) {
            console.log("nope");
        }
        sendPasswordResetEmail(auth, email)
            .then(() => {
                setPasswordEmailSent(true);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                // ..
            });
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handleTabChange = (e) => {
        setIsGallery(e.target.value === "gallery");
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    return (
        <Container maxWidth="xl" className="admin-page">
            <Meta />
            <br />
            <br />
            <br />
            <Box>
                {!isLoggedIn && !passwordEmailSent && (
                    <Container maxWidth="sm">
                        <form className="login-form">
                            <TextField
                                InputLabelProps={{ shrink: true }}
                                label="email"
                                autoComplete="username"
                                focused
                                color="secondary"
                                value={email}
                                onChange={handleEmailChange}
                            />
                            <TextField
                                InputLabelProps={{ shrink: true }}
                                type="password"
                                label="password"
                                autoComplete="current-password"
                                focused
                                color="secondary"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                            {loginError && (
                                <Typography variant="caption">
                                    {loginError}
                                </Typography>
                            )}
                            <Box sx={{ display: "flex", gap: "1em" }}>
                                {/* <Button
                                        variant="contained"
                                        color="secondary"
                                        onClick={handleSignUpEmail}
                                        sx={{ marginBottom: "1rem" }}
                                    >
                                        Sign up
                                    </Button> */}
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    onClick={handleLoginEmail}
                                    sx={{ marginBottom: "1rem" }}
                                >
                                    Log in
                                </Button>

                                <Button
                                    color="secondary"
                                    onClick={handleSendPasswordResetEmail}
                                    sx={{ marginBottom: "1rem" }}
                                >
                                    Forgot Password?
                                </Button>
                            </Box>
                        </form>
                    </Container>
                )}
                {passwordEmailSent && (
                    <Typography>Password reset email sent!</Typography>
                )}
                {!isAdmin ? (
                    <Box sx={{ marginBottom: "3rem" }}>
                        <Grid container spacing={8}>
                            <Grid item xs={12} md={6}>
                                <div className="admin-tab-container">
                                    <label className="admin-tab">
                                        <input
                                            type="radio"
                                            name="adminTab"
                                            onClick={handleTabChange}
                                            defaultChecked
                                            value="event"
                                        />
                                        Events
                                    </label>
                                    <label className="admin-tab">
                                        <input
                                            type="radio"
                                            name="adminTab"
                                            onClick={handleTabChange}
                                            value="gallery"
                                        />
                                        Gallery
                                    </label>
                                </div>
                            </Grid>
                        </Grid>
                        {isGallery ? (
                            <Grid container spacing={8}>
                                <Grid item xs={12} md={6}>
                                    <FirebaseUploadGallery
                                        config={galleryConfig}
                                        folder="gallery"
                                        updateCounter={updateCounter}
                                        setUpdateCounter={setUpdateCounter}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <FirestoreGalleryListing
                                        // category={galleryConfig.category}
                                        folder="gallery"
                                        updateCounter={updateCounter}
                                        setUpdateCounter={setUpdateCounter}
                                    />
                                </Grid>
                            </Grid>
                        ) : (
                            <Grid container spacing={8}>
                                <Grid item xs={12} md={6}>
                                    <FirebaseUploadEvent
                                        config={eventConfig}
                                        eventFormData={eventFormData}
                                        setEventFormData={setEventFormData}
                                        folder="events"
                                        updateCounter={updateCounter}
                                        setUpdateCounter={setUpdateCounter}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <FirestoreEventsListing
                                        // category={galleryConfig.category}
                                        config={eventConfig}
                                        setEventFormData={setEventFormData}
                                        folder="events"
                                        updateCounter={updateCounter}
                                        setUpdateCounter={setUpdateCounter}
                                    />
                                </Grid>
                            </Grid>
                        )}
                    </Box>
                ) : (
                    <Container maxWidth="sm">
                        <Typography>You are not logged in.</Typography>
                    </Container>
                )}
            </Box>
        </Container>
    );
};

export default Admin;
