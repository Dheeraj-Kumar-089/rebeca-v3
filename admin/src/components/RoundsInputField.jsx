import { Box, TextField, Button, Typography, Stack, IconButton, Divider } from "@mui/material";
import { Add, Delete, EventRepeat } from "@mui/icons-material";

export function RoundsManager({ value = [], onChange }) {
    // Add a new empty round
    const addRound = () => {
        const newRound = { no: value.length + 1, name: "", venue: "", start: "", end: "", desc: "" };
        onChange([...value, newRound]);
    };

    // Update a specific field in a round
    const updateRound = (index, field, newValue) => {
        const updatedRounds = value.map((round, i) => (i === index ? { ...round, [field]: newValue } : round));
        onChange(updatedRounds);
    };

    // Remove a round
    const removeRound = (index) => {
        const updatedRounds = value.filter((_, i) => i !== index);
        // Re-index round numbers
        const reindexed = updatedRounds.map((r, i) => ({ ...r, no: i + 1 }));
        onChange(reindexed);
    };

    return (
        <Box size={12}>
            <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
                <EventRepeat color="primary" />
                <Typography variant="h6">Event Rounds</Typography>
            </Stack>

            {value?.map((round, index) => (
                <Box key={index} sx={{ mb: 3, p: 2, borderRadius: 1, boxShadow: 1 }}>
                    <Stack direction="row" justifyContent="space-of-between" alignItems="center" sx={{ mb: 1 }}>
                        <Typography variant="subtitle2" color="primary">
                            Round {round.no}
                        </Typography>
                        <IconButton size="small" color="error" onClick={() => removeRound(index)}>
                            <Delete fontSize="small" />
                        </IconButton>
                    </Stack>

                    <Stack spacing={2}>
                        <TextField
                            label="Round Name"
                            fullWidth
                            size="small"
                            value={round.name}
                            onChange={(e) => updateRound(index, "name", e.target.value)}
                        />
                        <Stack direction="row" spacing={2}>
                            <TextField
                                label="Start Time"
                                type="datetime-local"
                                fullWidth
                                size="small"
                                value={round.start ? new Date(round.start).toISOString().slice(0, 16) : ""}
                                onChange={(e) => updateRound(index, "start", e.target.value)}
                            />
                            <TextField
                                label="End Time"
                                type="datetime-local"
                                fullWidth
                                size="small"
                                value={round.end ? new Date(round.end).toISOString().slice(0, 16) : ""}
                                onChange={(e) => updateRound(index, "end", e.target.value)}
                            />
                        </Stack>
                        <TextField
                            label="Venue"
                            fullWidth
                            size="small"
                            value={round.venue}
                            onChange={(e) => updateRound(index, "venue", e.target.value)}
                        />
                    </Stack>
                </Box>
            ))}

            <Button startIcon={<Add />} variant="outlined" fullWidth onClick={addRound} sx={{ mt: 1 }}>
                Add Round
            </Button>
        </Box>
    );
}
