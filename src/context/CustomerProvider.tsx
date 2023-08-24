import { createContext, ReactNode, useState } from "react";
import { ICustomer, ICustomerContext } from "./TypeContext";

interface CustomerProviderProps {
  children: ReactNode;
}

const CustomerArr = [
  { name: "Devops", id: "devops" },
  { name: "Monitoring", id: "monitoring" },
  { name: "Space", id: "space" },
  { name: "Regex", id: "regex" },
];

export const customerContext = createContext({} as ICustomerContext);

export function CustomerProvider({ children }: CustomerProviderProps) {
  const [customers, setCustomer] = useState<ICustomer[]>(CustomerArr);
  const [selectCustomer, setSelectCustomer] = useState<ICustomer>(customers[0]);
  const [isLoadingCustomer, setLoadingCustomer] = useState<boolean>(false);

  return (
    <customerContext.Provider
      value={{
        customers,
        setCustomer,
        selectCustomer,
        setSelectCustomer,
        isLoadingCustomer,
        setLoadingCustomer,
      }}
    >
      {children}
    </customerContext.Provider>
  );
}
