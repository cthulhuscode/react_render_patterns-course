import { FC, useEffect, useState } from "react";
import { ChangeAlertProps } from "./ChangeAlert";

export const withLocalStorageListener = (Component: FC<ChangeAlertProps>) => {
  return function WrappedComponentWithLocalStorageListener({
    synchronize,
  }: {
    synchronize: () => void;
  }) {
    const [storageChanged, setStorageChanged] = useState(false);

    useEffect(() => {
      window.addEventListener("storage", (e) => {
        if (e.key === "todos_v1") {
          setStorageChanged(true);
        }
      });
    }, []);

    const toggleShow = () => {
      setStorageChanged(false);
      synchronize();
    };

    return <Component show={storageChanged} toggleShow={toggleShow} />;
  };
};
