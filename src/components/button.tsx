import { useTheme } from "@shopify/restyle";
import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

import { Theme } from "../theme";

interface ButtonProps {
	variant: "primary" | "secondary" | "transparent";
	label: string;
	onPress: () => void;
}

const Button = ({ variant, label, onPress }: ButtonProps) => {
	const theme = useTheme<Theme>();
	const backgroundColor =
		variant === "primary"
			? theme.colors.primary
			: variant === "transparent"
			? "transparent"
			: theme.colors.secondary;

	return (
		<TouchableOpacity style={[styles.container, { backgroundColor }]}>
			<Text>{label}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		borderRadius: 25,
		height: 50,
		width: 245,
		justifyContent: "center",
		alignItems: "center",
		alignSelf: "center",
	},
	label: {
		fontSize: 15,
		color: "#000000",
	},
});

export default Button;
