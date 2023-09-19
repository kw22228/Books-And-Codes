/** 풀 기반 아키텍처 */
class Website {
  constructor(private url: string) {}
  getUrl() {
    return this.url;
  }
}
class User {
  constructor(private username: string) {}
  getUsername() {
    return this.username;
  }
}
class BlogPost {
  constructor(private author: User, private id: string) {}
  getId() {
    return this.id;
  }

  getAuthorName() {
    return this.author.getUsername();
  }
}
function generatePostLink(website: Website, post: BlogPost) {
  let url = website.getUrl();
  let name = post.getAuthorName();
  let postId = post.getId();

  return url + name + postId;
}
/** -- 풀 기반 아키텍처 */

/** 푸시 기반 아키텍처 */
class WebsitePush {
  constructor(private url: string) {}
  generateLink(name: string, id: string) {
    return this.url + name + id;
  }
}
class UserPush {
  constructor(private username: string) {}
  generateLink(website: WebsitePush, id: string) {
    return website.generateLink(this.username, id);
  }
}
class BlogPostPush {
  constructor(private author: UserPush, private id: string) {}
  generateLink(website: WebsitePush) {
    return this.author.generateLink(website, this.id);
  }
}
function generatePostLinkPush(website: WebsitePush, post: BlogPostPush) {
  return post.generateLink(website);
}
/** -- 푸시 기반 아키텍처 */
