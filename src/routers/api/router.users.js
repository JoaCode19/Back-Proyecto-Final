import { Router } from "express";
import { postUsuarios } from "../../controllers/api/users/controller.post.users.js";
import { getUsersController } from "../../controllers/api/users/controller.getusers.js";
import { authJwtApi } from "../../mid/authentication.js";
import { soloRol } from "../../mid/authorization.js";
import { postUsersForgot } from "../../controllers/api/users/controller.postusersforgot.js";
import { postUsersRecover } from "../../controllers/api/users/controller.postusersrecover.js";
import { getUsersAdm } from "../../controllers/api/users/controller.getuseradm.js";
import { docsUsers } from "../../controllers/api/users/controller.post.docsusers.js";
import { extractorMulter } from "../../mid/extractor.js";
import { photoUsers } from "../../controllers/api/users/controller.post.photousers.js";
import { docCheck } from "../../mid/doccheck.js";

export const usersRouter = Router();

usersRouter.post("/", postUsuarios);
usersRouter.get("/", authJwtApi, soloRol("super-admin"), getUsersController);
usersRouter.post("/forgot", postUsersForgot);
usersRouter.post("/recover", postUsersRecover);
usersRouter.get("/admin/:uid", authJwtApi, soloRol("super-admin"), getUsersAdm);
usersRouter.post(
  "/documents/:uid",
  docCheck,
  extractorMulter("assets/documents", [
    { name: "identificator" },
    { name: "address" },
    { name: "status" },
  ]),
  docsUsers
);
usersRouter.post(
  "/profile/:uid",
  extractorMulter("assets/profile", [{ name: "photo" }]),
  photoUsers
);
