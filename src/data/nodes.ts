export default [
    {
        id: "1",
        type: "input",
        data: {

            label: "Start",
            parameters: [
                {paramName: "path", paramType: "text"}
            ],
            isConnectable: true, 
            maxConnections: 1 
        }
    }, 
    {
        id: "2",
        type: "actionNode",
        data: {
            label: "Orta",
            name:"Check In Visitor",
            parameters: [
                {paramName: "path", paramType: "text"}
            ]
        }
        ,
            isConnectable: true, 
            maxConnections: 1 
    }, 
    {
        id: "3",
        type: "actionNode",
        data: {
            label: "Yan",
            parameters: [
                {paramName: "path", paramType: "text"}
            ]
        }
    }, 
    {
        id: "4",
        type: "newNodes",
        data: {
            label: "Kenar",
            parameters: [
                {paramName: "path", paramType: "text"}
            ],
            
            isConnectable: true, 
            maxConnections: 1 
        }
    }, 
    {
        id: "5",
        type: "newNodes",
        data: {
            label: "Ön",
            parameters: [
                {paramName: "path", paramType: "text"}
            ]
        }
    }, 
    {
        id: "5",
        type: "output",
        data: {
            label: "Son",
            parameters: [
                {paramName: "path", paramType: "text"}
            ]
        }
    }, 

  
    
]
