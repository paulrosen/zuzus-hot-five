import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import login from "../../utility/login.js";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase.js";
import FirebaseUploadForm from "../../components/admin/FirebaseUploadForm.js";
import FirebaseUploadEvent from "../../components/admin/FirebaseUploadEvent.js";
import FirestoreListing from "../../components/admin/FirestoreListing.js";
import FirestoreEventsListing from "../../components/admin/FirestoreEventsListing.js";
import { eventConfig, galleryConfig } from "../../siteInfo";
import PageLayout from "../../components/layout/PageLayout.js";
import signUpEmail from "../../utility/signUpEmail.js";
import loginEmail from "../../utility/loginEmail.js";

const Admin = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [updateCounter, setUpdateCounter] = useState(0);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState(null);

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

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    return (
        <PageLayout name="Admin">
            <Container maxWidth="xl">
                <Box sx={{ padding: "4rem 0" }}>
                    {!isLoggedIn && (
                        <Container maxWidth="sm">
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "1em",
                                }}
                            >
                                {/* <Button
                                    variant="contained"
                                    color="secondary"
                                    onClick={handleSignIn}
                                    sx={{ marginBottom: "1rem" }}
                                >
                                    Sign in with google
                                </Button> */}
                                <TextField
                                    label="email"
                                    focused
                                    color="secondary"
                                    value={email}
                                    onChange={handleEmailChange}
                                />
                                <TextField
                                    type="password"
                                    label="password"
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
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        onClick={handleSignUpEmail}
                                        sx={{ marginBottom: "1rem" }}
                                    >
                                        Sign up
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        onClick={handleLoginEmail}
                                        sx={{ marginBottom: "1rem" }}
                                    >
                                        Log in with email
                                    </Button>
                                </Box>
                            </Box>
                        </Container>
                    )}
                    {isAdmin ? (
                        <Box sx={{ marginBottom: "3rem" }}>
                            <Grid container spacing={8}>
                                <Grid item xs={12} md={6}>
                                    <FirebaseUploadForm
                                        config={galleryConfig}
                                        folder="gallery"
                                        updateCounter={updateCounter}
                                        setUpdateCounter={setUpdateCounter}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <FirestoreListing
                                        // category={galleryConfig.category}
                                        folder="gallery"
                                        updateCounter={updateCounter}
                                        setUpdateCounter={setUpdateCounter}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <FirebaseUploadEvent
                                        config={eventConfig}
                                        folder="events"
                                        updateCounter={updateCounter}
                                        setUpdateCounter={setUpdateCounter}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <FirestoreEventsListing
                                        // category={galleryConfig.category}
                                        config={eventConfig}
                                        folder="events"
                                        updateCounter={updateCounter}
                                        setUpdateCounter={setUpdateCounter}
                                    />
                                </Grid>
                            </Grid>
                        </Box>
                    ) : (
                        <Container maxWidth="sm">
                            <Typography>
                                You are not logged in as an administrator.
                                Please contact Dave at hello@fictionalweb.com if
                                you continue to experience difficulties.
                            </Typography>
                        </Container>
                    )}
                </Box>
            </Container>
        </PageLayout>
    );
};

export default Admin;
