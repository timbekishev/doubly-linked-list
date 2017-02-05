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
		// нужно ещё добавить данные в конец списка
	}

    head() {
		if (this._head != null)
    	return this._head.data;
    }

    tail() {	
		if (this._head != null)
    	return this._tail.data;	
	}

    at(index) { // возвращает данные по индексу
		
		
	}

    insertAt(index, data) {}

    isEmpty() {
		return this._head === null;
		return this._tail === null;
	}

    clear() {		
        	
	}

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
