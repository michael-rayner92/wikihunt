import { setupServer } from 'msw/node';
import { wikiApiHandlers } from './wikiApiHandlers';

/**
 * Setup request interception with api mock handlers
 */
export const server = setupServer(...wikiApiHandlers);
