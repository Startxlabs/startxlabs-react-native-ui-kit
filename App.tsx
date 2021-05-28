import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ThemeProvider } from "@shopify/restyle";

import theme from "./src/theme";
import { Button } from "./src";

export default function App() {
	return (
		<ThemeProvider {...{ theme }}>
			<View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
				<Button
					label={"Test"}
					variant="primary"
					onPress={() => {
						alert("In progress");
					}}
				/>
			</View>
		</ThemeProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
