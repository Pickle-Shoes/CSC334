CREATE TABLE IF NOT EXISTS users(
    id integer PRIMARY KEY,
    email text NOT NULL,
    username text UNIQUE  
);
-- no trailing comma at the end of columns delcaration