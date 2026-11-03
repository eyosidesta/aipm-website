import React, { createContext, useCallback, useContext, useMemo, useState } from "react";

const LightboxContext = createContext(null);

export function LightboxProvider({ children }) {
  const [state, setState] = useState(null);

  const open = useCallback(({ title, note, img }) => {
    setState({ title, note, img });
  }, []);
  const close = useCallback(() => setState(null), []);

  const value = useMemo(() => ({ state, open, close }), [state, open, close]);

  return (
    <LightboxContext.Provider value={value}>
      {children}
    </LightboxContext.Provider>
  );
}

export function useLightbox() {
  const ctx = useContext(LightboxContext);
  if (!ctx) {
    throw new Error("useLightbox must be used within a LightboxProvider");
  }
  return ctx;
}
