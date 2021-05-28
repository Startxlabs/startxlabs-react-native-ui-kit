import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ThemeProvider } from "@shopify/restyle";

import theme from "./src/theme";

export default function App() {
	return (
		<ThemeProvider {...{ theme }}>
			<Text>Components</Text>
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
