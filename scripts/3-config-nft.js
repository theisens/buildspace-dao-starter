import sdk from './1-initialize-sdk.js';
import { readFileSync } from 'fs';

(async () => {
  try {
    const editionDrop = await sdk.getContract(
      '0xe14b838C3e00c5B4145b06F4819966eE83dcb7f2',
      'edition-drop'
    );
    await editionDrop.createBatch([
      {
        name: 'Sandworm',
        description: 'This NFT will give you access to DuneDAO!',
        image: readFileSync('scripts/assets/worm.jpeg'),
      },
    ]);
    console.log('✅ Successfully created a new NFT in the drop!');
  } catch (error) {
    console.error('failed to create the new NFT', error);
  }
})();
