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

export { CurvedBottomBarProps, MiddleButtonProps, Point }
