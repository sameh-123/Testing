const f=require('./methodes')
test('cap sameh is Sameh' ,()=>{
    expect(f.cap('sameh')).toBe('Sameh')
})
test(' rev of sameh is hemas',()=>{
    expect(f.rev('sameh')).toBe('hemas')
})
test(' sum of 2 , 3 is 5',()=>{
    expect(f.calc.add(2,3)).toBe(5)
})
test(' sub of 2 , 3 is -1',()=>{
    expect(f.calc.sub(2,3)).toBe(-1)
})
test(' mul of 2 , 3 is 6',()=>{
    expect(f.calc.mul(2,3)).toBe(6)
})
test(' div of 2 , 3 is 0.6666',()=>{
    expect(f.calc.div(2,3)).toBeCloseTo(0.66666)
})
test(' div of 2 , 0 is inf',()=>{
    expect(f.calc.div(2,0)).toBe(Infinity)
})
test('shift sameh by 2 is ucogj',()=>{
    expect(f.cip('sameh',2)).toBe('ucogj')
})
test('shift xyz by 3 is abc',()=>{
    expect(f.cip('xyz',3)).toBe('abc')
})
test('data of [1,2,3] is 2,3,1,3',()=>{
    expect(f.info([1,2,3])).toEqual({
        avg:2,
        mx:3,
        mn:1,
        ln:3
    })
})