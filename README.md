# G2i-Express-Apollo Typescript template By $atan

Template for Apollo-server-express and typescript

Git url https://github.com/Satan199787/G2i_Express_Apollo_Typescipt.git

Heroku url https://g2iapollotypescript.herokuapp.com/graphql/

## description
Express Apollo-Server Mongoose Typescript (using middleware, validation, typeDef(defined type detail for graphql playground.))

## Installation
```bash
git clone https://github.com/Satan199787/G2i_Express_Apollo_Typescipt.git

cd G2i-Express-Apollo-Typescript
```
## Interface(Query and Mutation)
Note: You can show type detail about params in graphql playground.
```
Query:
  getAcronyms Func results does not need params(return String)

  Example: getAcronyms(from: 1, limit: 10, search: "one")

  getAcronyms(
    from: Int!, 
    limit: Int!, 
    search: String
  ): String!
```

```
Mutation:
  1. addAcronym is function for create acronym. (return String)

  Example: addAcronym(acronym: "one", definition: "one is one.")

  addAcronym(
    acronym: String!, 
    definition: String!
  ): String!
  
  2. updateAcronym is function for update acronym. (return String)

  Example: updateAcronym(acronym: "one", definition: "one is one.")
  Note: header {
    "authorization": true
  }

  updateAcronym(
    acronym: String!, 
    definition: String!
  ): String!

  
  3. deleteAcronym is function for delete acronym. (return String)
  
  Example: deleteAcronym(acronym: "one")
  Note: header {
    "authorization": true
  }
  
  deleteAcronym(
    acronym: String!
  ): String

```node
npm install
npm start
```
