import papa from "papaparse";
import legendItems from "../entities/LegendItems";
import countries from "../data/countries.json";
/// Frank add mock data
import countriesProfit from "../data/mockCountriesData.json";
//    this.setState(countries.features);

class LoadCountryTask {
  covidUrl =
    "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/web-data/data/cases_country.csv";

  setState = null;

  load = (setState) => {
    this.setState = setState;

    papa.parse(this.covidUrl, {
      download: true,
      header: true,
      complete: (result) => this.#processProfitData(countriesProfit.data.countriesProfitList),
      // result is json (from CSV)
    });
  };

  #processCovidData = (covidCountries) => {
    // use github data set Geo's country
    // use github data set Geo's country
    for (let i = 0; i < countries.features.length; i++) {
      const country = countries.features[i];
      //console.log(country);
      ///  github data
      const covidCountry = covidCountries.find(
        (covidCountry) => country.properties.ISO_A3 === covidCountry.ISO3
      );

      country.properties.confirmed = 0;
      country.properties.confirmedText = 0;

      // use github data set Geo's country
      // use github data set Geo's country
      if (covidCountry != null) {
        let confirmed = Number(covidCountry.Confirmed);
        country.properties.confirmed = confirmed;
        country.properties.confirmedText = this.#formatNumberWithCommas(
          confirmed
        );
        // if usa insert data
        if(country.properties.ISO_A3==="USA"){
          country.properties.salesData=  [
            {
                name: 'Jan',
                // revenue: 4000,
                profit: 2400,
            },
            {
                name: 'Feb',
                // revenue: 3000,
                profit: 2498,
            },
            {
                name: 'Mar',
                // revenue: 9800,
                profit: 2600,
            },
            {
                name: 'Apr',
                // revenue: 3908,
                profit: 2780,
            },
            {
                name: 'May',
                // revenue: 4800,
                profit: 2890,
            },
            {
                name: 'Jun',
                // revenue: 3800,
                profit: 3090,
            },
        ];
        }
        if(country.properties.ISO_A3==="AUS"){
          country.properties.salesData=  [
            {
                name: 'Jan',
                // revenue: 4000,
                profit: 1400,
            },
            {
                name: 'Feb',
                // revenue: 3000,
                profit: 1798,
            },
            {
                name: 'Mar',
                // revenue: 9800,
                profit: 1960,
            },
            {
                name: 'Apr',
                // revenue: 3908,
                profit: 2180,
            },
            {
                name: 'May',
                // revenue: 4800,
                profit: 2390,
            },
            {
                name: 'Jun',
                // revenue: 3800,
                profit: 2790,
            },
        ];
        }
        
      }
      this.#setCountryColor(country);
    }

    this.setState(countries.features);
  };


  #processProfitData = (profitCountries) => {
    // use mock data set Geo's country
 
    for (let i = 0; i < countries.features.length; i++) {
      const country = countries.features[i];
      const profitCountry = profitCountries.find(
        (profitCountry) => country.properties.ISO_A3 === profitCountry.name
      );

      country.properties.confirmed = 0;
      country.properties.confirmedText = 0;
      country.properties.salesData = null;

      // use mock data set Geo's country
   
      if (profitCountry != null) {
        let confirmed = Number(profitCountry.Confirmed);
        country.properties.confirmed = confirmed;
        country.properties.confirmedText = this.#formatNumberWithCommas(
          confirmed
        );
        // use mock data to set country
        country.properties.salesData = profitCountry.data;
          
      }
      this.#setCountryColorAccordingProfit(country);
    }

    this.setState(countries.features);
  };

  #setCountryColor = (country) => {
    // use isFor function and confirmed: get according legendItem
    const legendItem = legendItems.find((item) =>
      item.isFor(country.properties.confirmed)
    );
    // use legendItem.color set Geo's country'color
    // use legendItem.color set Geo's country'color
    // use legendItem.color set Geo's country'color
    if (legendItem != null) {
      country.properties.color = legendItem.color;
    }
  };
  #setCountryColorAccordingProfit = (country) => {
    // use isFor function and confirmed: get according legendItem
    const legendItem = legendItems.find((item) =>
      item.isFor(country.properties.salesData != null)
    );
    // use legendItem.color set Geo's country'color
    // use legendItem.color set Geo's country'color
    // use legendItem.color set Geo's country'color
    if (legendItem != null) {
      country.properties.color = legendItem.color;
    }
  };

  #formatNumberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
}

export default LoadCountryTask;
