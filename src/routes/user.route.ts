import { Router, Response, Request } from "express";
import { getRepository } from "typeorm";
import { User } from "../entity/User";

const router = Router();

router.get("/", async function (req: Request, res: Response) {
  // here we will have logic to return all users
  const userRepository = getRepository(User);
  const users = await userRepository.find();
  res.json(users);
});

router.get("/:id", async function (req: Request, res: Response) {
  // here we will have logic to return user by id
  const userRepository = getRepository(User);
  const results = await userRepository.findOne(req.params.id);
  return res.send(results);
});

router.post("/", async function (req: Request, res: Response) {
  // here we will have logic to save a user
  const userRepository = getRepository(User);
  const user = await userRepository.create(req.body);
  const results = await userRepository.save(user);
  return res.send(results);
});

router.put("/:id", async function (req: Request, res: Response) {
  // here we will have logic to update a user by a given user id
  const userRepository = getRepository(User);
  const user = await userRepository.findOne(req.params.id);
  userRepository.merge(user, req.body);
  const results = await userRepository.save(user);
  return res.send(results);
});

router.delete("/:id", async function (req: Request, res: Response) {
  // here we will have logic to delete a user by a given user id
  const userRepository = getRepository(User);
  const results = await userRepository.delete(req.params.id);
  return res.send(results);
});

export default router;
