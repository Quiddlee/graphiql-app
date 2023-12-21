import { useState } from 'react';

import { rickAndMortySchema } from '@/shared/constants/schemaData';

type SchemaTypeFieldOfType = {
  kind: string;
  name?: string | null;
  ofType?: SchemaTypeFieldOfType;
} | null;

type SchemaTypeFieldArgs = {
  name: string;
  description?: string | null;
  type: {
    kind: string;
    name?: string | null;
    ofType?: SchemaTypeFieldOfType;
  };
  defaultValue?: null | string;
};

type SchemaTypeField = {
  name: string;
  description?: string;
  args: SchemaTypeFieldArgs[];
  type: SchemaTypeFieldOfType;
  isDeprecated?: false;
  deprecationReason?: null | string;
};

type SchemaTypeObj = {
  kind: string;
  name: string;
  description?: string;
  fields: SchemaTypeField[];
  inputFields: SchemaTypeField[] | null;
  interfaces: [];
  enumValues: null;
  possibleTypes?: null | { kind: string; name: string };
};

const DocsRoot = ({
  types,
  explorer,
}: {
  types: SchemaTypeObj[];
  explorer: {
    current: () => string;
    next: (elem: string) => void;
    prev: () => string;
    isDocs: () => boolean;
    back: () => void;
  };
}) => {
  function clinkHandler(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, typeName: string) {
    e.preventDefault();
    explorer.next(typeName);
  }
  const allTypes = types
    .filter((type) => type.name[0] !== '_' && type.name[1] !== '_')
    .map((type, i) => {
      if (i > 0) {
        return (
          <li key={type.name}>
            <a className="text-yellow-400" href={type.name} onClick={(e) => clinkHandler(e, type.name)}>
              {type.name}
            </a>
          </li>
        );
      }
      return null;
    });
  return (
    <div>
      <h3>Docs</h3>
      <p>A GraphQL schema provides a root type for each kind of operation.</p>
      <h4>Root types:</h4>
      <p>
        query:&nbsp;
        <a className="text-yellow-400" href={types[0].name} onClick={(e) => clinkHandler(e, types[0].name)}>
          {types[0].name}
        </a>
      </p>
      <h4>All schema types:</h4>
      <ul>{allTypes}</ul>
    </div>
  );
};

const DocsType = ({
  explorer,
}: {
  explorer: {
    current: () => string;
    next: (elem: string) => void;
    prev: () => string;
    isDocs: () => boolean;
    back: () => void;
  };
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

  const currType = rickAndMortySchema.data.__schema.types.find((elem) => elem.name === explorer.current());
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
        <a className="text-yellow-400" href={field.type.name} onClick={(e) => clinkHandler(e, field.type.name)}>
          {field.type.name}
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
      {interfaces && <h3>Implements:</h3>}
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

const MyDocs = () => {
  function useSchemaExplorer() {
    const [typeNames, setTypeNames] = useState(['Docs']);

    function current() {
      return typeNames[typeNames.length - 1];
    }
    function prev() {
      return typeNames[typeNames.length - 2];
    }
    function next(elem: string) {
      setTypeNames((prevEl) => [...prevEl, elem]);
    }
    function back() {
      if (typeNames.length > 1) {
        setTypeNames((prevEl) => prevEl.filter((_, i) => i < prevEl.length - 1));
      }
    }
    function isDocs() {
      return current() === 'Docs';
    }

    return { current, next, prev, isDocs, back };
  }
  const myExplorer = useSchemaExplorer();

  const content = myExplorer.isDocs() ? (
    <DocsRoot types={rickAndMortySchema.data.__schema.types as SchemaTypeObj[]} explorer={myExplorer} />
  ) : (
    <DocsType explorer={myExplorer} />
  );
  return <div>{content}</div>;
};

export default MyDocs;
