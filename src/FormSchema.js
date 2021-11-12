import * as Yup from 'yup';

const formSchema = Yup.object().shape({
        username: Yup
            .string()
            .required()
            .min(2, "name must be at least 2 characters"),
        size: Yup
            .boolean(),
        sauce: Yup
            .boolean(),
        pepperoni: Yup
            .boolean(),
        sausage: Yup
            .boolean(),
        canadianBacon: Yup
            .boolean(),
        spicyItalian: Yup
            .boolean(),
        grilledChicken: Yup
            .boolean(),
        onions: Yup
            .boolean(),
        greenPepper: Yup
            .boolean(),
        dicedTomatos: Yup
            .boolean(),
        blackOlives: Yup
            .boolean(),
        roastedGarlic: Yup
            .boolean(),
        artichokeHearts: Yup
            .boolean(),
        threeCheese: Yup
            .boolean(),
        pineapple: Yup
            .boolean(),
        extraCheese: Yup
            .boolean(),
        special: Yup
            .string(),
    });


export default formSchema;