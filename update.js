const express = require("express");
const mysql = require("mysql2/promise");

const main = async () => {
  const con = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "online booking system",
  });

  const mobileNo=9054695220;
  const results = await con.execute(`UPDATE users SET contact=${mobileNo} WHERE 1`);
  if (results) {
    console.log("updated");
  } else {
    console.log("Not updated");
  }
};
main();