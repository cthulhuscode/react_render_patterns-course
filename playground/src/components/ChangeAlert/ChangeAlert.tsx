import { Dispatch, SetStateAction } from "react";
import { withLocalStorageListener } from "./withLocalStorageListener";

export interface ChangeAlertProps {
  show: boolean;
  toggleShow: Dispatch<SetStateAction<boolean>>;
}

export const ChangeAlert = ({ show, toggleShow }: ChangeAlertProps) => {
  if (show) return <div>Hubo cambios</div>;
  else return null;
};

export const ChangeAlertWithLocalStorageListener =
  withLocalStorageListener(ChangeAlert);
