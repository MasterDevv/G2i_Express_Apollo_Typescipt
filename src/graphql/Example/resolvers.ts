const resolvers = {
    Query: {
        hello: async () => {
            return 'hello world'
        }
    }
};

export default resolvers;