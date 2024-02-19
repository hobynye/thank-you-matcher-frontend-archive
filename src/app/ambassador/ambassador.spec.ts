import { Ambassador } from './ambassador';

describe('Ambassador', () => {
  let classUnderTest: Ambassador;

  beforeEach(() => {
    classUnderTest = new Ambassador('John', 'Doe', 'Green', 'R');
  });

  it('should create an instance', () => {
    expect(classUnderTest).toBeTruthy();
  });

  it('should set first name to Jane', () => {
    expect(classUnderTest.firstName).toBe('John');
    classUnderTest.firstName = 'Jane';
    expect(classUnderTest.firstName).toBe('Jane');
  });

  it('should have first name John', () => {
    expect(classUnderTest.firstName).toBe('John');
  });

  it('should set last name to Ray', () => {
    expect(classUnderTest.lastName).toBe('Doe');
    classUnderTest.lastName = 'Ray';
    expect(classUnderTest.lastName).toBe('Ray');
  });

  it('should have last name Doe', () => {
    expect(classUnderTest.lastName).toBe('Doe');
  });

  it('should set full name to Jane Ray', () => {
    expect(classUnderTest.firstName).toBe('John');
    expect(classUnderTest.lastName).toBe('Doe');
    classUnderTest.firstName = 'Jane';
    classUnderTest.lastName = 'Ray';
    expect(classUnderTest.firstName).toBe('Jane');
    expect(classUnderTest.lastName).toBe('Ray');
  });

  it('should have full name John Doe', () => {
    expect(classUnderTest.fullName).toBe('John Doe');
  });

  it('should set color to Blue', () => {
    expect(classUnderTest.color).toBe('Green');
    classUnderTest.color = 'Blue';
    expect(classUnderTest.color).toBe('Blue');
  });

  it('should be in color Green', () => {
    expect(classUnderTest.color).toBe('Green');
  });

  it('should set group to B', () => {
    expect(classUnderTest.group).toBe('R');
    classUnderTest.group = 'B';
    expect(classUnderTest.group).toBe('B');
  });

  it('should be in group R', () => {
    expect(classUnderTest.group).toBe('R');
  });
});
