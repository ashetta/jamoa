import { Router } from "express";
import likeRouter from "./like/routes"

export default Router()
    .use("/like", likeRouter)