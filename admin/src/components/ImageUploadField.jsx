import React, { useRef, useState, useEffect } from "react";
import { Badge, IconButton, Avatar, Box, Typography } from "@mui/material";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";

export function ImageUploadField({ value, onChange, label, readOnly }) {
    if (readOnly || !onChange) {
        console.log("READONLY MODE UNCLOCKED")
        return (
            <>Hi there just read</>
        );
    }
    const fileInputRef = useRef(null);
    const [previewUrl, setPreviewUrl] = useState(null);

    // Sync the preview with the Toolpad value
    useEffect(() => {
        if (!value) {
            setPreviewUrl(null);
            return;
        }

        if (typeof value === "string") {
            setPreviewUrl(value); // It's an existing Cloudinary URL
        } else if (value instanceof File) {
            const objectUrl = URL.createObjectURL(value);
            setPreviewUrl(objectUrl);
            return () => URL.revokeObjectURL(objectUrl);
        }
    }, [value]);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            onChange(file); // Update Toolpad's internal state
        }
    };

    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", my: 2, width: "100vw" }}>
            <Typography variant="caption" sx={{ mb: 1, color: "text.secondary" }}>
                {label.toUpperCase()}
            </Typography>

            <Badge
                overlap="circular"
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                badgeContent={
                    <IconButton
                        onClick={() => fileInputRef.current.click()}
                        sx={{
                            bgcolor: "primary.main",
                            color: "white",
                            border: "2px solid white",
                            width: 40,
                            height: 40,
                            "&:hover": { bgcolor: "primary.dark" },
                        }}
                    >
                        <PhotoCameraIcon fontSize="small" />
                    </IconButton>
                }
            >
                <Avatar
                    src={previewUrl}
                    variant={"rounded"} // Poster looks better square-ish
                    sx={{
                        width: 200,
                        height: 200,
                        border: "3px solid white",
                        boxShadow: 2,
                        bgcolor: "grey.200",
                    }}
                >
                    {!previewUrl && label[0].toUpperCase()}
                </Avatar>
            </Badge>

            {/* Hidden file input */}
            <input type="file" ref={fileInputRef} hidden accept="image/*" onChange={handleFileChange} />
        </Box>
    );
}
