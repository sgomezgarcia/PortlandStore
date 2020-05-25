import { Dimensions } from 'react-native';

export const getDimensions = () => {
    const { height, width } = Dimensions.get('window');

    return (
        {
            height: height / 100,
            width: width / 100
        }

    );
};

export const DimensionPercentage = (number, mode) => {
    const dimensions = getDimensions();
    return ((dimensions[mode]) * number);
};
