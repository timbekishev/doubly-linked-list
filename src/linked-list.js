const Node = require('./node');

class LinkedList {
    constructor() {
		this.length = 0;
        this._head = null;
        this._tail = null;	
	}

    append(data) { // добавление в конец
		var a = new Node (data);
		if (this._head === null && this._tail === null) {
			this._head = a;
			this._tail = a;
			return;
		}
		this._tail.next(a);
		this._tail = a;
		
	}

    head() {
		if (this._head != null)
    		return this._head.data;
    	else
    		return null;
    }

    tail() {	
		if (this._head != null)
    		return this._tail.data;
    	else 
    		return null;  	
	}

    at(index) { // возвращает данные по индексу
		
		
	}

    insertAt(index, data) {}

    isEmpty() {
		if (this.lenght == 0) 
		return true || false;
	}

    clear() {
		this.length = 0;
        this._head = null;
        this._tail = null;
        return this;		
	}

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
