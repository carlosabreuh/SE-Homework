function createUser(name, age) {
  return {
    name: name,
    age: age,
    visits: 0,
    comments: 0,
    introduce: function () {
      console.log("My name is " + this.name);
    },
  };
}
