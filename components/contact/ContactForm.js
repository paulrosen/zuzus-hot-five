import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import ContactFormField from "./ContactFormField";

import emailjs from "@emailjs/browser";

const ContactForm = ({ config }) => {
    const [formData, setFormData] = useState(
        JSON.parse(JSON.stringify(config))
    );
    const [isSubmitted, setIsSubmitted] = useState(false);

    // const handleSendEmail = () => {
    //     const templateParams = {
    //         website: formData.website,
    //         name: formData.fields[0].value,
    //         email: formData.fields[1].value,
    //         comment: formData.fields[2].value,
    //     };

    //     emailjs
    //         .send(
    //             "service_tmo76bn",
    //             "template_pfang7n",
    //             templateParams,
    //             "aMDOy4kUud9rd0Yg9"
    //         )
    //         .then(function () {
    //             setIsSubmitted(true);
    //         });
    // };

    return (
        <form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true" action="/thanks">
        <input type="hidden" name="form-name" value="contact"/>
        <input type="hidden" name="bot-field" />
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1em",
            }}
        >
            {!isSubmitted ? (
                <>
                    {formData.fields.map((field, index) => {
                        return (
                            <Box key={index}>
                                <ContactFormField
                                    index={index}
                                    field={field}
                                    formData={formData}
                                    setFormData={setFormData}
                                />
                            </Box>
                        );
                    })}
                    <Button
                        color="secondary"
                        variant="contained"
                        type="submit"
                        // onClick={handleSendEmail}
                    >
                        Submit
                    </Button>
                </>
            ) : (
                <Typography>Thanks! We will be in touch soon!</Typography>
            )}
        </Box>
        </form>
    );
};

export default ContactForm;
