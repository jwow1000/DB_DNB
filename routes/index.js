import { Router } from "express";
import artistsRoutes from "./artists.js"
// import charactersRoutes from "./characters.js"

const router = Router();

router.get("/", (req, res) => res.send("This is the api root!"));

router.use("/artists", artistsRoutes)
// router.use("/characters", charactersRoutes)

export default router;
