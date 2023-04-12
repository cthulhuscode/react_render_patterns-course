import { FC, useState } from "react";
import { ChangeAlertProps } from "./ChangeAlert";

export const withLocalStorageListener = (Component: FC<ChangeAlertProps>) => {
  return function WrappedComponentWithLocalStorageListener(props: any) {
    const [storageChanged, setStorageChanged] = useState(false);

    return <Component show={storageChanged} toggleShow={setStorageChanged} />;
  };
};
