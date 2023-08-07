import { userRepository } from "../../../repositories/users.repository.js";

export async function getUsersController(req, res, next) {
  req.logger.http("inside get user");
  try {
    const users = await userRepository.findMany();
    res.json(users);
  } catch (error) {
    next(error);
  }
}
