import logging

logger = logging.getLogger(__name__)

# Fail-soft MongoDB Cloud Atlas Sync
MONGO_URI = "mongodb+srv://siphbiolabchip_user:siphbiolabchip2026@cluster0.mongodb.net/siphbiolabchip_db?retryWrites=true&w=majority"

def sync_to_mongo(collection_name, data):
    """
    Asynchronously / Soft-fails syncing record to MongoDB Atlas cloud.
    Primary store remains Django Relational SQLite ORM.
    """
    try:
        from pymongo import MongoClient
        client = MongoClient(MONGO_URI, serverSelectionTimeoutMS=2000)
        db = client['siphbiolabchip_db']
        collection = db[collection_name]
        collection.insert_one(data)
        logger.info(f"[MongoDB Sync Success] Record committed to collection '{collection_name}'")
        return True
    except Exception as e:
        logger.warning(f"[MongoDB Sync Soft-Fail] {str(e)}")
        return False
