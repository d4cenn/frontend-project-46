#!/usr/bin/env node
import genDiff from '../src/index.js';
import { Command } from "commander";

const program = new Command();

program
    .description('Compares two configuration files and shows a difference.')
    .version('0.0.1')
    .arguments('<filepath1> <filepath2>')
    .option('-f, --format <type>', 'output format')
    .action((filepath1, filepath2) => genDiff(filepath1, filepath2));

program.parse(process.argv);
