import { isIAccount } from './account';

describe('isIAccount', () => {
  it('should return true for a valid IAccount object', () => {
    const account = {
      id: '123',
      username: 'johndoe',
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@example.com',
      role: 'member',
      balance: 1000n,
      notify: true,
    };
    expect(isIAccount(account)).toBe(true);
  });

  it('should return false for an incorrect IAccount property', () => {
    const account = {
      id: '123',
      username: 'johndoe',
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@example.com',
      role: 'invalid_role',
      balance: 1000n,
      notify: true,
    };
    expect(isIAccount(account)).toBe(false);
  });

  it('should return false when containing an extra property', () => {
    const account = {
      id: '123',
      username: 'johndoe',
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@example.com',
      role: 'member',
      balance: 1000n,
      notify: true,
      extra: 'property',
    };
    expect(isIAccount(account)).toBe(false);
  });

  it('should return false when missing a required property', () => {
    const account = {
      id: '123',
      username: 'johndoe',
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@example.com',
      role: 'member',
      balance: 1000n,
    };
    expect(isIAccount(account)).toBe(false);
  });
});