import { DateCountPipe } from './date-count.pipe';

describe('DateCount', () => {
  it('create an instance', () => {
    const pipe = new DateCountPipe();
    expect(pipe).toBeTruthy();
  });
});
