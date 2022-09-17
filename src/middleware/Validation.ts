import { AnySchema } from 'yup'

const Validation = async (schema: AnySchema, args: any) => {
    try {
        await schema.validate({
            args: args
        });
    } catch (err) {
        throw new Error(err as string);
    }
}

export default Validation;