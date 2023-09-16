import React from "react";
import Layout from "../Components/Layout/Layout";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";

const Contact = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 5,
          ml: 10,
          "& h4": {
            fontWeight: "bold",
            mb: 2,
          },
        }}
      >
        <Typography variant="h4">Contact My Resturant</Typography>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
          magnam ipsa enim, voluptatum distinctio accusantium optio hic ratione
          at adipisci. Enim, accusamus alias ab mollitia autem ex doloremque aut
          in harum facere similique tempora omnis, sint quos. Minima, ipsum
          deserunt corrupti sit aliquid praesentium enim! Voluptate maxime
          perspiciatis aspernatur explicabo non ut, esse cum vero, quisquam
          tempore repellat. Eligendi itaque aliquam facere sint nesciunt
          deleniti deserunt, quae ipsa exercitationem sequi. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Tempore dolor quod nisi culpa
          temporibus laudantium consequatur maiores adipisci nemo sunt facilis
          excepturi praesentium ullam quasi eveniet, dolore, qui magnam unde!
        </p>
      </Box>
      <Box
        sx={{
          m: 3,
          width: "600px",
          ml: 10,
          "@media (max-width:600px)": {
            width: "390px",
          },
        }}
      >
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: "black", color: "white" }}
                  align="center"
                >
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "red", pt: 1 }} />
                  1800-00-1400 (Toll Free)
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <MailIcon sx={{ color: "skyblue", pt: 1 }} />
                  help@myrest.com
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: "green", pt: 1 }} />
                  8551003571 / 9130770330
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;
