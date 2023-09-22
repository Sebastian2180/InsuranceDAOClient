// theme.js or theme.ts
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
	// Define your theme properties here
	fonts: {
		body: "Arial, sans-serif",
		heading: "Helvetica, sans-serif",
	},
	colors: {
		primary: {
			50: "#f7fafc",
			100: "#edf2f7",
			// Add more color variations here
		},
		// Define other colors here
	},
	// Customize other theme options as needed
});

export default theme;
