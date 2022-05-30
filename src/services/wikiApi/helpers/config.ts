import axios from 'axios';
import { globalEnvs } from '@config/globals';

export const baseWikiApi = axios.create({
  baseURL: globalEnvs.apis.wikipediaApiBaseURL,
  headers: { 'Content-Type': 'application/json' },
  params: { format: 'json', origin: '*' }
});
