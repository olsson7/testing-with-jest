const stack = require('../src/stack');

test('peek on empty stack returns undefined', () => {
    expect(stack.peek()).toBeUndefined();
});

test('peek on stack with one element returns that element', () => {
    stack.push(1);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(1);
});

test('peek on stack with two or more elements returns the top element', () => {
    stack.push(1);
    stack.push("wow");
    stack.push(42);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(42);
});

test('pop each element of array', () => {

    const testValues = [1,2,'tre',4,5];

    for (let index = 0; index < testValues.length; index++) {
        stack.push(testValues[index]);
    }
    
    expect(stack.pop()).toBe(5);
    expect(stack.pop()).toBe(4);
    expect(stack.pop()).toBe(3); // Medvetet fel, ska vara 'tre'
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);

});