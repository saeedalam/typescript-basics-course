import express, { Express, Request, Response } from 'express';
import router from './Routes/EventRoutes';
import { ServiceProvider } from '../ServiceProvider/ServiceProvider';

export default class Application {
  public app: Express;

  constructor(private readonly provider = new ServiceProvider()) {
    this.app = express();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.app.use('/', router);
  }

  public async start(): Promise<void> {
    try {
      const port = 3000; // Set the port you want to run the Express app on

      this.app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
      });
    } catch (err) {

    }
  }
}
