import { WEB_SOURCE } from '../__fixtures__/fixtures';
import { validateSourceWeb } from '../utils/sources/web/';

describe('sourceType Web', () => {
  test('validateSourceGithub returns true when valid', () => {
    expect(validateSourceWeb(WEB_SOURCE)).toBe(true);
  });

  test('validateSourceWeb returns false when source is invalid', () => {
    const BAD_SOURCE = {
      ...WEB_SOURCE,
      sourceProperties: { url: null },
    };
    expect(validateSourceWeb(BAD_SOURCE)).toBe(false);
  });
});
