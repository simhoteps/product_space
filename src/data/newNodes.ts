import { Position } from 'reactflow';
export default [

    {
        id: "1",
        type: "customNode",
        name: "Get All Hosts",
        data: {
          host_ip: "deneme2",
          username: "deneme",  
          password: "deneme1",    
          collection: "community.vmware",
          output: "all_hosts",
          parameters: [
              {parameter_name: "host_ip",parameter_type: "text", values: ""},
              {parameter_name: "username",parameter_type: "text", values: ""},
              {parameter_name: "password",parameter_type: "text", values: ""},
           ],
          ansible: {
              name: "Gather info about all ESXi Host in given Cluster",
              module: "community.vmware.vmware_vm_info",
              arguments: {
                  hostname: "|| host_ip ||",
                  username: "|| username ||",
                  password: "|| password ||",
                  validate_certs: "false",
                },
             },
            },
    },
    {
        id: "2",
        type: "customNode",
        name: "Download installer",
        data: {
            url: "deneme2", 
            dest_path: "deneme",
            collection: "",
            output: "",
            parameters: [
                 {parameter_name: "url",parameter_type: "text", values: ""},
                 {parameter_name: "dest_path",parameter_type: "text", values: ""},
            ],
            ansible: {
                 name: "Download installer",
                 module: "win_get_url",
                 arguments: {url: "|| url ||", dest: "|| dest_path ||"}
        },},
    },

]





/* [{
    id: "1",
    type: "customNode",
    name: "Create Folder",
   position:"",
     data: {
        parameters: [
            {
              parameter_name: "dest_path",
              parameter_type: "text",
              values: "c:/users"
            },
            {
              parameter_name: "file_count",
              parameter_type: "number",
              values: 123
            },
            {
              parameter_name: "file_type",
              parameter_type: "multiple",
              values: ["1", "2", "3"]
            }, 
            {
              parameter_name: "is_folder",
              parameter_type: "boolean",
              values: true
            }
          ],
          label: "Start",
        dest_path: "c:/users/deneme",
        ansible: {
            name: "ansible create directory example1",
            "ansible.windows.win_file": {
                path: "|| dest_path ||",
                state: "touch"
            }
        }
    }
},
{
    id: "2",
    type: "customNode",
    name: "Copy Folder",
    position:"",
     data: {
        label: "Start",
        dest_path: "c:/users/deneme",
        ansible: {
            name: "ansible create directory example2",
            "ansible.windows.win_file": {
                path: "{{ dest_path }}",
                state: "touch"
            }
        }
    }
},
{
    id: "3",
    type: "customNode",
    name: "Delete Folder",   position:"",
     data: {
          label: "Start",
        dest_path: "c:/users/deneme",
        ansible: {
            name: "ansible create directory example2",
            "ansible.windows.win_file": {
                path: "{{ dest_path }}",
                state: "touch"
            }
        }
    }
},
{
    id: "4",
    type: "customNode",
    name: "Restart service",
    position:"",
     data: {
        label: "Start",
        serviceName: "winspy.exe",
        ansible: {
            name: "Service Stop",
            win_service: {
                name: "{{ ServiceName }}",
                state: "stopped"
            }
        }
    }
}
] */