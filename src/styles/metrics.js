import { Dimensions, PixelRatio } from 'react-native';

const { width } = Dimensions.get('window');
const baseWidth = 375;

export const px = (valuePX) => {
    const widthPercent = (valuePX / baseWidth) * 100;
    const screenPixel = PixelRatio.roundToNearestPixel(
        (width * parseFloat(widthPercent)) / 100
    )
    return screenPixel;
};

export const metrics = {
    px,
}