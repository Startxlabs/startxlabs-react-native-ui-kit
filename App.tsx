import React from "react";
import { StyleSheet, View } from "react-native";
import { ThemeProvider } from "@shopify/restyle";

import theme from "./src/theme";
import { BottomSheetExample } from "./src/examples";

export default function App() {
	return (
		<ThemeProvider {...{ theme }}>
			<View style={styles.container}>
				<BottomSheetExample />
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
