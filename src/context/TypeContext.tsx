import React from "react";

export interface ICustomer {
  name: string;
  id: string;
}
export interface ICustomerContext {
  customers: ICustomer[];
  setCustomer: React.Dispatch<React.SetStateAction<ICustomer[]>>;
  selectCustomer: ICustomer;
  setSelectCustomer: React.Dispatch<React.SetStateAction<ICustomer>>;
  isLoadingCustomer: boolean;
  setLoadingCustomer: React.Dispatch<React.SetStateAction<boolean>>;
}
