import { useTheme } from "layouts/theme/ThemeContext";
import { useCallback } from "react";
import { Handle, Position } from "reactflow";

const handleStyle = { left: 10 };

function TextUpdaterNode({
  data,
  isConnectable,
}: {
  data: any;
  isConnectable: any;
}) {
  const { theme } = useTheme();
  const onChange = useCallback((evt: { target: { value: any } }) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div
      style={{
        height: "70px",
        border: `1px solid ${theme.palette.primary.main}`,
        padding: " 5px",
        borderRadius: "5px",
        color: theme.palette.primary.main,
        backgroundColor: "transparent",
      }}
    >
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
      />
      <div>
        <label
          style={{
            display: "block",
            fontSize: " 12px",
          }}
          htmlFor="text"
        >
          Text:
        </label>
        <input
          style={{
            backgroundColor: "transparent",
            border: `1px solid ${theme.palette.primary.dark}`,
          }}
          id="text"
          name="text"
          onChange={onChange}
          className="nodrag"
        />
      </div>

      <Handle
        type="source"
        position={Position.Bottom}
        id="b"
        isConnectable={isConnectable}
      />
    </div>
  );
}

export default TextUpdaterNode;
