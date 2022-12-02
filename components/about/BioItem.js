import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import SizedImage from "../general/SizedImage";

const BioItem = ({ profile }) => {
    return (
		<li>
			<div>
				<img height="200px" src={profile.url} alt={profile.alt} />
			</div>
			<div dangerouslySetInnerHTML={{__html: profile.text}} />
		</li>
    );
};

export default BioItem;
