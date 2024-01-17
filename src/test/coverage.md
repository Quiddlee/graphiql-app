----------------------------------------|---------|----------|---------|---------|----------------------------------------
File                                    | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------------------------------------|---------|----------|---------|---------|----------------------------------------
All files                               |   65.63 |    56.82 |   59.87 |   67.19 |
 src                                    |       0 |      100 |       0 |       0 |
  firebase.ts                           |       0 |      100 |       0 |       0 | 3-12
  main.tsx                              |       0 |      100 |     100 |       0 | 15-17
 src/app                                |   83.33 |       50 |     100 |   83.33 |
  App.tsx                               |   83.33 |       50 |     100 |   83.33 | 16
 src/components/DocsComp                |     100 |      100 |     100 |     100 |
  DocsComp.tsx                          |     100 |      100 |     100 |     100 |
 src/components/DocsComp/lib/helpers    |   84.61 |    86.36 |     100 |   81.25 |
  +getEndpointSchema.ts                  |   63.63 |       75 |     100 |   63.63 | 25-29
  getTypeName.ts                        |   95.45 |    93.75 |     100 |   93.33 | 26
  separateString.ts                     |   83.33 |       50 |     100 |   83.33 | 9
 src/components/DocsComp/lib/hooks      |     100 |       50 |     100 |     100 |
  useSchemaExplorer.ts                  |     100 |       50 |     100 |     100 | 16
 src/components/DocsComp/ui             |   83.75 |    87.17 |   67.56 |      84 |
  BackDocsBtn.tsx                       |     100 |      100 |     100 |     100 |
  ++CloseDocsBtn.tsx                      |       0 |      100 |       0 |       0 | 8-9
  DocsLoader.tsx                        |     100 |      100 |     100 |     100 |
  DocsModal.tsx                         |     100 |      100 |     100 |     100 |
  DocsOverlay.tsx                       |      90 |      100 |      80 |   88.88 | 30
  DocsRootComp.tsx                      |     100 |      100 |     100 |     100 |
  +DocsTypeComp.tsx                      |   74.19 |       80 |   42.85 |   74.19 | 27,58-64,73,76-81,89-94
  +SchemaFallbackUi.tsx                  |      50 |      100 |   33.33 |   66.66 | 16
  SuspenseFallback.tsx                  |     100 |      100 |     100 |     100 |
 src/components/Editor                  |     100 |      100 |     100 |     100 |
  Editor.tsx                            |     100 |      100 |     100 |     100 |
 src/components/Editor/context          |   71.42 |      100 |      60 |   66.66 |
  +EditorProvider.tsx                    |   71.42 |      100 |      60 |   66.66 | 22,26,30,34-36
 src/components/Editor/lib              |       0 |        0 |       0 |       0 |
  ++submitRequest.ts                      |       0 |        0 |       0 |       0 | 5-28
 src/components/Editor/lib/hooks        |   58.33 |    57.14 |      50 |   54.54 |
  ++useEditor.ts                          |       0 |        0 |       0 |       0 | 6-12
  useEditorUrlState.ts                  |    87.5 |       80 |   66.66 |   85.71 | 23
 src/components/Editor/ui               |   83.33 |    85.71 |   83.33 |   83.33 |
  EditorField.tsx                       |      80 |    85.71 |      75 |      80 | 28-31
  LineNumbers.tsx                       |     100 |      100 |     100 |     100 |
 src/components/EditorTools             |     100 |      100 |     100 |     100 |
  EditorTools.tsx                       |     100 |      100 |     100 |     100 |
 src/components/EditorTools/ui          |   61.53 |     37.5 |   54.54 |   68.57 |
  EditorToolsField.tsx                  |     100 |      100 |     100 |     100 |
  ++Header.tsx                            |   46.15 |        0 |      25 |   54.54 | 26-31,57
  HeadersEditor.tsx                     |   63.63 |    33.33 |   66.66 |      70 | 20-21,30
  VariablesEditor.tsx                   |   63.63 |    33.33 |   66.66 |      70 | 20-21,30
 src/components/ErrorBoundary           |       0 |        0 |       0 |       0 |
  ++ErrorBoundary.tsx                     |       0 |        0 |       0 |       0 | 15-33
 src/components/ErrorFallback           |      50 |      100 |       0 |      50 |
  +ErrorFallback.tsx                     |      50 |      100 |       0 |      50 | 2
 src/components/Footer                  |     100 |      100 |     100 |     100 |
  Footer.tsx                            |     100 |      100 |     100 |     100 |
 src/components/Header                  |   78.94 |      100 |   42.85 |   82.35 |
  +Header.tsx                            |   78.94 |      100 |   42.85 |   82.35 | 28,59,74
 src/components/Header/ui               |      80 |      100 |      50 |      80 |
  LangSwitcher.tsx                      |      80 |      100 |      50 |      80 | 13
 src/components/Nav                     |     100 |       50 |     100 |     100 |
  Nav.tsx                               |     100 |       50 |     100 |     100 | 11
 src/components/Nav/ui                  |   71.42 |    46.15 |   66.66 |   83.33 |
  NavItem.tsx                           |     100 |      100 |     100 |     100 |
  ++NavigationBar.tsx                     |   33.33 |      100 |       0 |   33.33 | 8-10
  +NavigationDrawer.tsx                  |   68.42 |       50 |   57.14 |   86.66 | 29,42
  VirtualScroll.tsx                     |     100 |        0 |     100 |     100 | 7
 src/components/RequestEditor           |   63.63 |       25 |   66.66 |      70 |
  RequestEditor.tsx                     |   63.63 |       25 |   66.66 |      70 | 21-22,39
 src/components/RequestEditor/lib       |       0 |        0 |       0 |       0 |
  ++formatRequest.ts                      |       0 |        0 |       0 |       0 | 14-79
 src/components/RequestEditor/lib/const |     100 |      100 |     100 |     100 |
  const.ts                              |     100 |      100 |     100 |     100 |
 src/components/RequestEditor/lib/hooks |       0 |        0 |       0 |       0 |
  ++useEditorSize.ts                      |       0 |        0 |       0 |       0 | 3-39
 src/components/RequestEditor/ui        |      68 |      100 |   33.33 |   69.56 |
  Controls.tsx                          |      68 |      100 |   33.33 |   69.56 | 38-42,46,111
 src/components/ResponseViewer          |   84.61 |       50 |      60 |   91.66 |
  ResponseViewer.tsx                    |   84.61 |       50 |      60 |   91.66 | 42
 src/components/SettingsPageComp        |   56.66 |       50 |   46.42 |   58.18 |
  ClearStorageComp.tsx                  |   66.66 |      100 |   33.33 |      80 | 19
  ++ClearUndo.tsx                         |    6.66 |      100 |       0 |    6.66 | 12-36
  ++ConfirmModal.tsx                      |      40 |        0 |      20 |      50 | 31-48
  DarkModeComp.tsx                      |    90.9 |       50 |     100 |   88.88 | 16
  +EndpointComp.tsx                      |   66.66 |      100 |   33.33 |   66.66 | 20-22
  LangBtns.tsx                          |     100 |      100 |     100 |     100 |
  LangSelectorComp.tsx                  |     100 |      100 |     100 |     100 |
  +PersistHeadersComp.tsx                |      75 |      100 |      50 |      75 | 22
 src/components/ViewList                |     100 |      100 |     100 |     100 |
  ViewList.tsx                          |     100 |      100 |     100 |     100 |
 src/components/ViewList/const          |     100 |      100 |     100 |     100 |
  const.ts                              |     100 |      100 |     100 |     100 |
 src/components/ViewList/context        |   42.18 |       40 |   28.57 |   45.45 |
  ++ViewProvider.tsx                      |   42.18 |       40 |   28.57 |   45.45 | 24-58,78-90,96-108,112,117-134,152-156
 src/components/ViewList/hooks          |      75 |       50 |     100 |     100 |
  useView.ts                            |      75 |       50 |     100 |     100 | 8
 src/components/ViewList/ui             |   95.65 |    82.14 |      90 |   95.31 |
  AddView.tsx                           |     100 |      100 |     100 |     100 |
  DeleteViewDialog.tsx                  |   92.85 |       50 |      80 |    92.3 | 43
  Details.tsx                           |     100 |     87.5 |     100 |     100 | 30
  RenameViewDialog.tsx                  |    91.3 |       75 |   85.71 |   90.47 | 31,54
  ViewItem.tsx                          |     100 |      100 |     100 |     100 |
 src/components/loginReg                |       0 |      100 |       0 |       0 |
  ++PassVisibilityIcon.tsx                |       0 |      100 |       0 |       0 | 4-5
  ++SubmitBtn.tsx                         |       0 |      100 |       0 |       0 | 13-14
 src/layouts                            |     100 |      100 |     100 |     100 |
  DocsModalLayout.tsx                   |     100 |      100 |     100 |     100 |
  MainLayout.tsx                        |     100 |      100 |     100 |     100 |
 src/locales                            |     100 |      100 |     100 |     100 |
  en.ts                                 |     100 |      100 |     100 |     100 |
  ru.ts                                 |     100 |      100 |     100 |     100 |
 src/pages                              |   42.55 |        0 |   26.66 |   46.51 |
  ++LoginPage.tsx                         |   33.33 |        0 |      25 |   35.29 | 38-51,81
  +Page404.tsx                           |      50 |      100 |       0 |      50 | 6
  +SettingsPage.tsx                      |   66.66 |      100 |   33.33 |      80 | 25
  ++SignUpPage.tsx                        |   36.84 |        0 |   16.66 |   41.17 | 39-48,78-92
  WelcomePage.tsx                       |     100 |      100 |     100 |     100 |
 src/pages/MainPage                     |     100 |       75 |     100 |     100 |
  MainPage.tsx                          |     100 |       75 |     100 |     100 | 20,83-84,87-96
 src/pages/MainPage/ui                  |     100 |    71.42 |     100 |     100 |
  RequestEditorResized.tsx              |     100 |    71.42 |     100 |     100 | 59,87-95,106
 src/router                             |      50 |       25 |      50 |      60 |
  ++AuthAllowedOnly.tsx                   |       0 |        0 |       0 |       0 | 6-9
  UnauthAllowedOnly.tsx                 |      80 |       50 |     100 |     100 | 8
  router.tsx                            |     100 |      100 |     100 |     100 |
 src/shared/Context                     |   65.21 |       30 |   63.15 |   65.67 |
  +AppContext.tsx                        |   76.92 |      100 |      50 |   76.92 | 27,31-32
  ++AuthContext.tsx                       |   48.71 |       25 |   44.44 |   47.36 | 27-29,36-41,48-53,59-62,78-80
  LanguageContext.tsx                   |    90.9 |       50 |     100 |     100 | 26
  authHook.ts                           |     100 |      100 |     100 |     100 |
  hooks.ts                              |     100 |      100 |     100 |     100 |
 src/shared/constants                   |     100 |      100 |     100 |     100 |
  authErrors.ts                         |     100 |      100 |     100 |     100 |
  const.ts                              |     100 |      100 |     100 |     100 |
  introspectionQuery.ts                 |     100 |      100 |     100 |     100 |
  localStorageKeys.ts                   |     100 |      100 |     100 |     100 |
  routes.ts                             |     100 |      100 |     100 |     100 |
  urlParams.ts                          |     100 |      100 |     100 |     100 |
  validationSchema.ts                   |     100 |      100 |     100 |     100 |
 src/shared/helpers                     |   78.26 |       50 |      75 |   77.27 |
  colorThemeSwitcher.ts                 |      60 |      100 |      50 |      60 | 7-8
  cookieHandlers.ts                     |     100 |      100 |     100 |     100 |
  notationLocalizer.ts                  |   66.66 |       50 |     100 |      60 | 39-44
  ++switchPassType.ts                     |       0 |        0 |       0 |       0 | 2
 src/shared/lib/helpers                 |   36.36 |        0 |    37.5 |   33.33 |
  calcInterpolation.ts                  |     100 |      100 |     100 |     100 |
  calcOneToZeroInterpolation.ts         |     100 |      100 |     100 |     100 |
  cn.ts                                 |     100 |      100 |     100 |     100 |
  ++isJsonValid.ts                        |      20 |      100 |       0 |      20 | 2-6
  ++jsonFormatter.ts                      |      20 |      100 |       0 |      20 | 2-5
  ++viewTransition.ts                     |       0 |        0 |       0 |       0 | 11-17
 src/shared/lib/hooks                   |   69.64 |    44.11 |   70.96 |      71 |
  useElementProp.ts                     |     100 |       50 |     100 |     100 | 29
  useInterpolation.ts                   |     100 |     92.3 |     100 |     100 | 37
  useLocalStorage.ts                    |      80 |       50 |   66.66 |      75 | 16
  useResize.ts                          |   61.36 |    21.87 |   72.72 |      60 | 48,53-68,78-81,100
  ++useScreen.ts                          |    12.5 |        0 |       0 |   15.38 | 9-27
  useScrollbar.ts                       |     100 |    71.42 |     100 |     100 | 21-26
  useUrl.ts                             |   85.71 |    66.66 |      80 |   91.66 | 45
 src/shared/ui                          |   71.42 |    66.66 |     100 |   75.75 |
  Blackout.tsx                          |      75 |       50 |     100 |   85.71 | 16
  Dialog.tsx                            |     100 |      100 |     100 |     100 |
  Fab.tsx                               |     100 |      100 |     100 |     100 |
  ++FilledButton.tsx                      |       0 |      100 |     100 |       0 | 6
  FilledIconButton.tsx                  |     100 |      100 |     100 |     100 |
  FilledTextField.tsx                   |     100 |      100 |     100 |     100 |
  ++FilledTonalButton.tsx                 |       0 |      100 |     100 |       0 | 6
  FilledTonalIconButton.tsx             |     100 |      100 |     100 |     100 |
  Icon.tsx                              |     100 |      100 |     100 |     100 |
  IconButton.tsx                        |     100 |      100 |     100 |     100 |
  Menu.tsx                              |     100 |      100 |     100 |     100 |
  ++MenuItem.tsx                          |       0 |      100 |     100 |       0 | 6
  ++OutlinedButton.tsx                    |       0 |      100 |     100 |       0 | 6
  ++OutlinedTextField.tsx                 |       0 |      100 |     100 |       0 | 6
  ++PrimaryTab.tsx                        |       0 |      100 |     100 |       0 | 6
  ResizeBar.tsx                         |   83.33 |       80 |     100 |     100 | 14
  Spinner.tsx                           |     100 |      100 |     100 |     100 |
  Switch.tsx                            |     100 |      100 |     100 |     100 |
  ++Tabs.tsx                              |       0 |      100 |     100 |       0 | 6
  TextButton.tsx                        |     100 |      100 |     100 |     100 |
 src/test/helpers                       |     100 |      100 |     100 |     100 |
  RenderWithRouter.tsx                  |     100 |      100 |     100 |     100 |
----------------------------------------|---------|----------|---------|---------|----------------------------------------
