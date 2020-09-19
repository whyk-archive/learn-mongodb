import { MongoClient } from 'mongodb';

const listDatebase = async (client: MongoClient): Promise<void> => {
  const databasesList = await client.db().admin().listDatabases()

  console.log("Databases:");
  databasesList.databases.forEach((db: { name: string }) => console.log(` - ${db.name}`));
}

const main = async (): Promise<void> => {
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