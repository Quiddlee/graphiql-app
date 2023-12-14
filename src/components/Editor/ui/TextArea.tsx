const DEFAULT_VALUE = `# Welcome to GraphiQL
#
# GraphiQL is an in-browser tool for writing, validating, and
# testing GraphQL queries.
#
# Type queries into this side of the screen, and you will see intelligent
# typeaheads aware of the current GraphQL type schema and live syntax and
# validation errors highlighted within the text.
#
# GraphQL queries typically start with a "{" character. Lines that start
# with a # are ignored.
#
# An example GraphQL query might look like:
#
# {
#   field(arg: "value") {
#   subField
# }
`;

const TextArea = () => {
  return (
    <textarea
      name="editor"
      id="editor"
      placeholder={DEFAULT_VALUE}
      className="h-full w-full resize-none bg-transparent text-on-surface-text outline-none placeholder:text-outline-variant-text"
    />
  );
};

export default TextArea;
