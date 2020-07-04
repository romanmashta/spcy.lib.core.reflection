import '@spcy/lib.dev.tasty';
import { IndexSchema } from '../src';

test('Comply interface with refs', () => {
  expect(IndexSchema).toMatchTastyShot('meta-schema');
});
