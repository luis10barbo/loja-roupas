import { PropsWithChildren, createContext, useEffect, useState } from "react";

interface Size {
  width: number;
  height: number;
}

interface Position {
  x: number;
  y: number;
}

type WindowPropertiesValues = { windowSize: Size; scrollPosition: Position };
export const WindowPropertiesContext = createContext(
  {} as WindowPropertiesValues
);

export const WindowPropertiesProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [windowSize, setWindowSize] = useState<Size>(null as unknown as Size);

  const [scrollPosition, setScrollPosition] = useState<Position>(
    null as unknown as Position
  );

  useEffect(() => {
    handleWindowResize();
    handleWindowScroll();

    function handleWindowResize() {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }

    function handleWindowScroll() {
      console.log(window.scrollY);
      setScrollPosition({ x: window.scrollX, y: window.scrollY });
    }

    window.addEventListener("resize", handleWindowResize);
    window.addEventListener("scroll", handleWindowScroll);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
      window.removeEventListener("scroll", handleWindowScroll);
    };
  }, []);
  return (
    <WindowPropertiesContext.Provider value={{ windowSize, scrollPosition }}>
      {windowSize && scrollPosition ? (
        children
      ) : (
        <div className="absolute top-0 flex h-screen w-screen items-center justify-center">
          carregando
        </div>
      )}
    </WindowPropertiesContext.Provider>
  );
};
