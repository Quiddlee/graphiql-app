import { createContext, Dispatch, PropsWithChildren, SetStateAction, useMemo, useState } from 'react';

type TEditorToolsContext = {
  isExpanded: boolean;
  setIsExpanded: Dispatch<SetStateAction<boolean>>;
};

export const EditorToolsContext = createContext<TEditorToolsContext>({} as TEditorToolsContext);

function EditorToolsProvider({ children }: PropsWithChildren) {
  const [isExpanded, setIsExpanded] = useState(true);

  const contextValue = useMemo(
    () => ({
      isExpanded,
      setIsExpanded,
    }),
    [isExpanded],
  );

  return <EditorToolsContext.Provider value={contextValue}>{children}</EditorToolsContext.Provider>;
}

export default EditorToolsProvider;
