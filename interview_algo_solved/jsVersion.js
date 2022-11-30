listOfObjects = [
	{
		type: 'TEMPLATE',
		name: 'casafino assistant Anselm Test live', // Add 'live' string to the end to make output possible
		zuvooCode: 'Hc09xbBx',
		created: 1662380295.684,
		advisorId: 112687,
		draft: {
			advisorId: 112687,
			revision: 1,
			name: 'casafino planer Anselm Test',
			hasLiveRevision: false,
			hasEditRevision: true,
			created: 1662380295.684,
			modified: 1662380300,
			advisorCode: 'KczQp6q5',
			templateRevision: true,
			syndicatorRevision: false,
			syndicatedRevision: false,
			limitedMode: false,
			defaultLocale: 'de-DE',
			locales: ['de-DE'],
			collectionMigrationStatus: 'MIGRATED',
			channel: 'WEB_CLICK',
			application: 'PRODUCT_FINDER',
			webDesignSource: 'CLASSIC',
		},
		isEmptyFlowOnLive: true,
		isEmptyFlowOnDraft: false,
		channel: 'WEB_CLICK',
		application: 'PRODUCT_FINDER',
		connectedAssistants: [],
		accountId: 3087,
		dataSource: 'CLASSIC',
		webDesignSource: 'CLASSIC',
	},
	{
		type: 'TEMPLATE',
		name: 'casafino planer Artikel test 2',
		zuvooCode: 'vZG3805J',
		created: 1662380959.122,
		advisorId: 112688,
		draft: {
			advisorId: 112688,
			revision: 1,
			name: 'casafino planer Artikel test 2',
			hasLiveRevision: false,
			hasEditRevision: true,
			created: 1662380959.122,
			modified: 1662381036,
			advisorCode: 'QXcXxxZF',
			templateRevision: true,
			syndicatorRevision: false,
			syndicatedRevision: false,
			limitedMode: false,
			defaultLocale: 'de-DE',
			locales: ['de-DE'],
			collectionMigrationStatus: 'MIGRATED',
			channel: 'WEB_CLICK',
			application: 'PRODUCT_FINDER',
			webDesignSource: 'CLASSIC',
		},
		isEmptyFlowOnLive: true,
		isEmptyFlowOnDraft: false,
		channel: 'WEB_CLICK',
		application: 'PRODUCT_FINDER',
		connectedAssistants: [],
		accountId: 3087,
		dataSource: 'CLASSIC',
		webDesignSource: 'CLASSIC',
	},
];

function extractValueLiveFromListOfDict(listOfObjects) {
	arrWithLiveValueInNameKey = [];

	for (const obj of listOfObjects) {
		for (const [key, value] of Object.entries(obj)) {
			if (key === 'name' && value.includes('live')) {
				arrWithLiveValueInNameKey.push(obj);
			}
		}
	}
	return arrWithLiveValueInNameKey;
}

console.log(extractValueLiveFromListOfDict(listOfObjects));
