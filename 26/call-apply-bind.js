//call , apply , bind

var person = {
  name: "sajna",
  hello: function (thing) {
    console.log(this.name, "", thing);
  },
};

person.hello("hello");

//call
var changename = {
  name: "aarifa",
};
person.hello.call(changename, "hello");

//bind - doesnt take second params it just take context and return a completely new function
var bindchangename = {
  name: "amyra",
};
const applyvalue = person.hello.bind(bindchangename);
applyvalue("hello");

//apply
var bindchangename = {
  name: "sharmi",
};
person.hello.apply(bindchangename, ["hello"]);
