const graphql = require('graphql');
const Book = require('../graphql_schema/book_schema');
const Author = require('../graphql_schema/author_schema');

const { GraphQLString, GraphQLObjectType, GraphQLID, GraphQLSchema, GraphQLList } = graphql;


const bookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    author: {
      type: authorType,
      resolve(parent, args){
        return Author.findById(parent.authorId);
      }
    }
  }),
});

const authorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    books: {
      type: new GraphQLList(bookType),
      resolve(parent, args){
        const {id} = parent
        return Book.find({authorId: id});
      }
    }
  }),
});

// const books = [
//   { name: 'Hamlet', id: 1, genre: 'Drama', authorId: 1 },
//   { name: 'Waiting For Godot', id: 2, genre: 'Drama', authorId: 2 },
//   { name: 'The Exorcist', id: 3, genre: 'Horror', authorId: 3 },
//   { name: 'The Crucible', id: 4, genre: 'Horror', authorId: 3 }
// ];

// const authors = [
//   { name: 'William Shakespeare', id: 1 },
//   { name: 'Samuel Beckett', id: 2 },
//   { name: 'William Peter Blatty', id: 3 }
// ];

const rootQuery = new GraphQLObjectType({
 name: 'RootQueryType',
 fields: {
   book: {
     type: bookType,
     args: {id: { type: GraphQLID}},
     resolve(parent, args){
      //code to fetch data from database
      return Book.findById(args.id);
    } 
   },
   books: {
    type: new GraphQLList(bookType),
    resolve(parent, args){
      return Book.find({});
    }
   },
   author: {
     type: authorType,
     args: {id: { type: GraphQLID}},
     resolve(parent, args){
      return Author.findById(args.id);
     }
   },
   authors: {
     type: new GraphQLList(authorType),
     resolve(parent, args){
       return Author.find({});
     }
   }
 },  
}); 

const mutation = new GraphQLObjectType({
 name: 'Mutation',
 fields: {
   addAuthor: {
     type: authorType,
     args: {
       id: {type: GraphQLID},
       name: {type: GraphQLString}
     },
     resolve(parent, args){
       const newAuthor = new Author({
         _id: args.id,
         name: args.name
       });
       return newAuthor.save();
     }
   },
   addBook: {
    type: bookType,
    args: {
      id: {type: GraphQLID},
      name: {type: GraphQLString},
      genre: {type: GraphQLString},
      authorId: {type: GraphQLID}
    },
    resolve(parent, args){
      const newBook = new Book({
        _id: args.id,
        name: args.name,
        genre: args.genre,
        authorId: args.authorId,
      });
      return newBook.save();
    }
  }
 } 
});
module.exports = new GraphQLSchema({
  query: rootQuery,
  mutation
});