const { MongoClient } = require('mongodb')

const listDatebase = async (client) => {
  const databasesList = await client.db().admin().listDatabases()

  console.log("Databases:");
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
}

const main = async () => {
  const URI = 'mongodb://localhost:27017'
  const OPTION = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
  const client = new MongoClient(URI, OPTION)

  try {
    await client.connect()
    await listDatebase(client)
  } catch (err) {
    console.error(err)
  } finally {
    await client.close()
  }
}

main().catch(console.error)