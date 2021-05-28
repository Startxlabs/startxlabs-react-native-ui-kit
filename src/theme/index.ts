import { createText, createBox } from "@shopify/restyle";
import colors from "../utils/colors";

const theme = {
	colors: {
		...colors,
	},
	spacing: {
		s: 8,
		m: 16,
		l: 24,
		xl: 40,
	},
	borderRadii: {
		s: 5,
		m: 12,
		l: 25,
		xl: 75,
	},
};

export type Theme = typeof theme;
export default theme;
