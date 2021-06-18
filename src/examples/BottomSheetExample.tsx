import React, { useState } from "react";
import { Dimensions, View, Text } from "react-native";

import { Button, BottomSheet } from "../index";
import colors from "../utils/colors";

function BottomSheetExample() {
	const [showDetail, setShowDetail] = useState(false);
	return (
		<View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
			<Button
				label={"Show Details"}
				variant="primary"
				onPress={() => {
					setShowDetail(true);
				}}
			/>
			<BottomSheet
				visible={showDetail}
				containerStyle={{ backgroundColor: colors.lightGray }}
				onDismiss={() => {
					setShowDetail(false);
				}}>
				{(onDismiss) => {
					return (
						<View
							style={{
								height: Dimensions.get("window").height * 0.5,
							}}>
							<Text>
								Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
								Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse
								urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo
								eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.
								Aenean dignissim pellentesque felis.
							</Text>

							<Button
								label={"Close"}
								variant="secondary"
								buttonStyle={{ marginTop: 70 }}
								buttonTextStyle={{ color: colors.white }}
								onPress={() => {
									onDismiss();
								}}
							/>
						</View>
					);
				}}
			</BottomSheet>
		</View>
	);
}

export default BottomSheetExample;
