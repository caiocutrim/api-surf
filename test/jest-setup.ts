import { SetupServer } from '@src/server';
import supertest from 'supertest';

beforeAll(() => {
  const server = new SetupServer();
  server.init();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (global as any).testRequest = supertest(server.getApp());
});
