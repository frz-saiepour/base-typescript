import {sayHello} from './app'

describe('sayHello', () => {
    test('it should include the correct name', ()=>{
        expect(sayHello('DummyName')).toBe('Hello DummyName!');
    })
})