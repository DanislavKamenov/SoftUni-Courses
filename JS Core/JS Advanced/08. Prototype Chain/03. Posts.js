function solve() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}\n` + `Content: ${this.content}\n`;
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislike = dislikes;
            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(comment);
        }

        toString() {
            let str = super.toString() + `Rating: ${this.likes - this.dislike}`;
            if (this.comments.length > 0) {
                let comments = `\nComments:`;
                this.comments.forEach(comment => comments += '\n * ' + comment);
                str += comments;
            }
            return str;
        }
    }

    class BlogPost extends Post {
        constructor(title, name, views) {
            super(title, name);
            this.views = Number(views);
        }

        view() {
            this.views++;
            return this;
        }

        toString() {
            return super.toString() + `Views: ${this.views}`
        }
    }

    return {Post, SocialMediaPost, BlogPost};
}

let classes = solve();


let test = new classes.SocialMediaPost("TestTitle", "TestContent", 5, 10);

test.addComment("1");
test.addComment("2");
test.addComment("3");
console.log(test.toString());
