import React from "react";
import { Button } from "../index";

function ButtonExample() {
	return (
		<Button
			label={"Show Details"}
			variant="primary"
			onPress={() => {
				alert("Hii");
			}}
		/>
	);
}

export default ButtonExample;
