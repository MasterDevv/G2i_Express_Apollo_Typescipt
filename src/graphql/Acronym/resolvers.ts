import Acronym from '../../model/Acronym'
import { IGrgsAddorUpdateAcornym, IGrgsGetAcornym, IGrgsDelAcornym, IAuth } from '../../interface'
import { queryGetAcronymSchema, mutationAddorUpdateAcronymSchema, mutationDelAcronymSchema } from '../../schemas/acronymSchema';
import Validation from '../../middleware/Validation';

const resolvers = {
    Query: {
        getAcronyms: async (__: void, args: IGrgsGetAcornym) => {
            await Validation(queryGetAcronymSchema, args)
            const { from, limit, search } = args;
            let getData;
            try {
                getData = await Acronym.find({
                    $or: [
                        { acronym: { $regex: search.toString() } },
                        { definition: { $regex: search.toString() } }
                    ]
                }).skip(from).limit(limit)
            } catch (error) {
                throw new Error("Query's getAcronyms Server Error.");
            }
            return JSON.stringify({
                success: true,
                getData
            });
        }
    },
    Mutation: {
        // create acronym
        addAcronym: async (__: void, args: IGrgsAddorUpdateAcornym) => {
            await Validation(mutationAddorUpdateAcronymSchema, args)
            const { acronym, definition } = args;
            let createAcronym;
            if (await Acronym.findOne({ acronym })) {
                throw new Error('Acronym already Exists.');
            }
            try {
                createAcronym = await Acronym.create({
                    acronym, definition
                })
            } catch (error) {
                throw new Error("Mutation's addAcrnym Server Error.");
            }
            return JSON.stringify({
                success: true,
                createAcronym
            });
        },

        // update acronym
        updateAcronym: async (__: void, args: IGrgsAddorUpdateAcornym, authInfo: IAuth) => {
            await Validation(mutationAddorUpdateAcronymSchema, args)
            if (!authInfo.Authorization) {
                throw new Error('Not Permission.');
            }
            const { acronym, definition } = args;
            let updateAcronym;
            if (!await Acronym.findOne({ acronym })) {
                throw new Error('Acronym does not Exist.');
            }
            try {
                updateAcronym = await Acronym.findOneAndUpdate(
                    { acronym: acronym },
                    {
                        acronym,
                        definition
                    })
            } catch (error) {
                throw new Error("Mutation's updateAcrnym Server Error.");
            }
            return JSON.stringify({
                success: true,
                updateAcronym
            });
        },

        // delete acronym
        deleteAcronym: async (__: void, args: IGrgsDelAcornym, authInfo: IAuth) => {
            await Validation(mutationDelAcronymSchema, args)
            if (!authInfo.Authorization) {
                throw new Error('Not Permission.');
            }
            const { acronym } = args;
            let delAcronym;
            if (!await Acronym.findOne({ acronym })) {
                throw new Error('Acronym does not Exist.');
            }
            try {
                delAcronym = await Acronym.findOneAndRemove(
                    { acronym: acronym })
            } catch (error) {
                throw new Error("Mutation's updateAcrnym Server Error.");
            }
            return JSON.stringify({
                success: true,
                delAcronym
            });
        }
    }
};

export default resolvers;