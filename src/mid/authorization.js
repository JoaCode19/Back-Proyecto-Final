import { ErrorPermissions } from "../models/error/errors.model.js";
import { decodeToken } from "../utils/cripto.js";

export function soloRol(rol) {
  return function (req, res, next) {
    const usrrole = req.session.user || req.session.passport.user;
    if (usrrole.role.includes(rol)) return next();
    return next(new ErrorPermissions(`only aviable for role '${rol}'`));
  };
}
