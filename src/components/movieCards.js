import React from "react";
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Item from '@mui/material/ListItem'
import {Typography, Box, Rating} from '@mui/material';

const SmallSquareCard = ({ title, subtitle }) => (
    <Card sx={{ width: '400px', height: '300px', display: 'flex', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.35)',flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '8px', borderRadius: '8px',backgroundColor: '#ECCDE3' }}>
        <CardContent>
            <Typography variant="h6" component="div">
                {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {subtitle}
            </Typography>
        </CardContent>
    </Card>
);



function movieCard() {
    return(
        <Grid container spacing={5} justifyContent="center" paddingBottom={8}>
            <Grid item>
                <SmallSquareCard title="Card 1" subtitle="Subtitle 1" />
                <Rating name="size-small" defaultValue={2} size="small" readOnly={true}/>
            </Grid>

            <Grid item>
                <SmallSquareCard  title="Card 2" subtitle="Subtitle 2" />
                <Rating name="size-small" defaultValue={2} size="small" readOnly={true} />
            </Grid>

            <Grid item>
                <SmallSquareCard title="Card 3" subtitle="Subtitle 3" />
                <Rating name="size-small" defaultValue={2} size="small" readOnly={true} />
            </Grid>
            <Grid item>
                <SmallSquareCard title="Card 1" subtitle="Subtitle 1" />
                <Rating name="size-small" defaultValue={2} size="small" readOnly={true} />
            </Grid>

        </Grid>
    );
} export default movieCard;