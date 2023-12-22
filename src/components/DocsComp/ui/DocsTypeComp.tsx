import { DocsExplorerType, SchemaTypeObj } from '@/shared/types';

import BackDocsBtn from './BackDocsBtn';
import getTypeName from '../lib/helpers/getTypeName';
import separateString from '../lib/helpers/separateString';

const DocsTypeComp = ({ explorer, currType }: { explorer: DocsExplorerType; currType: SchemaTypeObj }) => {
  function clinkHandler(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, typeName: string) {
    e.preventDefault();
    explorer.next(typeName);
  }

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
            <span className="text-tertiary">{arg.name}</span>:&nbsp;
            {before}
            <a className="text-docs-link-text-color hover:underline" href={link} onClick={(e) => clinkHandler(e, link)}>
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
        <span className="text-docs-field-text-color">{field.name}</span>
        {args.length > 0 && '('}
        {args}
        {args.length > 0 && ')'}: {prevType}
        <a
          className="text-docs-link-text-color hover:underline"
          href={typeLink}
          onClick={(e) => clinkHandler(e, typeLink)}
        >
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
          className="text-docs-link-text-color hover:underline"
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
        <a
          className="text-docs-link-text-color hover:underline"
          href={type.name}
          onClick={(e) => clinkHandler(e, type.name)}
        >
          {type.name}
        </a>
      </li>
    );
  });
  const interfaces = currType?.interfaces?.map((inter) => {
    return (
      <li key={inter.name}>
        <a
          className="text-docs-link-text-color hover:underline"
          href={inter.name}
          onClick={(e) => clinkHandler(e, inter.name)}
        >
          {inter.name}
        </a>
      </li>
    );
  });
  return (
    <div className="p-10 py-[56px] text-left text-on-surface sm:px-[56px]">
      <BackDocsBtn onClick={() => explorer.back()} title={explorer.prev()} />
      <h2 className="mt-8 w-full text-3xl">{currType?.name}</h2>
      <p className="mt-8">{currType?.description}</p>
      {interfaces && interfaces?.length > 0 && <h3 className="text-xl">Implements:</h3>}
      <ul className="mt-8 flex flex-col gap-5">{interfaces}</ul>
      {isFields && <h3 className="text-xl">Fields:</h3>}
      <ul className="mt-8 flex flex-col gap-5">{fields}</ul>
      <ul className="mt-8 flex flex-col gap-5">{inputFields}</ul>
      {enumValues && <h3 className="text-xl">Enum values:</h3>}
      <ul className="mt-8 flex flex-col gap-5">{enumValues}</ul>
      {possibleTypes && <h3 className="text-xl">Implementations</h3>}
      <ul className="mt-8 flex flex-col gap-5">{possibleTypes}</ul>
    </div>
  );
};

export default DocsTypeComp;
