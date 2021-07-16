/* eslint-disable @typescript-eslint/no-namespace */
var MyNameSpace;
(function (MyNameSpace) {
    MyNameSpace.nameOfNameSpace = 'Wene';
    var PersonNameSpace = /** @class */ (function () {
        function PersonNameSpace(name) {
            this.name = name;
        }
        return PersonNameSpace;
    }());
    MyNameSpace.PersonNameSpace = PersonNameSpace;
    var personNameSpace = new PersonNameSpace('Wene');
    var OtherNameSpace;
    (function (OtherNameSpace) {
        OtherNameSpace.nameOfNameSpace = 'Wene Alves';
    })(OtherNameSpace = MyNameSpace.OtherNameSpace || (MyNameSpace.OtherNameSpace = {}));
})(MyNameSpace || (MyNameSpace = {}));
/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="module/module.ts" />
console.log(MyNameSpace.OtherNameSpace.nameOfNameSpace);
