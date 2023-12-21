export const EDITOR_DEFAULT_VALUE = `query GetFilm($filmId: ID!) {
  film(id: $filmId) {
    title
    director
    releaseDate
    openingCrawl
  }
}`;
// `# Welcome to GraphiQL
// #
// # GraphiQL is an in-browser tool for writing, validating, and
// # testing GraphQL queries.
// #
// # Type queries into this side of the screen, and you will see intelligent
// # typeaheads aware of the current GraphQL type schema and live syntax and
// # validation errors highlighted within the text.
// #
// # GraphQL queries typically start with a "{" character. Lines that start
// # with a # are ignored.
// #
// # An example GraphQL query might look like:
// #
// #     {
// #       field(arg: "value") {
// #         subField
// #       }`;

export const EDITOR_TOOLS_DEFAULT_VALUE = `{
  "filmId": "ZmlsbXM6MQ=="
}`;
// `{
//   ”schedule”: {
//     “pipelineID”: “eqweqwEEWEQWRQWFSADFas”,
//       “cronline: “@midnight”,
//       “label”: “Nightly build”
//   }
// }`;
