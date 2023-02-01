import express, {Router} from "express";
const usersRoutes = Router()

usersRoutes.get("/", (req, res) =>{
  res.send({message:"hello world"})
})

export {usersRoutes}