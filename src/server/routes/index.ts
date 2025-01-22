import { Router, Request, Response } from 'express';

const router = Router();

type Todo = {}

// use in memory array to store todos
const todos: Array<Todo> = [];

router.post('/api/todos', (req: Request, res: Response) => {
    res.status(201).send();
});

router.get('/api/todos', (req: Request, res: Response) => {
    res.json(todos);
});

export default router;