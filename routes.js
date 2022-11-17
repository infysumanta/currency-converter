const express = require("express");

const {
  latestRates,
  vatRates,
  supportedSymbols,
  convertCurrency,
  historicalRates,
  timeSeriesData,
  fluctuationData,
} = require("./apiConfig");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ status: 1, message: "Api is Active and running Successfully" });
});

router.get("/latest-rates", async (req, res) => {
  let { success, base, date, rates } = await latestRates();
  res.json({ success, base, date, rates });
});

router.get("/vat-rates", async (req, res) => {
  let { success, rates } = await vatRates();
  res.json({ success, rates });
});

router.get("/supported-symbols", async (req, res) => {
  let { success, symbols } = await supportedSymbols();
  res.json({ success, symbols });
});

router.get("/currency-convert/:from/:to", async (req, res) => {
  let { from, to } = req.params;
  let { success, query, info, historical, date, result } =
    await convertCurrency(from, to);
  res.json({ success, query, info, historical, date, result });
});

router.get("/historical-rates/:date", async (req, res) => {
  let { success, historical, base, date, rates } = await historicalRates(
    req.params.date
  );
  res.json({ success, historical, base, date, rates });
});

router.get("/time-series-data/:start_date/:end_date", async (req, res) => {
  let { success, timeseries, base, start_date, end_date, rates } =
    await timeSeriesData(req.params.start_date, req.params.end_date);
  res.json({ success, timeseries, base, start_date, end_date, rates });
});

router.get("/fluctuation-data/:start_date/:end_date", async (req, res) => {
  let { success, fluctuation, start_date, end_date, rates } =
    await fluctuationData(req.params.start_date, req.params.end_date);
  res.json({ success, fluctuation, start_date, end_date, rates });
});

module.exports = router;
