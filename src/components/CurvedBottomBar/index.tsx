import React, { useMemo } from "react";
import { View, TouchableOpacity, StyleSheet, Image, Dimensions } from "react-native";
import { CurvedBottomBarProps, TabsHandlerProps, TabsShapeProps, Point } from "./types";
import { Svg, Path } from "react-native-svg";
import * as shape from "d3-shape";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const TAB_WIDTH = Dimensions.get("window").width;
const NAVIGATION_BOTTOM_TABS_HEIGHT = 65;

function TabsShape({
	tabWidth,
	index,
	activeCurvePoints,
	middleCurvePoints,
	shadowStyle,
	activeCurveRadius,
	middleCurveRadius,
	fillColor,
}: TabsShapeProps) {
	const points = useMemo(() => {
		const start =
			tabWidth / 2 -
			activeCurveRadius +
			index * tabWidth +
			(index > 2 ? middleCurveRadius * 2 - tabWidth : 0);
		//alert(`${start}`)

		const left = shape
			.line()
			.x((d) => d.x)
			.y((d) => d.y)([
			{ x: 0, y: 0 },
			{ x: start, y: 0 },
		]);

		activeCurvePoints.forEach((point: Point) => {
			point.x = start + point.x;

			return point;
		});

		const tab = shape
			.line()
			.x((d) => d.x)
			.y((d) => d.y)
			.curve(shape.curveBasis)(activeCurvePoints);

		const startMiddle = TAB_WIDTH / 2 - middleCurveRadius;

		middleCurvePoints.forEach((point: Point) => {
			point.x = startMiddle + point.x;

			return point;
		});

		const middleTab = shape
			.line()
			.x((d) => d.x)
			.y((d) => d.y)
			.curve(shape.curveBasis)(middleCurvePoints);

		const right = shape
			.line()
			.x((d) => d.x)
			.y((d) => d.y)([
			{ x: startMiddle * 2, y: 0 },
			{ x: TAB_WIDTH, y: 0 },
			{ x: TAB_WIDTH, y: NAVIGATION_BOTTOM_TABS_HEIGHT },
			{ x: 0, y: NAVIGATION_BOTTOM_TABS_HEIGHT },
			{ x: 0, y: 0 },
		]);

		return `${left} ${tab} ${middleTab} ${right}`;
	}, [tabWidth, index]);
	// logOnConsole(d);
	return (
		<Svg
			width={TAB_WIDTH}
			{...{ height: NAVIGATION_BOTTOM_TABS_HEIGHT }}
			style={shadowStyle}>
			<Path fill={fillColor} {...{ d: points }} />
		</Svg>
	);
}

function TabsHandler({
	routes,
	tabWidth,
	onTabPress,
	index,
	imageObject,
	activeCurveRadius,
	middleCurveRadius,
	showDot,
	dotProps,
	showMiddleButton,
	middleButtonProps,
}: TabsHandlerProps) {
	function getIcon(tab: any) {
		// console.log(index, routes)
		let imageName;

		const indexOfTabSelected = routes.indexOf(tab);

		if (indexOfTabSelected === index) {
			imageName = imageObject[`${tab.routeName}_active`];
		} else {
			imageName = imageObject[`${tab.routeName}_inactive`];
		}

		return (
			<Image
				resizeMode="contain"
				style={[{ resizeMode: "contain" }]}
				source={imageName}
			/>
		);
	}

	function renderActiveDot(tab: any) {
		// console.log(index, routes)
		let showDot = true;

		// showDot=false
		return showDot;
	}

	return (
		<>
			<View style={{ flexDirection: "row" }}>
				{routes.map((tab, key) => {
					if (key === Math.floor(routes.length / 2)) {
						return (
							<View
								style={{
									width: middleCurveRadius * 2,
									height: NAVIGATION_BOTTOM_TABS_HEIGHT,
								}}
								key={`${tab.key}`}
							/>
						);
					}
					return (
						<>
							{showDot && renderActiveDot(tab) ? (
								<View
									key={`${tab.key}`}
									style={[
										{
											width: dotProps.dimention,
											height: dotProps.dimention,
											position: "absolute",
											backgroundColor: dotProps.backgroundColor,
											borderRadius: dotProps.dimention / 2,
											left:
												tabWidth / 2 -
												activeCurveRadius +
												index * tabWidth +
												(index > 2 ? middleCurveRadius * 2 - tabWidth : 0) +
												activeCurveRadius -
												dotProps.dimention / 2,
										},
									]}
								/>
							) : null}
							<TouchableOpacity
								key={`${tab.key}`}
								style={{ elevation: 45 }}
								onPress={() => {
									onTabPress({ route: routes[key] });
								}}>
								<View
									style={{
										width: tabWidth,
										justifyContent: "center",
										alignItems: "center",
										flexDirection: "column",
										height: NAVIGATION_BOTTOM_TABS_HEIGHT,
									}}>
									{getIcon(tab)}
									{/* <Image
							resizeMode="contain"
							style={[{ resizeMode: "contain" }]}
							source={images.notify_selected}
						/>
					*/}
								</View>
							</TouchableOpacity>
						</>
					);
				})}
			</View>
			{showMiddleButton && (
				<TouchableOpacity
					style={{
						justifyContent: "center",
						alignItems: "center",
						position: "absolute",
						left: TAB_WIDTH / 2 - middleButtonProps.middleButtonDimension / 2,
						bottom: NAVIGATION_BOTTOM_TABS_HEIGHT / 2,
					}}
					onPress={middleButtonProps.middleButtonClickHandler}>
					<Image
						style={{
							width: middleButtonProps.middleButtonDimension,
							height: middleButtonProps.middleButtonDimension,
						}}
						source={imageObject[middleButtonProps.middleButtonImage]}
					/>
				</TouchableOpacity>
			)}
		</>
	);
}

function CustomTabBar(props: CurvedBottomBarProps) {
	const {
		onTabPress,
		activeCurvePoints,
		middleCurvePoints,
		imageObject,
		shadowStyle,
		fillColor,
		tabLength,
		showDot,
		dotProps,
		showMiddleButton,
		middleButtonProps,
	} = props;

	const { routes, index } = props.navigation.state;
	const insets = useSafeAreaInsets();

	const activeCurveRadius = activeCurvePoints[activeCurvePoints.length - 1].x / 2;
	const middleCurveRadius = middleCurvePoints[middleCurvePoints.length - 1].x / 2;
	const tabWidth = useMemo(
		() => (TAB_WIDTH - middleCurveRadius * 2) / tabLength,
		[tabLength],
	);

	const bottom = insets.bottom;
	// console.log(props)

	return (
		<View
			pointerEvents="box-none"
			style={{
				height: NAVIGATION_BOTTOM_TABS_HEIGHT + 150,
				width: TAB_WIDTH,
				bottom: bottom,
				position: "absolute",
				backgroundColor: "transparent",
			}}>
			<View
				pointerEvents="box-none"
				style={{
					height: 150,
					width: 200,
					backgroundColor: "transparent",
					alignSelf: "center",
				}}
			/>
			<View>
				<TabsShape
					{...{
						tabWidth,
						index,
						activeCurvePoints,
						middleCurvePoints,
						shadowStyle,
						activeCurveRadius,
						middleCurveRadius,
						fillColor,
					}}
				/>
				<View {...StyleSheet.absoluteFill}>
					<TabsHandler
						{...{
							routes,
							tabWidth,
							onTabPress,
							index,
							imageObject,
							activeCurveRadius,
							middleCurveRadius,
							showDot,
							dotProps,
							showMiddleButton,
							middleButtonProps,
						}}
					/>
				</View>
			</View>
			<View style={{ height: insets.bottom, backgroundColor: "white" }} />
		</View>
	);
}

export default CustomTabBar;
