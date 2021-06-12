require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include enroll sure tribe stool rival remain coast inside light army ghost'; 
let testAccounts = [
"0x3080c76f0127f7550686e560b56edfc84f6c2507b95c78b4744ea01cac4060fa",
"0x678a3b931daf6b73237cdd1036ced817e05507bb1757e216e55b68710a27c6ec",
"0x60e0b4fc620dde05829f195bad858d6e2db16e3f6664491c291b27b1d5954a09",
"0xde523e87f38823547f1cd4bd955d8f55b50b53d4be0d0e24a2ca5d904cb8e622",
"0xab55d07567338ec1e76ff130c18970af4346bddb22f353e1d706783974aa06b7",
"0x96ffbee9969c239001b9b8b1e9a4ce8a9e84c12bef4e19da5617681e46415af8",
"0xe071722a9be31ca098164ec1058a944d19548fdc4cc2450e25012c82d989f46c",
"0xb6fc63b4f080146b512bc64a6fd2b0adb77357105c70e8168adba92f4d5381bc",
"0x663c6e3e11235a1c4b81ae555c533d014754e4dba9679656e95841ab9b7e40d3",
"0xd03714f93246e2f0c0e5be411d1f15ed87c96ece3ef874c8626f225724d35734"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

