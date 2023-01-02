import { useFloating } from "@floating-ui/react";
import { createContext, PropsWithChildren, RefObject, useContext } from "react";

interface NavItemContext {
    active: boolean;
    surfaceExpanded?: boolean;
    expansionAnchor?: HTMLElement | undefined;
    floating: ReturnType<typeof useFloating>;
}

const NavContext = createContext<NavItemContext>(undefined as any);

export function useNavItem() {
  const value = useContext(NavContext);
  return value;
}

export function ProvideNavItemContext(
  props: PropsWithChildren<{ value: NavItemContext }>
) {
  return (
    <NavContext.Provider value={props.value}>
      {props.children}
    </NavContext.Provider>
  );
}
