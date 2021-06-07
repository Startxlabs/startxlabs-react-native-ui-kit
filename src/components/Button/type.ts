import { TextStyle, ViewStyle } from "react-native";

type ButtonVariant = "primary" | "secondary" | "transparent";

type ButtonProp = {
	variant: ButtonVariant;
	label?: string;
	onPress: () => void;
	buttonStyle?: ViewStyle;
	buttonTextStyle?: TextStyle;
} & Spacing;

export default ButtonProp;
