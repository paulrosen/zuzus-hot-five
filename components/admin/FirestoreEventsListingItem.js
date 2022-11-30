import { Button, Box, IconButton, TextField, Typography } from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { deleteObject, ref } from "firebase/storage";
import { db, storage } from "../../firebase";
import { deleteDoc, doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import ButtonWithConfirm from "../general/ButtonWithConfirm";
import theme from "../../styles/themes/theme";

const FirestoreListingItem = ({
    folder,
    event,
    updateCounter,
    setUpdateCounter,
    setShownEvents,
}) => {
    const [formData, setFormData] = useState(
        JSON.parse(JSON.stringify(event.data()))
    );
    const [isUpdating, setIsUpdating] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpand = () => {
        setIsExpanded(true);
    };

    const handleCollapse = () => {
        setIsExpanded(false);
    };

    const handleDelete = async () => {
        setIsUpdating(true);
        await deleteDoc(doc(db, folder, event.id));
        setUpdateCounter(updateCounter + 1);
        setShownEvents([]);
        setIsUpdating(false);
    };

    const handleUpdate = async () => {
        setIsUpdating(true);
        const date = event.data().fields.filter(field => {
            return field.name === "Date"
        })
        // TODO-PER: need to set event.data().startDate somehow to date.value
        const docRef = doc(db, folder, event.id);
        await setDoc(docRef, formData).then(() => {
            setIsExpanded(false);
            setIsUpdating(false);
        });
    };

    const handleDuplicate = () => {
        const fields = event.data().fields
        console.log(fields)
        // TODO-PER: how do I set these values on the "add event" form?
    };

    const handleFieldChange = (e, field, index) => {
        const newFieldData = {
            ...formData.fields[index],
            value: e.target.value,
        };
        let newFormDataFields = formData.fields;
        newFormDataFields[index] = newFieldData;
        setFormData({ ...formData, fields: newFormDataFields });
    };

    return (
        <Box>
            {!isExpanded ? (
                <Box
                    sx={{
                        border: theme.border,
                        padding: ".5em",
                        margin: ".5em 0",
                        cursor: "pointer",
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                    onClick={handleExpand}
                >
                    <div>
                    <Typography>{event.data().fields[0].value} <b>{event.data().fields[4].value}</b></Typography>
                    <Typography>{event.data().fields[2].value}</Typography>
                    </div>
                    <ExpandMoreIcon />
                </Box>
            ) : (
                <Box
                    sx={{
                        border: theme.border,
                        padding: ".5em",
                        margin: ".5em 0",
                        display: "flex",
                        flexDirection: "column",
                        gap: ".5em",
                    }}
                >
                    {event &&
                        formData.fields.map((field, index) => {
                            return (
                                <TextField
                                    InputLabelProps={{ shrink: true }}
                                    fullWidth
                                    type={field.type}
                                    color="secondary"
                                    label={field.name}
                                    key={index}
                                    multiline={true}
                                    rows={field.rows}
                                    value={field.value}
                                    onChange={(e) => {
                                        handleFieldChange(e, field, index);
                                    }}
                                />
                            );
                        })}
                    {/* {image && folder === "gallery" && (
                        <FirebaseCategorySelect
                            formData={formData}
                            setFormData={setFormData}
                            galleryCategories={galleryCategories}
                        />
                    )} */}
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginTop: ".5em",
                        }}
                    >
                        <Box sx={{ display: "flex", gap: "1em" }}>
                            <Button
                                variant="contained"
                                onClick={handleDuplicate}
                            >Duplicate</Button>
                            <Button
                                variant="contained"
                                onClick={handleUpdate}
                                disabled={isUpdating}
                            >Update</Button>
                            <ButtonWithConfirm
                                handleClick={handleDelete}
                                dialogText="Are you sure you want to delete this item permanently?"
                                buttonText="delete"
                                notificationText="Item Deleted!"
                                isDisabled={isUpdating}
                            />
                        </Box>
                        <IconButton
                            variant="contained"
                            onClick={handleCollapse}
                        >
                            <ExpandLessIcon />
                        </IconButton>
                    </Box>
                </Box>
            )}
        </Box>
    );
};

export default FirestoreListingItem;
