/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3395098727")

  // update field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "select1874629670",
    "maxSelect": 1,
    "name": "tags",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "personal",
      "work",
      "others"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3395098727")

  // update field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "select1874629670",
    "maxSelect": 1,
    "name": "tags",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Personal",
      "Work",
      "Others"
    ]
  }))

  return app.save(collection)
})
