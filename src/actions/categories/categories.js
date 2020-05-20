import functions from '@react-native-firebase/functions';
import { CATEGORIES } from '../../utils/dispatchTypes';


export const getAllCategories = () => (dispatch) => new Promise((resolve, reject) => {
        functions().httpsCallable('getAllCategories')()
            .then(({ data }) => {
                const groupedCategories = {};
                const man = data.filter((item) => ('man' === item.genre || null === item.genre));
                const woman = data.filter((item) => ('woman' === item.genre || null === item.genre));
                groupedCategories.man = man;
                groupedCategories.woman = woman;
                dispatch({ type: CATEGORIES.GET, categories: groupedCategories }); // meter lo que devuelva en REDUX
                resolve(groupedCategories);
            })
            .catch((err) => {
                reject(err);
            });
    });
