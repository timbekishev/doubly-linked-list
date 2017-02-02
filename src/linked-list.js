const Node = require('./node');

class LinkedList {
    constructor() {
	this.length = 0;
        this.head = null;
        this.tail = null;	
	}

    append(data) {}

    head() {
		
        return this.head ? this.head.data : null;   
		
	}

    tail() {
		
	return this.tail ? this.tail.data : null;
	}

    at(index) {}

    insertAt(index, data) {}

    isEmpty() {
	return this.length ? false : true;		
	}

    clear() {
	this.length = 0;
        this.head = null;
        this.tail = null;
        return this;		
	}

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
