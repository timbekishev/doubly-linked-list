const Node = require('./node');

class LinkedList {
    constructor() {
		this.length = 0;
        this._head = null;
        this._tail = null;	
	}

    append(data) {
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

    deleteAt(index) {
		var a = this._head
		var b = 0;

		if (index >= this.length)
    		return -1;
    	else
	    	while (b < this.length) {
	    		if (index == b) {
    				if (a.prev != null) 
						a.prev.next = a.next;
    				if (a.next != null)
						a.next.prev = a.prev;
	    			this.length--;
	    			break;
	    		}
	    		a = a.next;
	    		b++;
	    	}
			
		return this;
	}

    reverse() {}

    indexOf(data) {
		var a = this._head;
		var b = 0;

    	while (b < this.length) {
    		if (a.data == data) 
    			return b;
    		a = a.next;
    		b++;
    	}
			return -1;
	}
}

module.exports = LinkedList;
