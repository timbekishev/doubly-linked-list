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
		} else (this.length > 0); {
			var b = this._tail;
			this._tail = a;
			this._tail.prev = b;
	    	this._tail.prev.next = this._tail;
			this.length++;
		}
				
		return this;		
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

    at(index) { 
		var a = this._head; 
		var b = 0;
		while (b < this.length) {
			if (index == b) 
				return a.data;
			a = a.next;
			b++;
		}
		return a.data;
	}

    insertAt(index, data) {
		var a = this._head; 
		var b = 0;
		while (b < this.length) {
			if (index == b) {
				a.data = data;
				break;
			}
			a = a.next;
			b++;
			
		}
		return a.data;
	}

    isEmpty() {
		if (this._head == null)
			return true;
		else
			return false;
	}

    clear() {		
		this._head = null;
		this._tail = null;
    	this.length = 0;

    	return this;
	}

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
