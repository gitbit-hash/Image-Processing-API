import { Request, Response, Router } from 'express';

import { resizeImage } from '../../utils/processImage';
import { saveResizedImage } from '../../utils/saveResizedImage';
import { exists } from '../../utils/validators';

const resizeImageRouter = Router();

resizeImageRouter.get('/', async (req: Request, res: Response) => {
  const { filename, width, height } = req.query;

  const { isFileExists, filePath } = await exists(filename as string);

  try {
    if (isFileExists) {
      const { data, heightInt, widthInt } = await resizeImage(
        filePath!,
        width as string,
        height as string
      );
      await saveResizedImage(data, filename as string, widthInt, heightInt);

      res.end(data);
    } else {
      throw new Error("File doesn't exist");
    }
  } catch (err) {
    if (err instanceof Error) {
      res.status(404).send(`<h1>Error: ${err.message}</h1>`);
    }
  }
});

export default resizeImageRouter;
