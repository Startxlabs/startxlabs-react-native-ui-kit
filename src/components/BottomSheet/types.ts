import { ViewStyle, Animated } from "react-native";

type BottomSheetProps = {
	children: (fn: () => void) => void;
	onDismiss: () => void;
	visible?: boolean;
	containerStyle?: ViewStyle;
	stripStyle?: ViewStyle;
};

type BottomSheetState = { panY: Animated.Value };

export { BottomSheetProps, BottomSheetState };
