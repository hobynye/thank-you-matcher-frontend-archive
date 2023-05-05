import { Ambassador } from './ambassador';

describe('Ambassador', () => {
  let classUnderTest: Ambassador;

  beforeEach(() => {
    classUnderTest = new Ambassador('John', 'Doe', 'Green', 'R');
  });

  it('should create an instance', () => {
    expect(classUnderTest).toBeTruthy();
  });

  it('should have first name John', () => {
    expect(classUnderTest.firstName).toBe('John');
  });

  it('should have last name Doe', () => {
    expect(classUnderTest.lastName).toBe('Doe');
  });

  it('should have full name John Doe', () => {
    expect(classUnderTest.fullName).toBe('John Doe');
  });

  it('should be in color Green', () => {
    expect(classUnderTest.color).toBe('Green');
  });

  it('should be in group R', () => {
    expect(classUnderTest.group).toBe('R');
  });
});
