listOfDict = [
    {
        "type": "TEMPLATE",
        "name": "casafino assistant Anselm Test",
        "zuvooCode": "Hc09xbBx",
        "created": 1662380295.684,
        "advisorId": 112687,
        "draft": {
            "advisorId": 112687,
            "revision": 1,
            "name": "casafino planer Anselm Test",
            "hasLiveRevision": False,
            "hasEditRevision": True,
            "created": 1662380295.684,
            "modified": 1662380300,
            "advisorCode": "KczQp6q5",
            "templateRevision": True,
            "syndicatorRevision": False,
            "syndicatedRevision": False,
            "limitedMode": False,
            "defaultLocale": "de-DE",
            "locales": ["de-DE"],
            "collectionMigrationStatus": "MIGRATED",
            "channel": "WEB_CLICK",
            "application": "PRODUCT_FINDER",
            "webDesignSource": "CLASSIC",
        },
        "isEmptyFlowOnLive": True,
        "isEmptyFlowOnDraft": False,
        "channel": "WEB_CLICK",
        "application": "PRODUCT_FINDER",
        "connectedAssistants": [],
        "accountId": 3087,
        "dataSource": "CLASSIC",
        "webDesignSource": "CLASSIC",
    },
    {
        "type": "TEMPLATE",
        "name": "casafino planer Artikel test 2 live",  # Add 'live' string to the end to make output possible
        "zuvooCode": "vZG3805J",
        "created": 1662380959.122,
        "advisorId": 112688,
        "draft": {
            "advisorId": 112688,
            "revision": 1,
            "name": "casafino planer Artikel test 2",
            "hasLiveRevision": False,
            "hasEditRevision": True,
            "created": 1662380959.122,
            "modified": 1662381036,
            "advisorCode": "QXcXxxZF",
            "templateRevision": True,
            "syndicatorRevision": False,
            "syndicatedRevision": False,
            "limitedMode": False,
            "defaultLocale": "de-DE",
            "locales": ["de-DE"],
            "collectionMigrationStatus": "MIGRATED",
            "channel": "WEB_CLICK",
            "application": "PRODUCT_FINDER",
            "webDesignSource": "CLASSIC",
        },
        "isEmptyFlowOnLive": True,
        "isEmptyFlowOnDraft": False,
        "channel": "WEB_CLICK",
        "application": "PRODUCT_FINDER",
        "connectedAssistants": [],
        "accountId": 3087,
        "dataSource": "CLASSIC",
        "webDesignSource": "CLASSIC",
    },
]


def extractValueLiveFromListOfDict(listOfDict) -> None:

    arrWithLiveValueInNameKey = []

    for dict in listOfDict:
        for key, value in dict.items():
            if key == "name" and "live" in str(value):
                arrWithLiveValueInNameKey.append(dict)

    return arrWithLiveValueInNameKey


print(extractValueLiveFromListOfDict(listOfDict))
