import { Request, Response, Router } from 'express';

import { resizeImage } from '../../utils/processImage';
import { saveResizedImage } from '../../utils/saveResizedImage';
import { exists } from '../../utils/validators';

const resizeImageRouter = Router();

resizeImageRouter.get('/', async (req: Request, res: Response) => {
  const { filename, width, height } = req.query;

  const { isFileExists, filePath } = await exists(filename as string);

  try {
    if (filename === undefined) throw new Error('filename query parameter is required!')

    if (filename === '') throw new Error('filename query parameter value is missing, please provide an image name!')

    if (!isFileExists) throw new Error('No such file was found!, make sure that your file exists in the full folder')

    if (isFileExists) {
      const { data, heightInt, widthInt } = await resizeImage(
        filePath!,
        width as string,
        height as string
      );

      await saveResizedImage(data, filename as string, widthInt, heightInt);

      res.end(data);
    }
  } catch (err) {
    if (err instanceof Error) {
      res.status(404).send(`<h1>Error: ${err.message}</h1>`);
    }
  }
});

export default resizeImageRouter;
