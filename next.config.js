module.exports = () => {
  return {
    env: {
      mongodb_username: process.env.MONGODB_USERNAME,
      mongodb_password: process.env.MONGODB_PASSWORD,
      mongodb_clustername: process.env.MONGODB_CLUSTER,
      mongodb_database: process.env.MONGODB_DATABASE,
      mongodb_newsletter_collection: process.env.MONGODB_NEWSLETTER_COLLECTION,
      mongodb_comments_collection: process.env.MONGODB_COMMENTS_COLLECTION,
      firebase_events: process.env.FIREBASE_EVENTS,
    },
  };
};
