var FooSchema = new FooSchema({
foo: {type: String},
woo: { type: String, enum: ['boo', 'zoo', 'moo'] },
});
module.exports = Mongoose.model('Foo', FooSchema);