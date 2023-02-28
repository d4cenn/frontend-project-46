import { readFileSync } from 'fs';
import _ from 'lodash';

const genDiff = (data1, data2) => {
    const keys1 = Object.keys(data1)
    const keys2 = Object.keys(data2)

    const keys = _.union(keys1, keys2)
    const sortedKeys = _.sortBy(keys)

    let result = '';
    for (const key of sortedKeys) {
        if(!_.has(data1, key)) {
            result += `+ ${key}: ${data2[key]}\n`;
        }
        if(!_.has(data2, key)) {
            result += `- ${key}: ${data1[key]}\n`;
        }
        if(_.has(data1, key) && _.has(data2, key)) {
            data1[key] === data2[key] ? result += `  ${key}: ${data1[key]}\n` : result += `- ${key}: ${data1[key]}\n+ ${key}: ${data2[key]}\n`;
        }
    }

    return result
}

export default (filepath1, filepath2) => {
    const file1 = readFileSync(filepath1, 'utf-8');
    const file2 = readFileSync(filepath2, 'utf-8');

    const data1 = JSON.parse(file1)
    const data2 = JSON.parse(file2)

    console.log(genDiff(data1,data2))
}
