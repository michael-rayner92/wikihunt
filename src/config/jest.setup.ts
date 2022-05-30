import '@testing-library/jest-dom/extend-expect';
import { server } from '../mocks';

// Establish API mocking before all tests
beforeAll(() => server.listen());

// Reset any request handlers added during tests
beforeEach(() => server.resetHandlers());

// Clean up after the tests are finished
afterAll(() => server.close());
