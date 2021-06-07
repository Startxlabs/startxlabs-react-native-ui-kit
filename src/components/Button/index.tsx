import { useTheme } from "@shopify/restyle";
import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

import { Theme } from "../../theme";

import ButtonProp from "./type";

const Button = ({ variant, label, onPress, ...props }: ButtonProp) => {
	const theme = useTheme<Theme>();

	const backgroundColor =
		variant === "primary"
			? theme.colors.primary
			: variant === "transparent"
			? "transparent"
			: theme.colors.secondary;

	const color = variant === "primary" ? theme.colors.white : theme.colors.secondary;

	return (
		<TouchableOpacity
			style={[styles.container, { backgroundColor, ...props.buttonStyle }]}
			onPress={onPress}>
			<Text style={[styles.label, { color, ...props.buttonTextStyle }]}>{label}</Text>
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
