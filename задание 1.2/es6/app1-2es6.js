// 1.2 задание в стиле ES5

'use strict';

class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }
    edit(text) {
        if (text !== '') {
            this.text = text;
        }
    }
}

class AttachedPost extends Post {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }
    makeTextHighlighted() {
        this.highlighted = true;
    }
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