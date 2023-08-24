import { Stack, styled, alpha, TableCell, Typography } from "@mui/material";

export const TableContiner = styled(Stack)(({ theme }) => ({
  width: "100%",
  mb: 2,
  borderRadius: "16px",
  boxShadow: ` ${alpha(
    theme.palette.primary.contrastText,
    0.05
  )}0px 0px 0px 1px`,
}));

export const CustomArrTableCell = ({ arr }: { arr: string[] | undefined }) => {
  return (
    <TableCell>
      <Stack gap={"8px"}>
        {arr && arr.length < 1 ? (
          <Typography variant="body2">-</Typography>
        ) : (
          <Stack>
            {arr?.map((item) => {
              return <Typography variant="body2">{item}</Typography>;
            })}
          </Stack>
        )}
      </Stack>
    </TableCell>
  );
};

export const CustomTableCell = ({ text }: { text: string }) => {
  return (
    <TableCell>
      <Stack gap={"8px"}>
        {text === "" ? (
          <Typography variant="body2">-</Typography>
        ) : (
          <Typography variant="body2">{text}</Typography>
        )}
      </Stack>
    </TableCell>
  );
};
