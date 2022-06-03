// 1.2 задание в стиле ES5

'use strict';

function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function (text) {
    if (text !== '') {
        this.text = text;
    }
};

function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
}

let post1 = new Post('monkey', 'unicorns are real!', '12-07-2021');
console.log(post1);
post1.edit('sunny day');
console.log(post1);

let attPost1 = new AttachedPost('yoll', 'owls are funny', '05-02-2022');
console.log(attPost1);
attPost1.edit('Murlok is a cat');
attPost1.makeTextHighlighted();
console.log(attPost1);