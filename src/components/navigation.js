import React from "react";
import Box from '@mui/material/Box';
import cloud1Icon from '../images/cloud-1.png';
import cloud2Icon from '../images/cloud-2.png';
import cloud3Icon from '../images/cloud-3.png';
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import searchIcon from "../images/search cloud.png";
import TextField from "@mui/material/TextField";
const SearchBar = () => {
    return (
        <div className="search-container">

            <input type="text" placeholder="Search..."/>
            <img src={searchIcon} alt="Search Icon" className="search-icon"/>
        </div>
    );
};


function navigation() {
    return (
        <Box display="flex" justifyContent='space-between' flexDirection="row" gap={2}
             style={{textAlign: 'right', paddingTop: '5%', paddingRight: '50px'}}>
            <SearchBar/>
            <h1 style={{textAlign: 'center', paddingLeft:'5%'}}> Flick Pick</h1>
            <Box style={{justifyContent: 'flex-end', paddingRight: '15%', paddingTop: '2%'}}>
            <IconButton onClick={() => console.log("ButtonClicked")}>
                <img src={cloud1Icon} alt="Home" style={{width: '80px', height: '80px'}}/>
            </IconButton>
            <IconButton onClick={() => console.log("ButtonClicked")}>
                <img src={cloud2Icon} alt="Lists" style={{width: '80px', height: '80px'}}/>
            </IconButton>
            <IconButton onClick={() => console.log("ButtonClicked")}>
                <img src={cloud3Icon} alt="Generator" style={{width: '80px', height: '80px'}}/>
            </IconButton>
            </Box>
        </Box>
    );
}

export default navigation