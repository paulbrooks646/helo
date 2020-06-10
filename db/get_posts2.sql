select posts.title, posts.id, users.username, users.profile_pic
from posts
full outer join users on users.id=posts.author_id
where posts.title is not null
and not users.id = $1;