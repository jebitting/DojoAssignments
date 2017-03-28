/* list all the users */
SELECT * FROM friendships.users;

/* list of friendship informaiton */
SELECT * FROM friendships.friendships;

/* add users */
INSERT INTO users (first_name, last_name, created_at, updated_at) VALUES ('Diana', 'Smith', now(), now());

/* add friendships */
INSERT INTO friendships (user_id, friendship_id, created_at, updated_at) VALUES (5,2,now(),now());

/* show friendships */
SELECT users.first_name, users.last_name, user2.first_name as 'friends_first_name', user2.last_name as 'friends_last_name' FROM users LEFT JOIN friendships ON users.id = friendships.user_id LEFT JOIN users as user2 ON friendships.friendship_id = user2.id ORDER BY users.first_name ASC;
