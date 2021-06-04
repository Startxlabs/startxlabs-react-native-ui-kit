type ButtonVariant = "primary" | "secondary" | "transparent";

type ButtonProp = {
	variant: ButtonVariant;
	label?: string;
	onPress: () => void;
} & Spacing;

export default ButtonProp;
