import sdk from './1-initialize-sdk.js';

(async () => {
  try {
    const token = await sdk.getContract(
      '0x1d351A648F090022F5C12fEf37c1a6642d1C20A4',
      'token'
    );
    // Log the current roles.
    const allRoles = await token.roles.getAll();

    console.log('👀 Roles that exist right now:', allRoles);

    // Revoke all the superpowers your wallet had over the ERC-20 contract.
    await token.roles.setAll({ admin: [], minter: [] });
    console.log(
      '🎉 Roles after revoking ourselves',
      await token.roles.getAll()
    );
    console.log(
      '✅ Successfully revoked our superpowers from the ERC-20 contract'
    );
  } catch (error) {
    console.error('Failed to revoke ourselves from the DAO trasury', error);
  }
})();
