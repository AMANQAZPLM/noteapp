import express from "express";
import mysql from "mysql";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "aman4573b",
  database: "noteapp",
});

export const addPost = (req, res) => {
  const q = "INSERT INTO notes(`desc`) VALUES (?)";
  const values = [req.body.note];
  db.query(q, [values], (err, data) => {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).json("Note has been created");
  });
};

export const updatePost = (req, res) => {};

export const deletePost = (req, res) => {
  const q = "DELETE from notes where id=?";
  db.query(q, [req.params.id], (err, data) => {
    if (err) {
      return res.json(err);
    }

    return res.json("Note has been deleted");
  });
};

export const getPost = (req, res) => {
  const q = "SELECT * from notes";
  db.query(q, (err, data) => {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).json(data);
  });
};
