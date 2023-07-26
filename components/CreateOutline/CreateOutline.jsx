import { Box, TextField, Button } from "@mui/material";

import axios from "axios";
import useCopyToClipboard from "helper/hooks/useCopyHook";
import { useState } from "react";

const CreateOutline = () => {
  const [selectedPlan, setSelectedPlan] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const [outlineKey, setOutlineKey] = useState("");
  const [copied, copyOutlineKey] = useCopyToClipboard(outlineKey);

  const createAccount = () => {
    setIsLoading(true);
    axios
      .post("/api/admin/create-outline", {
        month: selectedPlan,
      })
      .then(res => {
        setOutlineKey(res.data.outlineKey);
      })
      .catch(err => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <Box
        p={4}
        display="flex"
        flexDirection="column"
        gap="8px"
        borderRadius="6px"
        boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
        textAlign="center"
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          gap="12px"
        >
          <Box
            width="100%"
            padding="12px"
            borderRadius="6px"
            boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
            bgcolor={selectedPlan === 1 && "rgba(76, 175, 80, 0.5)"}
            sx={{ cursor: "pointer" }}
            onClick={() => setSelectedPlan(1)}
          >
            یک ماه
          </Box>
          <Box
            width="100%"
            padding="12px"
            borderRadius="6px"
            boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
            bgcolor={selectedPlan === 2 && "rgba(76, 175, 80, 0.5)"}
            sx={{ cursor: "pointer" }}
            onClick={() => setSelectedPlan(2)}
          >
            دو ماه
          </Box>
          <Box
            width="100%"
            padding="12px"
            borderRadius="6px"
            boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
            bgcolor={selectedPlan === 3 && "rgba(76, 175, 80, 0.5)"}
            sx={{ cursor: "pointer" }}
            onClick={() => setSelectedPlan(3)}
          >
            سه ماه
          </Box>
        </Box>
        <Button
          sx={{ padding: "12px", mt: "24px" }}
          variant="outlined"
          onClick={createAccount}
        >
          {isLoading ? "..." : "ساخت اکانت"}
        </Button>
      </Box>
      {outlineKey && !isLoading && (
        <Box
          p={4}
          display="flex"
          flexDirection="column"
          gap="8px"
          borderRadius="6px"
          boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
          textAlign="center"
          mt="24px"
        >
          <Box
            component="code"
            p={2}
            my={2}
            display="block"
            width="100%"
            sx={{
              fontSize: "12px",
              background: "rgba(0, 0, 0, 0.02)",
              borderRadius: "8px",
              wordWrap: "break-word",
            }}
          >
            {outlineKey}
          </Box>
          <Button
            onClick={copyOutlineKey}
            sx={{ padding: "12px", mt: "8px" }}
            variant="contained"
          >
            کپی
          </Button>
        </Box>
      )}
    </>
  );
};

export default CreateOutline;
