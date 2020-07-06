import '@spcy/lib.dev.tasty';
import { IndexModule } from '../src';

test('Comply interface with refs', () => {
  expect(IndexModule).toMatchTastyShot('meta-schema');
});
