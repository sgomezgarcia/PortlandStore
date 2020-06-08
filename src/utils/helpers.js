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

export const getFavsIds = (data) => {
    const ids = [];
    for (let i = 0; i < data.length; i++) {
        ids.push(data[i].products);
    }
    return ids;
};
