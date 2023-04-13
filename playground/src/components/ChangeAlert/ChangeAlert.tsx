import { withLocalStorageListener } from "./withLocalStorageListener";
import "./style.css";
export interface ChangeAlertProps {
  show: boolean;
  toggleShow: () => void;
}

export const ChangeAlert = ({ show, toggleShow }: ChangeAlertProps) => {
  if (show)
    return (
      <div className="calert">
        <button className="calert__btn" onClick={() => toggleShow()}>
          Reload
        </button>
        <p className="calert__info">
          New changes have ocurred, please click the reload button.
        </p>
      </div>
    );
  else return null;
};

export const ChangeAlertWithLocalStorageListener =
  withLocalStorageListener(ChangeAlert);
