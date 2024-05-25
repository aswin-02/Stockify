"use strict";

// Importing the necessary functions for creating and updating product DTOs
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));

// Exporting all the functions from the create-product.dto file
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};

// Setting the module to be an ES module
Object.defineProperty(exports, "__esModule", { value: true });

// Exporting the functions from the create-product.dto file
__exportStar(require("./create-product.dto"), exports);

// Exporting the functions from the update-product.dto file
__exportStar(require("./update-product.dto"), exports);

//# sourceMappingURL=index.js.map