import { BImg, H1,DIV,H3, NAME } from "./style";
import { useState } from "react";
import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import SearchAppBar from "./SearchBar";
import Box from "@mui/material/Box";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";



export const SearchBackgroundDiv = () => {
  const [htag, setHtag] = useState("Who delivers in your neighborhood?");
  console.log("htag", htag);

  return (

    <Box sx={{ flexGrow: 1 }}>

      <BImg className="SearchBackground">
        <H1>{htag}</H1>
        <DIV> 
        <H3 onClick={() => setHtag("Who delivers in your neighborhood?")}>Delivery</H3>
        <H3 onClick={() => setHtag("Who offers pickup near you?")}>Pickup</H3>
      </DIV>
        <SearchAppBar />
      </BImg>
    </Box>
  );
}
