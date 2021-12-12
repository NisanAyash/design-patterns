const hash = (value: string, max: number) => {
    let hash = 0;

    for (let i = 0; i < value.length; i++) {
        hash += value.charCodeAt(i);
    }
    
    return hash % max
}


class HashTable {
    private storage: any = []
    private storageLimit: number = 10;



    print() {
        console.log(this.storage)
    }

    add(key: any, value: any) {
        let index = hash(key, this.storageLimit);

        if (!this.storage[index]) {
            this.storage[index] = [[key, value]]
        } else {
            let added = false;
            for (let i = 0; i < this.storage[index].length; i++) {
                if (this.storage[i][0] === key) {
                    this.storage[i][1] = value
                    added = true
                }
            }

            if (added === false) {
                this.storage[index].push([key, value]);
            }
        }
    }

    remove(key: any) {
        const index = hash(key, this.storageLimit);

        if (this.storage[index].length === 1 && this.storage[index][0][0] === key) {
            delete this.storage[index]
        } else {
            for (let i = 0; i < this.storage[index]; i++) {
                if (this.storage[index][i][0] === key) {
                    delete this.storage[index][i];
                }
            }
        }
    }

    lookup(key: any) {
        const index = hash(key, this.storageLimit);

        if (!this.storage[index]) return false;

        for (let i = 0; i < this.storage[index].length; i++) {
            if (this.storage[index][i][0] === key) {
                return this.storage[index][i][1];
            }
        }
    }

}

const hashTable = new HashTable()

hashTable.add("key1", "value1");
hashTable.add("key2", "value2");
hashTable.add("key3", "value3");

hashTable.remove("key2")

console.log(hashTable.lookup("key2"))
console.log(hashTable.lookup("key3"))
