import { ReactFlowJsonObject, XYPosition } from "reactflow";

 export type NodeType = {
  id: string;
  type?: string;
  position: XYPosition;
  data: IDataNode;
};
 
 
export type FlowType = {
  name: string;
  id: string;
  data: ReactFlowJsonObject;
  description: string;
  style?: FlowStyleType;
};


export type FlowStyleType = {
  emoji: string;
  color: string;
  flow_id: string;
};
 export interface IDataNode  {
    id?: string;
    type?: string;
    name?: string;
    position?:any
    data?: {
      host_ip?:string,
      username?: string,  
      password?: string,    
      collection?: string,
      output?: string,
      url?:string,
      dest_path?: string,
      parameters?:INodeParameters[];
      ansible?: IAnsible;
    };
  }


 export interface INodeParameters{
    parameter_name?: string,
    parameter_type?:string,
    values?: any
}


export interface IAnsible{
  name?: string;
  module?:string;
  arguments?: IArguments;
}

  
export interface IArguments{
  url?:string;
  dest?:string
  hostname?: string;
  username?: string;
  password?: string;
  validate_certs?:string
}
