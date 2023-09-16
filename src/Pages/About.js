import React from "react";
import Layout from "../Components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "&h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2 rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)":{
            mt:0
          }
        }}
      >
        <Typography variant="h4">Welcmome to My Resturant</Typography>
        
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          eveniet assumenda sapiente voluptatibus tempore quisquam dicta
          voluptate recusandae cumque mollitia. Magni numquam rerum consequuntur
          voluptatibus eveniet debitis, sapiente necessitatibus libero,
          laudantium doloremque, nostrum voluptas ut? Aliquam sequi sapiente
          sint, sit ullam laudantium ut vitae voluptatum in maiores repellat
          magni, eligendi corrupti obcaecati. Enim molestias iure repudiandae
          consequuntur expedita explicabo neque deleniti et animi. Quibusdam
          dignissimos iste saepe expedita rerum totam qui ad earum odio pariatur
          fugiat, officia modi omnis adipisci sunt iure placeat cupiditate
          necessitatibus tempore ipsa rem repellat aliquid, voluptatem quidem.
          Minus deleniti neque modi magni voluptates! Iusto, qui!
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          totam incidunt asperiores sed fugit debitis laborum impedit ut quidem
          exercitationem labore modi quos voluptatum repellendus omnis,
          molestias necessitatibus laudantium possimus sunt? Qui pariatur nulla
          numquam quaerat, nostrum illo inventore eaque cumque quam magni
          distinctio est laudantium obcaecati soluta non earum possimus aliquam
          corporis esse? Tenetur incidunt vel voluptatem et amet assumenda
          molestiae exercitationem delectus ex natus dolores, ipsam, placeat
          voluptas quis cumque omnis, velit fuga suscipit. Ullam quod sequi
          quam, numquam ad atque corrupti aliquid repellendus cum quasi autem
          adipisci accusamus iure esse beatae nobis. Dolore sequi quod corporis
          accusamus.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
