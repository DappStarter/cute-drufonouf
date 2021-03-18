require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'gloom produce bone food elbow deny often universe hunt private metal gather'; 
let testAccounts = [
"0x05bb1b10259549c7e9165660199dd14f0cc53ba14c98565d7b51707d89b2d77d",
"0x22be29974d70c4bb3075aa74999441b81b9d6818d95a792511e3f5aab583f5a4",
"0x366d9417bc0aa4a52f0806c360b49ab827a211476c8aa28d05b799690fae32dd",
"0x900faabf61636bfa7d4df0284e0f3813d329928cbfa13f25ce3acd8f6c5bfb63",
"0xa4c466a4a1c98b66d346749c3d52c86620ab682a5d32ae136ad6f89e64d82de3",
"0xd6a185989e0e528bf88d7dd6bc6f9551a6ab76cc34210769e558843140f3baec",
"0xe57263d38fc76363814243e4e05ac74c23b3691b21bd0f30876af52fcf7e61b5",
"0xe8794c841f0e2eff0ed9b50971024a7de41bf766ef21adaebecfda657958f631",
"0x282bd322fcd33aa7a63b7939932fed67e8d4e836c9cce06967b2fcb8b8a308ce",
"0xfc2c5ca6f67185dc16526510eb11a02e8890aab1773566f3b43cdc7a4d1f98a1"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

