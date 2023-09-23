import { Box, Text, Button} from "@chakra-ui/react";
export default function ConnectPage() {
	return (
		<div className="page">
			<Box bg="blue.300" w={"100%"} maxW={800} className="p-6 rounded-lg" textAlign="center">
				<Text textStyle={"title"} >Welcome</Text>
				<img width="25%" src="public/purse.svg" alt="Image description"></img>
				<Text textStyle={"subTitle"}>Please Connect Your Wallet to Continue</Text>
				<Button variant="primary">
					Primary Button
				</Button>
			</Box>
		</div>
	);
}
