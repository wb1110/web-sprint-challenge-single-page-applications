import * as Yup from 'yup';

const formSchema = Yup.object().shape({
        username: Yup
        .string()
        .required()
        .min(2, "name must be at least 2 characters")
    });


export default formSchema;