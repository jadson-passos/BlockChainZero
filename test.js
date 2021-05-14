const Block = require('./block.js');

const block = new Block('123','5444KJHH44434544','5444KJHH44434533','150');
console.log(block.toString());
console.log(Block.genesis().toString());

const firstBlock = Block.mineBlock(Block.genesis(),'$100');
console.log(firstBlock.toString());



