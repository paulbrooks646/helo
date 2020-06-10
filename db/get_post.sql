select posts.title, posts.img, posts. content, users.username, users.profile_pic
from posts
full outer join users on users.id=posts.author_id
where posts.id = $1;