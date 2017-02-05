const Node = require('./node');

class LinkedList {
    constructor() {
		this.length = 0;
        this._head = null;
        this._tail = null;	
	}

    append(data) { // добавление в конец
	
	}

    head() {
		if (this._head != null)
    	return this._head.data;
    	else
    		return null; 
	}

    tail() {
		if (this._tail != null)
    		return this._tail.data;
    	else
    		return null;
	}

    at(index) { // возвращает данные по индексу
		
		
	}

    insertAt(index, data) {}

    isEmpty() {
		if (this.lenght == 0) 
			return true 
		else 
			return false;			
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
