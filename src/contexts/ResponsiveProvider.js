import { createContext, useState } from "react";

export const ResponsiveContext = createContext();

const ResponsiveProvider = ({children}) => {
  const [noteContainerActive, setNoteContainerActive] = useState(true);
  const [editorContainerActive, setEditorContainerActive] = useState(false);

  const enableEditorView = () => {
    setNoteContainerActive(false);
    setEditorContainerActive(true);
  };

  const enableNotesContainerView = () => {
    setNoteContainerActive(true);
    setEditorContainerActive(false);
  };

  return (
    <ResponsiveContext.Provider value={{ noteContainerActive, enableEditorView, enableNotesContainerView }}>
      {children}
    </ResponsiveContext.Provider>
  );
};

export default ResponsiveProvider;