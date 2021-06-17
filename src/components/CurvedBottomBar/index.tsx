import React, { useMemo } from "react";
import { View, TouchableOpacity, StyleSheet, Image, Dimensions, Platform } from "react-native";
import { Svg, Path } from "react-native-svg";
import * as shape from "d3-shape";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const TAB_WIDTH = Dimensions.get("window").width
const NAVIGATION_BOTTOM_TABS_HEIGHT = 65;

const ACTIVE_CURVE_RADIUS = 21;
const MIDDLE_CURVE_RADIUS = 50;

function TabsShape({ tabWidth, index, shadowStyle, activeCurveRadius }: any) {
    const d = useMemo(() => {
        const start =
            tabWidth / 2 - activeCurveRadius + index * tabWidth + (index > 2 ? 100 - tabWidth : 0);
        //alert(`${start}`)

        const left = shape
            .line()
            .x((d) => d.x)
            .y((d) => d.y)([
                { x: 0, y: 0 },
                { x: start, y: 0 },
            ]);

        const tab = shape
            .line()
            .x((d) => d.x)
            .y((d) => d.y)
            .curve(shape.curveBasis)([
                { x: start, y: 0.3 },
                { x: start + 4, y: 1 },
                { x: start + 8, y: 3 },
                { x: start + 12, y: 6 },
                { x: start + 18, y: 10 },
                { x: start + 21, y: 10.5 },
                { x: start + 24, y: 10 },
                { x: start + 30, y: 6 },
                { x: start + 34, y: 3 },
                { x: start + 38, y: 1 },
                { x: start + 42, y: 0.3 },
            ]);

        const startMiddle = TAB_WIDTH / 2 - MIDDLE_CURVE_RADIUS;

        const middleTab = shape
            .line()
            .x((d) => d.x)
            .y((d) => d.y)
            .curve(shape.curveBasis)([
                { x: startMiddle, y: 0.3 },
                { x: startMiddle + 5, y: 1 },
                { x: startMiddle + 15, y: 8 },
                { x: startMiddle + 22, y: 17 },
                { x: startMiddle + 32, y: 28 },
                { x: startMiddle + 50, y: 33 },
                { x: startMiddle + 68, y: 28 },
                { x: startMiddle + 78, y: 17 },
                { x: startMiddle + 85, y: 8 },
                { x: startMiddle + 95, y: 1 },
                { x: startMiddle + 100, y: 0.3 },
            ]);

        const right = shape
            .line()
            .x((d) => d.x)
            .y((d) => d.y)([
                { x: startMiddle * 2, y: 0.3 },
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
            style={[
                Platform.OS === 'ios'
                    ? shadowStyle
                    : {}
            ]}>
            <Path fill="white" {...{ d }} />
        </Svg>
    );
}

function TabsHandler({ routes, tabWidth, onTabPress, index, navigation, imageObject, activeCurveRadius }: any) {

    function getIcon(tab: any) {
        // console.log(index, routes)
        let imageName;

        const indexOfTabSelected = routes.indexOf(tab)



        if (indexOfTabSelected === index) {
            imageName = imageObject[`${tab.routeName}_active`]
        } else {
            imageName = imageObject[`${tab.routeName}_inactive`]
        }

        return (
            <Image resizeMode="contain" style={[{ resizeMode: "contain" }]} source={imageName} />
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
                                    width: 100,
                                    height: NAVIGATION_BOTTOM_TABS_HEIGHT,
                                }}
                                key="logo"
                            />
                        );
                    }
                    return (
                        <>
                            {renderActiveDot(tab) ? (
                                <View
                                    // style,
                                    style={{
                                        width: 6,
                                        height: 6,
                                        borderRadius: 3,
                                        position: "absolute",
                                        left:
                                            tabWidth / 2 -
                                            activeCurveRadius +
                                            index * tabWidth +
                                            (index > 2 ? 100 - tabWidth : 0) +
                                            18,
                                    }}

                                />
                            ) : null}
                            <TouchableOpacity
                                {...{ key }}
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


        </>
    );

}

function CustomTabBar(props: any) {
    // const { bottom } = useSafeArea();
    // const sessionFromRedux = useSelector((state: any) => state.Session);

    // let sessionType = 0

    const tabLength = 5;
    // const tabWidth = useMemo(() => TAB_WIDTH / tabs.length, [tabs.length]);
    const tabWidth = useMemo(() => (TAB_WIDTH - 100) / (tabLength - 1), [tabLength]);
    // let tabs = [1,2,3,4,5]

    const { onTabPress, navigation, imageObject, shadowStyle, activeCurveRadius } = props;
    const { routes, index } = props.navigation.state;
    const insets = useSafeAreaInsets();

    //alert(`${props.navigation.navigate}`)
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
                <TabsShape {...{ tabWidth, index, shadowStyle, activeCurveRadius }} />
                <View {...StyleSheet.absoluteFill}>
                    <TabsHandler {...{ routes, tabWidth, onTabPress, index, navigation, imageObject, activeCurveRadius }} />
                </View>
            </View>
            <View style={{ height: insets.bottom, backgroundColor: 'white' }} />
        </View>
    );
}

export default CustomTabBar;