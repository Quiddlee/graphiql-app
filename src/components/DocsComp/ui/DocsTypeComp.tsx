import { swapiSchema } from '@/shared/constants/schemaData';
import { SchemaTypeFieldOfType, SchemaTypeObj } from '@/shared/types';

type SchemaType = typeof swapiSchema;

const DocsTypeComp = ({
  explorer,
  apiSchema,
}: {
  explorer: {
    current: () => string;
    next: (elem: string) => void;
    prev: () => string;
    isDocs: () => boolean;
    back: () => void;
  };
  apiSchema: SchemaType;
}) => {
  function clinkHandler(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, typeName: string) {
    e.preventDefault();
    explorer.next(typeName);
  }

  function getTypeName(type: SchemaTypeFieldOfType) {
    if (type?.name) return type?.name;

    const modifiers: string[] = [];

    if (type?.kind === 'NON_NULL') modifiers.push('!');
    if (type?.kind === 'LIST') modifiers.push('[]');

    function getOfTypeName(argOfType: SchemaTypeFieldOfType): number | string {
      if (argOfType?.name) {
        return modifiers.push(argOfType.name);
      }
      if (argOfType?.kind === 'NON_NULL') modifiers.push('!');
      if (argOfType?.kind === 'LIST') modifiers.push('[]');

      return getOfTypeName(argOfType?.ofType as SchemaTypeFieldOfType);
    }

    getOfTypeName(type?.ofType as SchemaTypeFieldOfType);

    const output = modifiers.reduceRight((acc, curr) => {
      if (curr === '!') return `${acc}!`;
      if (curr === '[]') return `[${acc}]`;
      return acc + curr;
    });

    return output;
  }

  function separateString(inputString: string) {
    const regex = /([^a-zA-Z]*)([a-zA-Z]+)([^a-zA-Z]*$)/;
    const matches = inputString.match(regex);

    if (matches) {
      const [, beforeLetters, letters, afterLetters] = matches;
      return [beforeLetters, letters, afterLetters];
    }
    return ['', inputString, ''];
  }

  const currType: SchemaTypeObj = apiSchema.data.__schema.types.find(
    (elem) => elem.name === explorer.current(),
  ) as SchemaTypeObj;
  const fields = currType?.fields?.map((field) => {
    const args = field.args.map((arg, i) => {
      const argTypeName = getTypeName(arg.type);
      const [before, link, after] = separateString(argTypeName);
      const separation = field.args.length > 1;
      const beforeSeparator = <br />;
      const afterSeparator = i >= field.args.length - 1 ? <br /> : null;
      return (
        <>
          {separation && beforeSeparator}
          <span className={separation ? 'pl-3' : ''} key={argTypeName}>
            <span className="text-red-400">{arg.name}</span>:&nbsp;
            {before}
            <a className="text-yellow-400" href={link} onClick={(e) => clinkHandler(e, link)}>
              {link}
            </a>
            {after}
          </span>
          {separation && afterSeparator}
        </>
      );
    });
    const returnType = getTypeName(field.type);
    const [prevType, typeLink, afterType] = separateString(returnType);
    return (
      <li key={field.name}>
        <span className="text-blue-400">{field.name}</span>
        {args.length > 0 && '('}
        {args}
        {args.length > 0 && ')'}: {prevType}
        <a className="text-yellow-400" href={typeLink} onClick={(e) => clinkHandler(e, typeLink)}>
          {typeLink}
        </a>
        {afterType}
        <br />
        {field.description}
      </li>
    );
  });
  const inputFields = currType?.inputFields?.map((field) => {
    return (
      <li key={field.name}>
        {field.name}:&nbsp;
        <a
          className="text-yellow-400"
          href={field?.type?.name || '#'}
          onClick={(e) => clinkHandler(e, field?.type?.name as string)}
        >
          {field?.type?.name}
        </a>
      </li>
    );
  });
  const isFields = fields || inputFields;
  const enumValues = currType?.enumValues?.map((value) => {
    return <li key={value.name}>{value.name}</li>;
  });
  const possibleTypes = currType?.possibleTypes?.map((type) => {
    return (
      <li key={type.name}>
        <a className="text-yellow-400" href={type.name} onClick={(e) => clinkHandler(e, type.name)}>
          {type.name}
        </a>
      </li>
    );
  });
  const interfaces = currType?.interfaces?.map((inter) => {
    return (
      <li key={inter.name}>
        <a className="text-yellow-400" href={inter.name} onClick={(e) => clinkHandler(e, inter.name)}>
          {inter.name}
        </a>
      </li>
    );
  });
  return (
    <div>
      <button onClick={() => explorer.back()} type="button">
        &lt;&nbsp;{explorer.prev()}
      </button>
      <h2>{currType?.name}</h2>
      <p>{currType?.description}</p>
      {interfaces && interfaces?.length > 0 && <h3>Implements:</h3>}
      <ul className="flex flex-col gap-[20px]">{interfaces}</ul>
      {isFields && <h3>Fields:</h3>}
      <ul className="flex flex-col gap-[20px]">{fields}</ul>
      <ul className="flex flex-col gap-[20px]">{inputFields}</ul>
      {enumValues && <h3>Enum values:</h3>}
      <ul className="flex flex-col gap-[20px]">{enumValues}</ul>
      {possibleTypes && <h3>Implementations</h3>}
      <ul className="flex flex-col gap-[20px]">{possibleTypes}</ul>
    </div>
  );
};

export default DocsTypeComp;
