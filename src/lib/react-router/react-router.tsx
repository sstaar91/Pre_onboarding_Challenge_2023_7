import { useEffect, useState } from "react";

interface RouteType {
  path: string;
  element: React.ReactNode;
}

interface Props {
  children: React.ReactElement<RouteType>[];
}

const Router = ({ children }: Props) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleSetPathName = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handleSetPathName);
    return () => {
      window.removeEventListener("popstate", handleSetPathName);
    };
  }, [currentPath]);

  return children.filter((ele) => ele.props.path === currentPath);
};

const Route = ({ element }: RouteType) => {
  return <>{element}</>;
};

export { Router, Route };
