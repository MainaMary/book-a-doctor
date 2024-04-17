import { useState } from "react";

const useTab = (initialValue: string, name: string) => {
  const [tabs, setTabs] = useState(initialValue);
  const handleTabNavigation = () => {
    setTabs(name);
    if (name) {
      setTabs(name);
    }
  };
  return { tabs, handleTabNavigation };
};
export default useTab;
