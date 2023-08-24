import React, { useEffect } from "react";
import { EdgeProps, getBezierPath } from "reactflow";
import { Button, Popover, styled } from "@mui/material";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import "../index.css";
import { useTheme } from "layouts/theme/ThemeContext";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ButtonGroups from "./components/ButtonGroups";
import { observer } from "mobx-react";
import { useStores } from "utils/hooks/use_store";

const EdgeButton = styled(Button)(({ theme }) => ({
  minWidth: "24px",
  width: "40px",
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.primary.main} `,
  "&:hover": {
    backgroundColor: "#DE481E",
  },
}));

const foreignObjectSize = 40;

function CustomEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
  label,
  selected,
}: EdgeProps) {
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });
  const { theme } = useTheme();
  const { mainStore } = useStores();

  useEffect(() => {
    mainStore.setEdgesId(id);
  }, []);

  return (
    <>
      <path
        id={id}
        style={style}
        className="react-flow__edge-path"
        d={edgePath}
        markerEnd={markerEnd}
      />
      <foreignObject
        width={foreignObjectSize}
        height={foreignObjectSize}
        x={labelX - foreignObjectSize / 2}
        y={labelY - foreignObjectSize / 2}
        className="edgebutton-foreignobject"
        requiredExtensions="http://www.w3.org/1999/xhtml"
      >
        <PopupState variant="popover" popupId="demo-popup-popover">
          {(popupState) => (
            <div>
              <EdgeButton {...bindTrigger(popupState)}>
                <MoreHorizIcon />
              </EdgeButton>
              <Popover
                sx={{ marginTop: "10px" }}
                {...bindPopover(popupState)}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
              >
                <ButtonGroups id={id} label={label} />
              </Popover>
            </div>
          )}
        </PopupState>
      </foreignObject>
    </>
  );
}

export default observer(CustomEdge);

/* import React, { useState, useRef, useEffect } from "react";
import { EdgeProps, getBezierPath } from "reactflow";
import { Fade, Paper, Popper } from "@mui/material";
import "../index.css";

const foreignObjectSize = 40;

export default function CustomEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
  selected,
}: EdgeProps) {
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  console.log(
    "EdgeProps",
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition
  );
  const [isPopperOpen, setIsPopperOpen] = useState(false);
  const anchorElementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selected) {
      setTimeout(() => setIsPopperOpen(true), 350);
    }
  }, [selected]);

  return (
    <>
      <path
        id={id}
        style={style}
        className="react-flow__edge-path"
        d={edgePath}
        markerEnd={markerEnd}
      />
      <foreignObject
        width={foreignObjectSize}
        height={foreignObjectSize}
        x={labelX - foreignObjectSize / 2}
        y={labelY - foreignObjectSize / 2}
        className="edgebutton-foreignobject"
        requiredExtensions="http://www.w3.org/1999/xhtml"
      >
        <div ref={anchorElementRef}>
          <button className="edgebutton">×</button>
          <Popper
            open={isPopperOpen}
            anchorEl={anchorElementRef.current}
            placement="top"
            transition
          >
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={350}>
                <Paper style={{ padding: 15 }}>Helo popper!</Paper>
              </Fade>
            )}
          </Popper>
        </div>
      </foreignObject>
    </>
  );
}
 */
