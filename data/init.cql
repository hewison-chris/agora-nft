CREATE KEYSPACE store
    WITH REPLICATION = {
        'class' : 'SimpleStrategy',
        'replication_factor' : 1
        };

CREATE TABLE store.account (
      public_key text PRIMARY KEY,
      name text);