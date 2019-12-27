import React from "react";
import { Container, Box } from "@material-ui/core";
import { ReactComponent as Logo } from "./logo.svg";
import EncryptionForm from "./form/container";
import EncryptionTable from "./table/container";
import { StyledTabs, StyledTab, TabPanel } from "../components/tabs/StyledTabs";

export interface Encryption {
  id: string;
  name: string;
  email: string;
  file1: string;
  file2: string;
}

export interface EncryptionPresenterProps {
  encryptions: Encryption[];
}

function a11yProps(index: any) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const EncryptionPresenter: React.FC<EncryptionPresenterProps> = ({
  encryptions,
}) => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="lg">
      <Box my={5} py={10}>
        <Box mb={3} display="flex" justifyContent="center">
          <Logo />
        </Box>
        <StyledTabs value={value} onChange={handleChange} centered={true}>
          <StyledTab label="FILE UPLOAD" {...a11yProps(0)} />
          <StyledTab label="UPLOAD HISTORY" {...a11yProps(1)} />
        </StyledTabs>

        <TabPanel value={value} index={0}>
          <Container maxWidth="sm">
            <EncryptionForm />
          </Container>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <EncryptionTable encryptions={encryptions} />
        </TabPanel>
      </Box>
    </Container>
  );
};

export default EncryptionPresenter;
