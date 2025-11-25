"use strict";

const InvalidArticleIdException = require("./InvalidArticleIdException.js");
const InvalidQuantityException = require("./InvalidQuantityException.js");
const InvalidPriceException = require("./InvalidPriceException.js");

module.exports = class CartItem {

    //region private attributes
    //TODO Missing private attributs
    #_articleId;
    #_name;
    #_quantity;
    #_price;
    //endregion private attributes



    //region public methods
    constructor(articleId, name, quantity, price) {
        //TODO Implement this method
        this.#articleId = articleId;
        this.#name = name;
        this.quantity = quantity;
        this.price = price;
    }

    get articleId() {
        //TODO Implement this method
    }

    get name() {
        //TODO Implement this method
    }

    get quantity() {
        //TODO Implement this method
    }

    set quantity(value) {
        //TODO Implement this method
        this.#_quantity = this.#validateQuantity(value);
    }

    get price() {
        //TODO Implement this method
    }

    set price(value) {
        //TODO Implement this method
        this.#_price = this.#validatePrice(value);

    }

    get total() {
        //TODO Implement this method
    }
    //endregion public methods

    //region private methods
    set #articleId(value) {
        //TODO Implement this method
        this.#_articleId = this.#validateArticleId(value);

    }

    set #name(value) {
        //TODO Implement this method
        this.#_name = value;
    }

    #validateArticleId(articleId) {
        if (!Number.isInteger(articleId) || articleId <= 0) {
            throw new InvalidArticleIdException();
        }
    }

    #validateQuantity(quantity) {
        //TODO Implement this method
        if (typeof(quantity) != 'number' || quantity < 1) {
            throw new InvalidQuantityException("Invalid quantity: " + quantity);
        }
        return quantity;
    }

    #validatePrice(price) {
        //TODO Implement this method
        if (typeof(price) != 'number' || price < 10) {
            throw new InvalidPriceException("Invalid price: " + price);
        }
        return price;
    }
    //endregion private methods
}



