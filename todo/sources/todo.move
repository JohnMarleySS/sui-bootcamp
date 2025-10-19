module todo::todo;

use std::string::String;

public struct TodoList has key, store {
    id: UID,
    items: vector<String>,
}

public fun new(ctx: &mut TxContext) {
    let list = TodoList {
        id: object::new(ctx),
        items: vector[],
    };

    transfer::transfer(list, tx_context::sender(ctx));
}

public fun add(list: &mut TodoList, item: String) {
    list.items.push_back(item);
}

public fun remove(list: &mut TodoList, index: u64) {
    list.items.remove(index);
}
