import { createContext, Dispatch, PropsWithChildren, SetStateAction, useMemo, useState } from 'react';

type TEditorToolsContext = {
  isExpanded: boolean;
  isVariablesTab: boolean;
  setIsVariablesTab: Dispatch<SetStateAction<boolean>>;
  setIsExpanded: Dispatch<SetStateAction<boolean>>;
};

export const EditorToolsContext = createContext<TEditorToolsContext>({} as TEditorToolsContext);

function EditorToolsProvider({ children }: PropsWithChildren) {
  const [isVariablesTab, setIsVariablesTab] = useState(true);
  const [isExpanded, setIsExpanded] = useState(true);

  const contextValue = useMemo(
    () => ({
      isVariablesTab,
      setIsVariablesTab,
      isExpanded,
      setIsExpanded,
    }),
    [isExpanded, isVariablesTab],
  );

  return <EditorToolsContext.Provider value={contextValue}>{children}</EditorToolsContext.Provider>;
}

export default EditorToolsProvider;
