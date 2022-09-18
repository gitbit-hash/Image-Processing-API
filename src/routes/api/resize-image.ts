import { Request, Response, Router } from 'express';
import { promises as fs } from 'fs';
import path from 'path';

const resizeImageRouter = Router();

resizeImageRouter.get('/', async (req: Request, res: Response) => {
  const { filename } = req.query;
  const filePath = path.join(
    process.cwd() + `/src/assets/full/${filename}.jpg`
  );

  try {
    const file = await fs.readFile(filePath)
    res.end(file)
  } catch (err) {
    res.status(404).send("<h1>File doesn't exist</h1>")
  }
});

export default resizeImageRouter;
