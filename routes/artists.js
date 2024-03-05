import { Router } from "express";
import * as controllers from "../controllers/artists.js";

const router = Router();

router.get("/", controllers.getArtists);
router.get("/id/:id", controllers.getArtist);
router.get("/name/:name", controllers.getArtistByName);

router.post("/", controllers.createArtist);
router.put("/:id", controllers.updateArtist);
router.delete("/:id", controllers.deleteArtist);

export default router;
