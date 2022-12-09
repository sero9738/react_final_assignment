import NavigationItem from "../NavigationItem/NavigationItem";

interface NavigationProps {
    currentRoute: string;
    setRouteCallback: any;
  }
  
  function Navigation({
    currentRoute,
    setRouteCallback,
  }: NavigationProps) {
    return (
      <nav id="nav">
        <NavigationItem
          name={"LIST"}
          route={"LIST"}
          currentRoute={currentRoute}
          setRouteCallback={setRouteCallback}
        />
        <NavigationItem
          name={"CREATE"}
          route={"CREATE"}
          currentRoute={currentRoute}
          setRouteCallback={setRouteCallback}
        />
      </nav>
    );
  }
  
  export default Navigation;