const axios = require("axios");

const client = axios.create({
  baseURL: process.env.BASE_URL,
});

const latestRates = async () => {
  let { data } = await client.get("latest");
  return data;
};

const convertCurrency = async (from = "USD", to = "EUR", amount = 1) => {
  let { data } = await client.get(
    `convert?from=${from}&to=${to}&amount=${amount}`
  );
  return data;
};

const historicalRates = async (date = "2020-04-04") => {
  let { data } = await client.get(`${date}`);
  return data;
};

const timeSeriesData = async (
  start_date = "2020-01-01",
  end_date = "2020-01-04"
) => {
  let { data } = await client.get(
    `timeseries?start_date=${start_date}&end_date=${end_date}`
  );
  return data;
};

const fluctuationData = async (
  start_date = "2020-01-01",
  end_date = "2020-01-04"
) => {
  let { data } = await client.get(
    `fluctuation?start_date=${start_date}&end_date=${end_date}`
  );
  return data;
};

const supportedSymbols = async () => {
  let { data } = await client.get("symbols");
  return data;
};

const vatRates = async () => {
  let { data } = await client.get("vat_rates");
  return data;
};

https: module.exports = {
  latestRates,
  convertCurrency,
  historicalRates,
  timeSeriesData,
  fluctuationData,
  supportedSymbols,
  vatRates,
};
