import Router from "./router";
import AppProvider from "./providers/appProvider";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./styles/chakraTheme";
function App() {
	return (
		<div className="app" id="app">
			<ChakraProvider theme={theme}>
				<AppProvider>
					<Router />
				</AppProvider>
			</ChakraProvider>
		</div>
	);
}

export default App;
