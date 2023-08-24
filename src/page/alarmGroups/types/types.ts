

export interface INotificationFilter{
  uuid:string,
  notificationName:string;
  selectGroup:IFilterGroup;
  ticket?: boolean;
  email?:string[];
  phone?:string[];
  tag?:string[]
}

export interface IFilterGroup {
    groupName: string
    values?: IFilterValues[]
  }
  
  export interface IFilterFlow {
    id: string,
    name: string,
    type?: string
    data?: IFilterValues
  }
  

  export interface IFilterValues {
    filterName?: string
    filterValues?: IValueTypes[]
  }
  
  export interface IValueTypes {
    filterValue: string
    type: string
  }
