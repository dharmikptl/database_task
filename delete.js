const express = require("express");
const mysql = require("mysql2/promise");

const main = async () => {
  const con = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "online booking system",
  });

  const results = await con.execute("DELETE FROM users WHERE userID=1");
  if (results) {
    console.log("deleted");
  } else {
    console.log("Not deleted");
  }
};
main();