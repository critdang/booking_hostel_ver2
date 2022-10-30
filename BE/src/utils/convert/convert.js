const _ = require('lodash');

const toNumber = (value) => {
    const parsed = _.toNumber(value);
    if (_.isNaN(parsed)) {
        return value;
    }
    return parsed;
};
const convertValue = (values) => {
    Object.keys(values).forEach((key) => {
        values[key] = toNumber(values[key]);
    });
    return values;
}
const objToArr = (obj) => {
    const arr = Object.keys(obj).map((key) => [key, obj[key]]);
    return arr;
}
module.exports = { convertValue, objToArr };
