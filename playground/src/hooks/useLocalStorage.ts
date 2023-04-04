import { useState, useEffect } from "react";

export const useLocalStorage = (
  itemName: string,
  initialValue: any | [] = []
) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<boolean | Error>(false);
  const [item, setItem] = useState(initialValue);

  useEffect(() => {
    setTimeout(() => {
      try {
        let parsedItem;
        const localStorageItem = localStorage.getItem(itemName);

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = [];
        } else parsedItem = JSON.parse(localStorageItem);

        setItem(parsedItem);
        setLoading(false);
      } catch (e) {
        setError(e as Error);
        setLoading(false);
      }
    }, 2000);
  }, []);

  const saveItem = (newItem: any) => {
    try {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    } catch (e) {
      setError(e as Error);
      setLoading(false);
    }
  };

  return { item, error, loading, setItem: saveItem };
};
