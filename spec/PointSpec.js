describe('Point',function() {
  it("should represent a position of an object",function() {
    var pt = new jslash.Point(0,1);
    expect(pt.x).toEqual(0);
    expect(pt.y).toEqual(1);
  });
});
