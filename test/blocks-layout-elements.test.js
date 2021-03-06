/*global page */

const { WP_BASE_URL } = require( './support/config' );

describe( 'Post: Layout Blocks', () => {
	beforeAll( async () => {
		await page.goto( `${ WP_BASE_URL }/?name=blocks-layout-elements` );
	} );

	it( 'Should pass Axe tests', async () => {
		await expect( page ).toPassAxeTests();
	} );
} );
