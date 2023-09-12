const express = require("express");
const mysql = require("mysql2/promise");

const main = async () => {
  const con = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "online booking system",
  });

  const insert = await con.execute(
    "INSERT INTO `users`(`userID`, `username`, `email`, `password`, `contact`) VALUES (1,'Dharmik','himanshu@gmail.com','himanshu123',9054760650)"
  );
  if (insert) {
    console.log("Inserted");
  } else {
    console.log("Not Insert");
  }
};

main();
