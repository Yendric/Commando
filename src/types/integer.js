const ArgumentType = require('./base');

class IntegerArgumentType extends ArgumentType {
	constructor(client) {
		super(client, 'integer');
	}

	validate(val, msg, arg) {
		const int = Number.parseInt(val);
		if(Number.isNaN(int)) return false;
		if(arg.oneOf && !arg.oneOf.includes(int)) {
			return `Vul een van de volgende opties in: ${arg.oneOf.map(opt => `\`${opt}\``).join(', ')}`;
		}
		if(arg.min !== null && typeof arg.min !== 'undefined' && int < arg.min) {
			return `Vul een getal in dat groter is of gelijk aan ${arg.min}.`;
		}
		if(arg.max !== null && typeof arg.max !== 'undefined' && int > arg.max) {
			return `Vul een getal in dat kleiner is of gelijk aan ${arg.max}.`;
		}
		return true;
	}

	parse(val) {
		return Number.parseInt(val);
	}
}

module.exports = IntegerArgumentType;
