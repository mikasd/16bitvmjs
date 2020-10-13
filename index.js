const createMemory = require("./create-memory");
const CPU = require("./cpu");
const instructions = require("./instructions");

const IP = 0;
const ACC = 1;
const R1 = 2;
const R2 = 3;

const memory = createMemory(256*256);
const writeableBytes = new Uint8Array(memory.buffer);

const cpu = new CPU(memory);

let i = 0;

writeableBytes[i++] = instructions.MOV_LIT_REG;
writeableBytes[i++] = 0x12;
writeableBytes[i++] = 0x34;
writeableBytes[i++] = R1;

writeableBytes[i++] = instructions.MOV_LIT_REG;
writeableBytes[i++] = 0xAB;
writeableBytes[i++] = 0xCD;
writeableBytes[i++] = R2;


writeableBytes[i++] = instructions.ADD_REG_REG;
writeableBytes[i++] = R1;
writeableBytes[i++] = R2;

writeableBytes[i++] = instructions.MOV_REG_MEM;
writeableBytes[i++] = ACC;
writeableBytes[i++] = 0x01;
writeableBytes[i++] = 0x00;


cpu.debug();
cpu.viewMemoryAt(cpu.getRegister('ip'));
cpu.viewMemoryAt(0x0100);

cpu.step();
cpu.debug();
cpu.viewMemoryAt(cpu.getRegister('ip'));
cpu.viewMemoryAt(0x0100);

cpu.step();
cpu.debug();
cpu.viewMemoryAt(cpu.getRegister('ip'));
cpu.viewMemoryAt(0x0100);

cpu.step();
cpu.debug();
cpu.viewMemoryAt(cpu.getRegister('ip'));
cpu.viewMemoryAt(0x0100);