import React, { Component } from "react";
import Table from "./Table";
import axios from "axios";
import "./App.css";
class Main extends Component {
  constructor() {
    super();
    this.state = {
      fileData: [],
    };
  }
  async componentDidMount() {
    await this.getFileData();
  }
  getFileData = async () => {
    try {
      var fileResponse = await axios.get("http://localhost:3001/getFiledata/");
      var response = fileResponse.data.result;
      var jobj = [];
      for (var i = 0; i < response.length; i++) {
        var jsonObj = {};
        var trimmedStr = response[i].replace(/\s/g, "");

        var split = trimmedStr.split(":");

        jsonObj["lane"] = split[0];
        jsonObj["count"] = split[1];
        jsonObj["time"] = split[1] > 20 ? 40 : 20;
        jobj.push(jsonObj);
      }
      console.log("jobj", jobj);
      this.setState({
        fileData: jobj,
      });
    } catch (error) {
      alert("Something went wrong. Please try again!");
    }
  };
  render() {
    const data = this.state.fileData;
    const columns = [
      {
        Header: "Dashboard",
        columns: [
          {
            Header: "Lane",
            accessor: "lane",
          },
          {
            Header: "Vehicle Count",
            accessor: "count",
          },
          {
            Header: "Time (In Seconds)",
            accessor: "time",
          },
        ],
      },
    ];

    return (
      <div>
        <div className="App">{<Table data={data} columns={columns} />}</div>
        <div className="button">
          <input
            className="button"
            type="button"
            value="Get Traffic Data"
            onClick={this.getFileData}
          />
        </div>
      </div>
    );
  }
}
export default Main;
