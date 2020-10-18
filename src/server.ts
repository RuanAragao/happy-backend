import express, { Request, Response } from 'express';

import './database/connection';

const app = express();

app.get('/', (request: Request, response: Response) => {
  return response.json({ message: 'Hey macarena' })
})

app.listen(3333);