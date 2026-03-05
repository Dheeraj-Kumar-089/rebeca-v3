import React, { useEffect, useState } from "react";
import { Autocomplete, TextField, Chip, CircularProgress, Avatar, Box, Paper, Typography } from "@mui/material";
import axios from "axios";
import { getAllAdmins } from "../utils/api";

export default function CoordinatorSelector({ value = [], onChange }) {
    const [admins, setAdmins] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchAdmins = async () => {
            setLoading(true);
            try {
                // Replace with your actual endpoint for fetching all signed-up admins
                const response = await getAllAdmins();
                console.log("Fetched admins:", response.data.admins);
                setAdmins(response.data.admins);
            } catch (err) {
                console.error("Failed to load admins:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchAdmins();
    }, []);

    return (
        <Autocomplete
            fullWidth
            multiple
            options={admins} // Or admin._id
            getOptionLabel={(admin) => admin.email}
            renderOption={(props, admin) => {
                return (
                    <Box {...props}>
                        <Avatar src={admin.image} alt={admin.name} sx={{ width: 32, height: 32, mr: 1 }} />
                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                            {admin.name}
                            <Typography variant="caption" color="textSecondary">
                                {admin.email}
                            </Typography>
                        </Box>
                    </Box>
                );
            }}
            value={value}
            loading={loading}
            onChange={(event, newValue) => {
                onChange(newValue); // Toolpad handles the state update
            }}
            renderInput={(params) => (
                <TextField {...params} label="Select Coordinators by email" placeholder="Search by email..." />
            )}
        />
    );
}
