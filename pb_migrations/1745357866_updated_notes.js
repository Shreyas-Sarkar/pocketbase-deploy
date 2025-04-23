/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3395098727")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.id = id\n",
    "deleteRule": "@request.auth.id = id\n",
    "listRule": "@request.auth.id != \"\"",
    "updateRule": "@request.auth.id = id\n",
    "viewRule": "@request.auth.id = id\n"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3395098727")

  // update collection data
  unmarshal({
    "createRule": null,
    "deleteRule": null,
    "listRule": null,
    "updateRule": null,
    "viewRule": null
  }, collection)

  return app.save(collection)
})
