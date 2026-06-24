// Core Modules
const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/rootpath");
const homeDataPath = path.join(rootDir, "data", "homes.json");
module.exports = class Home {
  constructor(housename,mail,location,price) {
    this.housename = housename,
    this.mail = mail,
     this.location = location,
    this.price = price
   
    
  }

  save() {
    Home.fetchAll((registeredHomes) => {
      registeredHomes.push(this);
      
      fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), (error) => {
        console.log("File Writing Concluded", error);
      });
    });
  }

  static fetchAll(callback) {
    const homeDataPath = path.join(rootDir, "data", "homes.json");
    fs.readFile(homeDataPath, "utf-8", (err, data) => {
      if (err) {
    callback([]);
} else {
    const registeredHomes = data.trim()
        ? JSON.parse(data)
        : [];

    callback(Array.isArray(registeredHomes) ? registeredHomes : []);
}
    });
  }
};