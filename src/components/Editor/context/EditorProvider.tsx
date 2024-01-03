import { createContext, PropsWithChildren, useCallback, useMemo, useState } from 'react';

type TEditorContext = {
  readonly query: [number, () => void];
  readonly headers: [number, () => void];
  readonly variables: [number, () => void];
  invalidateKeys: () => void;
};

export const EditorContext = createContext<TEditorContext>({} as TEditorContext);

function generateRandomKey() {
  return Math.random() * Math.random();
}

function EditorProvider({ children }: PropsWithChildren) {
  const [queryKey, setQueryKey] = useState(() => generateRandomKey());
  const [variablesKey, setVariablesKey] = useState(() => generateRandomKey());
  const [headersKey, setHeadersKey] = useState(() => generateRandomKey());

  const invalidateQueryKey = useCallback(() => {
    setQueryKey(generateRandomKey());
  }, []);

  const invalidateVariablesKey = useCallback(() => {
    setVariablesKey(generateRandomKey());
  }, []);

  const invalidateHeadersKey = useCallback(() => {
    setHeadersKey(generateRandomKey());
  }, []);

  const invalidateKeys = useCallback(() => {
    invalidateQueryKey();
    invalidateVariablesKey();
    invalidateHeadersKey();
  }, [invalidateHeadersKey, invalidateQueryKey, invalidateVariablesKey]);

  const value = useMemo<TEditorContext>(
    () => ({
      query: [queryKey, invalidateQueryKey] as const,
      headers: [headersKey, invalidateHeadersKey] as const,
      variables: [variablesKey, invalidateVariablesKey] as const,
      invalidateKeys,
    }),
    [
      headersKey,
      invalidateHeadersKey,
      invalidateKeys,
      invalidateQueryKey,
      invalidateVariablesKey,
      queryKey,
      variablesKey,
    ],
  );

  return <EditorContext.Provider value={value}>{children}</EditorContext.Provider>;
}

export default EditorProvider;
