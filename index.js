function hellofromfinnize(msg) {
    if (typeof msg !== 'string') {
       throw new TypeError('testing need a string')
    }
    return console.log(`Hello ${msg} from finnize`)
}

module.exports = hellofromfinnize