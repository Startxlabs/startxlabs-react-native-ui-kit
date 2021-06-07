import React, { Component } from "react";
import {
	Modal,
	View,
	StyleSheet,
	Animated,
	Dimensions,
	PanResponder,
	Keyboard,
} from "react-native";
import { BottomSheetProps, BottomSheetState } from "./types";
import colors from "../../utils/colors";

class BottomSheet extends Component<BottomSheetProps, BottomSheetState> {
	// Default
	resetPositionAnim;
	closeAnim;
	panResponders;

	constructor(props: BottomSheetProps) {
		super(props);
		this.state = {
			panY: new Animated.Value(200),
		};

		this.resetPositionAnim = Animated.timing(this.state.panY, {
			toValue: 0,
			duration: 300,
			useNativeDriver: true,
		});

		this.closeAnim = Animated.timing(this.state.panY, {
			toValue: Dimensions.get("screen").height,
			duration: 500,
			useNativeDriver: true,
		});

		this.panResponders = PanResponder.create({
			onStartShouldSetPanResponder: () => true,
			onMoveShouldSetPanResponder: () => false,
			onPanResponderMove: (e, gs) => {
				if (gs.dy > 0) {
					this.state.panY.setValue(gs.dy);
				}
			},
			onPanResponderRelease: (e, gs) => {
				if (gs.dy > 0 && gs.vy > 0.5) {
					Keyboard.dismiss();
					return this.closeAnim.start(() => {
						this.props.onDismiss();
					});
				} else {
					this.state.panY.setValue(0);
				}
				return this.resetPositionAnim.start();
			},
		});
	}

	componentDidUpdate(prevProps: BottomSheetProps, prevState: BottomSheetState) {
		if (prevProps.visible !== this.props.visible && this.props.visible) {
			this.resetPositionAnim.start();
		}
	}

	_handleDismiss() {
		this.closeAnim.start(() => this.props.onDismiss());
	}

	render() {
		return (
			<Modal
				animated
				animationType="fade"
				visible={this.props.visible}
				transparent
				onRequestClose={() => this.props.onDismiss()}>
				<View style={styles.overlay}>
					<Animated.View
						style={[
							styles.container,
							this.props.containerStyle,
							{ transform: [{ translateY: this.state.panY }] },
						]}
						{...this.panResponders.panHandlers}>
						<View style={[styles.topStripStyle, this.props.stripStyle]} />
						{this.props.children(this._handleDismiss.bind(this))}
					</Animated.View>
				</View>
			</Modal>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.white,
		borderTopRightRadius: 12,
		borderTopLeftRadius: 12,
		paddingTop: 25,
		paddingHorizontal: 10,
	},
	overlay: {
		flex: 1,
		backgroundColor: "rgba(0,0,0,0.4)",
		justifyContent: "flex-end",
	},
	topStripStyle: {
		width: 32,
		height: 4,
		borderRadius: 20,
		backgroundColor: "#222",
		marginTop: -10,
		alignSelf: "center",
		marginBottom: 13,
	},
});

export default BottomSheet;
