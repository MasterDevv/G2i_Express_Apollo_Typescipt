import { object, string, number } from 'yup';

export const queryGetAcronymSchema = object({
    args: object({
        from: number()
            .max(1000)
            .required('Acronym from number is required.'),
        limit: number()
            .max(1000)
            .required('Acronym limit number is required.'),
        search: string()
            .max(100)
            .required('Acronym search string is required.'),
    }),
});

export const mutationAddorUpdateAcronymSchema = object({
    args: object({
        acronym: string()
            .max(1000)
            .required('Acronym acronym string is required.'),
        definition: string()
            .max(100)
            .required('Acronym definition string is required.'),
    }),
});

export const mutationDelAcronymSchema = object({
    args: object({
        acronym: string()
            .max(1000)
            .required('Acronym acronym string is required.'),
    }),
});

