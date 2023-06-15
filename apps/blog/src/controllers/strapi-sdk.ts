import { GraphQLClient } from "graphql-request";
import { getSdk } from "./strapi-getSdk";

const { CMS_URL, CMS_TOKEN } = process.env;

const graphQLClient = new GraphQLClient(`${CMS_URL}/graphql`, {
  headers: {
    Authorization: `Bearer ${CMS_TOKEN}`,
  },
});

const strapiSdk = getSdk(graphQLClient);

export default strapiSdk;
