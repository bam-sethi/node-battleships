var board = require("../app.js");

describe("multiplication", function(){
  it("should multiply 2 and 3", function(){
    var answer =  board.multiply(2, 3);
    expect(answer).toBe(6);
  })

  it("should multiply 5 and 3", function(){
    var answer =  board.multiply(5, 3);
    expect(answer).toBe(15);
  })
})

