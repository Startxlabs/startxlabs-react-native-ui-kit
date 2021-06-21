import { ViewStyle } from "react-native";

type Point = {
    x: number;
    y: number;
};

type DotProps = {
    dimention: number;
    backgroundColor: string;
};

type MiddleButtonProps = {
    middleButtonImage: string;
    middleButtonDimension: number;
    middleButtonClickHandler: () => void;
};

type CurvedBottomBarProps = {
    onTabPress: Function;
    navigation: any;
    imageObject: Object;
    activeCurvePoints: Array<Point>;
    middleCurvePoints: Array<Point>;
    fillColor: string;
    tabLength: number;
    showDot: boolean;
    dotProps?: DotProps;
    showMiddleButton: boolean;
    middleButtonProps?: MiddleButtonProps;
    shadowStyle?: ViewStyle;
};

type TabsHandlerProps = {
    routes: Array<any>;
    tabWidth: number;
    onTabPress: Function,
    index: number;
    imageObject: Object;
    activeCurveRadius: number;
    middleCurveRadius: number;
    showDot: boolean;
    dotProps?: DotProps;
    showMiddleButton: boolean;
    middleButtonProps?: MiddleButtonProps;

}

type TabsShapeProps = {
    tabWidth: number;
    index: number;
    activeCurvePoints: Array<Point>;
    middleCurvePoints: Array<Point>;
    shadowStyle?: ViewStyle;
    activeCurveRadius: number;
    middleCurveRadius: number;
    fillColor: string
}

export { CurvedBottomBarProps, TabsHandlerProps, TabsShapeProps, MiddleButtonProps, Point };
