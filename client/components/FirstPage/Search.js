import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import companies from './StockList.js';

// console.log(companies)
const Search = () => {
  const [value, setValue] = useState("");
  const history = useHistory();

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (company) => {
    history.push({
      pathname: `/search/${company.symbol}`,
      state: { name: company.name, symbol: company.symbol, cik: company.cik}
    });
  };



  return (
    <div className="App">
      <h1>Quick Search</h1>
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Link
          to={{
            pathname: `/search/TSLA`,
            state: { name: "Tesla", symbol: "TSLA" },
          }}
          style={{ textDecoration: "none", color: "black" }}
        >
          <button style={{ marginRight: "10px", borderRadius: "5px" }}>
            Tesla (TSLA)
          </button>
        </Link>

        <Link
          to={{
            pathname: `/search/DIS`,
            state: { name: "Disney", symbol: "DIS" },
          }}
          style={{ textDecoration: "none", color: "black" }}
        >
          <button style={{ marginRight: "10px", borderRadius: "5px" }}>
            Disney (DIS)
          </button>
        </Link>

        <Link
          to={{
            pathname: `/search/ZM`,
            state: { name: "Zoom", symbol: "ZM" },
          }}
          style={{ textDecoration: "none", color: "black" }}
        >
          <button style={{ marginRight: "10px", borderRadius: "5px" }}>
            Zoom (ZM)
          </button>
        </Link>
      </div>
      <br />
      <br />
      <h1>Search</h1>
      <div className="search-container">
        <div className="search-inner">
          <input type="text" value={value} onChange={onChange} />
          <button onClick={() => onSearch(value)}> Search </button>
        </div>
        <div className="dropdown">
          {companies
            .filter((company) => {
              const searchTerm = value.toLowerCase();
              const fullName = company.name.toString().toLowerCase();
              const symbol = company.symbol.toString().toLowerCase();
              return (
                searchTerm &&
                (fullName.includes(searchTerm) ||
                  symbol.includes(searchTerm)) &&
                fullName !== searchTerm
              );
            })
            .slice(0, 5)
            .map((company) => (
              <div
                onClick={() => onSearch(company)}
                className="dropdown-row"
                key={company.name}
              >
                <Link
                  to={{
                    pathname: `/search/${company.symbol}`,
                    state: { symbol: company.symbol },
                  }}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  {company.name} ({company.symbol})
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
