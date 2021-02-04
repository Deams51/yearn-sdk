require("dotenv/config");

const { WebSocketProvider } = require("@ethersproject/providers");

const yearn = require("..");

const provider = new WebSocketProvider(process.env.WEB3_PROVIDER_WSS);
const etherscan = process.env.ETHERSCAN_KEY;

const ctx = new yearn.Context({ provider, etherscan });

async function main() {
  const v1 = await yearn.vault.fetchV1Addresses(ctx);
  console.log(`Fetching ${v1.length} v1 vaults`);
  for (const address of v1) {
    const vault = await yearn.vault.resolveV1(address, ctx);
    console.log(
      [vault.name, vault.address, vault.performanceFee, vault.withdrawalFee].join(
        ","
      )
    );
  }

  const v2 = await yearn.vault.fetchV2Addresses(ctx);
  console.log(`Fetching ${v2.length} v2 vaults`);
  for (const address of v2) {
    const vault = await yearn.vault.resolveV2(address, ctx);
    console.log(
      [vault.name, vault.address, vault.performanceFee, vault.managementFee].join(
        ","
      )
    );
  }

  await provider.destroy();
}

main();
