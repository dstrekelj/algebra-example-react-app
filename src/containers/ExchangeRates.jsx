import { ExchangeRates as Component } from "../components/ExchangeRates";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

export function ExchangeRates() {
  const { loading, error, data } = useQuery(gql`
    {
      rates(currency: "EUR") {
        currency
        rate
        name
      }
    }
  `);

  if (loading) return <div>Please wait...</div>;
  if (error) return <div>Something went wrong!</div>;

  return <Component items={data.rates} />;
}
