let myName: string = process.env.NAME || 'UNKNOWN'

export const sayHello = (name: string): string => {
    return `Hello ${name}!`;
}

console.log(sayHello(myName))
