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
type Query {
    """
    getAcronyms Func results does not need params(return String)
    F.EX: getAcronyms(from: 1, limit: 10, search: "one")
    """
    getAcronyms(
      "Acronyms from number"
      from: Int!, 
      "Acronyms limit number"
      limit: Int!, 
      "String for search"
      search: String
    ): String!
}
type Mutation {
  """
  addAcronym is function for create acronym. (return String)
  F.EX: addAcronym(acronym: "one", definition: "one is one.")
  """
  addAcronym(
    "add Acronym.(String)"
    acronym: String!, 
    "add Acronym's definition.(String)"
    definition: String!
  ): String!
  """
  updateAcronym is function for update acronym. (return String)
  F.EX: updateAcronym(acronym: "one", definition: "one is one.")
  """
  updateAcronym(
    "add Acronym.(String)"
    acronym: String!, 
    "add Acronym's definition.(String)"
    definition: String!
  ): String!
  """
  deleteAcronym is function for delete acronym. (return String)
  F.EX: deleteAcronym(acronym: "one")
  """
  deleteAcronym(
    "delete Acronym.(String)"
    acronym: String!
  ): String
}

```node
npm install
npm start
```
