var DataService = /** @class */ (function () {
    function DataService() {
    }
    DataService.prototype.getFromLocalStorage = function (storageName) {
        var localStorageItem = localStorage.getItem(storageName);
        return JSON.parse(localStorageItem);
    };
    DataService.prototype.setFromLocalStorage = function (storageName, users) {
        return localStorage.setItem(storageName, JSON.stringify(users));
    };
    return DataService;
}());
export { DataService };
//# sourceMappingURL=data.service.js.map