### Example

Focus on CustomTabBar

import { images } from "../../utils/constants/assets";
const BottomTab = createBottomTabNavigator(
	{
		[navigationConstants.dashboard_stack]: {
			screen: dashboardStack,
		},
		[navigationConstants.leaderboard]: {
			screen: Leaderboard,
		},
		[navigationConstants.session_start]: {
			screen: FloatingBottomIcon,
			navigationOptions: {
				tabBarIcon: ({ focused }) => {
					return focused ? (
						<Image
							resizeMode="contain"
							style={[
								{ resizeMode: "contain", marginBottom: 65 },
								{ ...elevationShadowStyle(8), borderRadius: 200 },
							]}
							source={images.stop_orange}
						/>
					) : (
						<Image
							resizeMode="contain"
							style={[
								{ resizeMode: "contain", marginBottom: 65 },
								{ ...elevationShadowStyle(8), borderRadius: 200 },
							]}
							source={images.start_orange}
						/>
					);
				},
			},
		},
		[navigationConstants.notification_center]: {
			screen: NotificationCenter,
		},
		[navigationConstants.profile]: {
			screen: accountSetupStack,
		},
	},
	{
		tabBarOptions: {
			activeTintColor: "tomato",
			inactiveTintColor: "gray",
			showLabel: false,
			labelStyle: {
				fontSize: 10,
				textAlign: "center",
				lineHeight: 12,
			},
			tabStyle: {
				marginBottom: 15,
				paddingTop: 10,
			},
			style: {
				height: 65,
				borderTopColor: "transparent",
				backgroundColor: "#FFFFFF",
			},
			allowFontScaling: true,
		},
		tabBarComponent: (props) => {
			return (

				<CustomTabBar
					{...props}
					imageObject={images}
					activeCurvePoints={[
						{ x: 0, y: 0 },
						{ x: 4, y: 1 },
						{ x: 8, y: 3 },
						{ x: 12, y: 6 },
						{ x: 18, y: 10 },
						{ x: 21, y: 10.5 },
						{ x: 24, y: 10 },
						{ x: 30, y: 6 },
						{ x: 34, y: 3 },
						{ x: 38, y: 1 },
						{ x: 42, y: 0 },
					]}
					middleCurvePoints={[
						{ x: 0, y: 0 },
						{ x: 5, y: 1 },
						{ x: 15, y: 8 },
						{ x: 22, y: 17 },
						{ x: 32, y: 28 },
						{ x: 50, y: 33 },
						{ x: 68, y: 28 },
						{ x: 78, y: 17 },
						{ x: 85, y: 8 },
						{ x: 95, y: 1 },
						{ x: 100, y: 0 },
					]}
					fillColor='white'
					tabLength={4}
					showDot={true}
					dotProps={{
						backgroundColor: 'red',
						dimention: 6
					}}
					showMiddleButton={true}
					middleButtonProps={{
						middleButtonImage: 'start_order',
						middleButtonDimension: 80
					}}
					shadowStyle={elevationShadowStyle(
						convertHexToRGBA(colors.primary_background_color, 8),
						37,
						-2,
						0,
					)}
				/>

			);
		},
		
	},
);

export default BottomTab;

| Props          | Type      | Description                                                |
| :------------- | :-------- | :--------------------------------------------------------- |
| imageObject    | Object    | **Required** This is an object containing name and paths to images in project.
								You can create this here only or just pass images from assets as shown above. The mandatory part is, object should contain 2 images for each tab, one for active other for inactive. There should be images with  respective screen name(navigationConstants). |
			
| activeCurvePoints | Array<Point> |  **Required** This is array of points containing x and y. points in 									|	X-Y graph needed to create the active tab curve. Zoom the curve 								   |	in Figma, you will able to see vertical and horizontal lines at 								   |	back. intersection of those lines represents a point in 										   | 	graph. Start from curve's top left to top right.

| middleCurvePoints | Array<Point> | **Required** This is array of points containing x and y. points in 								   |	X-Y graph needed to create the Middle curve. Zoom the curve 								   	   |	in Figma, you will able to see vertical and horizontal lines at 								   |	back. intersection of those lines represents a point in 										   | 	graph. Start from curve's top left to top right.

| fillColor         | string 		| **Required** Color of Bottom tab

| tabLength 		| number		| **Required** Number of tabs to be shown

| showDot 			| boolean       | **Required** whether to show dot above active tab curve.

| dotProps		    | DotProps 		| Object containing dimention(height and width) and background color 										of dot.
| showMiddleButton  | boolean       | **Required** whether to show middle actioon button.

| middleButtonProps | MiddleButtonProps | middleButtonImage = key of image in imageObject.
										  middleButtonDimension = dimention of button(Height and width)
										  middleButtonClickHandler = click handler



#### Extra knowledge for imageObject

 This is an object containing name and paths to images in project. You can create this here only or just pass images from assets as shown above. The mandatory part is, object should contain 2 images for each tab, one for active other for inactive. There should be images with  respective screen name(navigationConstants). For above example, navigationConsts are 

    dashboard_stack: "dashboard_stack",
	leaderboard: "leaderboard",
	notification_center: "notification_center",
	profile: "profile",
    
Then images object must contain images with stack namewith 'active' and 'inactive' appended at the end,

export const images = {

    dashboard_stack_active: require("../../assets/images/bottomtabs/dashboard_stack_active.png"),
	dashboard_stack_inactive: require("../../assets/images/bottomtabs/dashboard_stack_inactive.png"),
	leaderboard_active: require("../../assets/images/bottomtabs/leaderboard_active.png"),
	leaderboard_inactive: require("../../assets/images/bottomtabs/leaderboard_inactive.png"),
	notification_center_active: require("../../assets/images/bottomtabs/notification_center_active.png"),
	notification_center_inactive: require("../../assets/images/bottomtabs/notification_center_inactive.png"),
	profile_active: require("../../assets/images/bottomtabs/profile_active.png"),
	profile_inactive: require("../../assets/images/bottomtabs/profile_inactive.png"),

}
