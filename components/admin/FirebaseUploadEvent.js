import { TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { addDoc, collection } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { db } from "../../firebase";
import ButtonWithConfirm from "../general/ButtonWithConfirm";

const FirebaseUploadForm = ({
    config,
    folder,
    updateCounter,
    setUpdateCounter,
}) => {
    const [formData, setFormData] = useState(
        JSON.parse(JSON.stringify(config))
    );
    const [isUploading, setIsUploading] = useState(false);
    const [fileError, setFileError] = useState([]);

    const handleFieldChange = (e, field, index) => {
        const newFieldData = {
            ...formData.fields[index],
            value: e.target.value,
        };

        let newFormDataFields = formData.fields;
        newFormDataFields[index] = newFieldData;
        setFormData({ ...formData, fields: newFormDataFields });
    };

    const handleUpload = async () => {
        const errors = [];
        let date = "";
        formData.fields.forEach(field => {
            if (field.value === "https://")
                field.value = ""
            if (field.required && !field.value)
                errors.push("Please Enter a " + field.name);
            if (field.name === "Date")
                date = field.value
        })
        setFileError(errors)
        if (errors.length > 0) {
            setIsUploading(false);
            return;
        }

        addDoc(collection(db, folder), {
            ...formData,
            dateUploaded: Date.now(),
            startDate: date,
        });

        setFormData(JSON.parse(JSON.stringify(config)));

        setIsUploading(false);
        setUpdateCounter(updateCounter + 1);
    };

    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                backgroundColor: "lightblue",
                padding: "1em",
                borderRadius: "5px",
            }}
        >
            <Typography variant="h3" sx={{ color: "black" }}>
                Add Event
            </Typography>

            {formData.fields.map((field, index) => {
                return (
                    <TextField
                        InputLabelProps={{ shrink: true }}
                        type={field.type}
                        color="secondary"
                        label={field.name}
                        key={index}
                        multiline={field.multiline}
                        rows={field.rows}
                        value={field.value}
                        onChange={(e) => {
                            handleFieldChange(e, field, index);
                        }}
                    />
                );
            })}

            <ul className="admin-error">
                {fileError.map((error) => {
                    return (<li key={error}>{error}</li>)})
                }</ul>
            <ButtonWithConfirm
                handleClick={handleUpload}
                isDisabled={isUploading}
                buttonText="Upload"
                dialogText="Are you sure you want to save this event?"
                notificationText="Saving Event..."
            />
        </Box>
    );
};

export default FirebaseUploadForm;
