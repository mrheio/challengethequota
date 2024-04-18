import { drizzle } from '@xata.io/drizzle';
import * as schema from './schema';
import { getXataClient } from './xata';

export const xata = getXataClient();

export const db = drizzle(xata, { schema });
