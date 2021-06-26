var ObjectID = require('mongodb').ObjectID;
import LibCommon from "../lib/LibCommon"
import LibMongo from "../lib/LibMongo"
const bcrypt = require('bcrypt');

export default {  
  get_item :async function(args){
    try {
      var ret = {}
      const user_id = args.user_id
      const key = args.key  
      var where = {
        user_id: user_id ,key: key
      }; 
      var item = await LibMongo.get_item("sessions" , where )
      if(item != null){
        item.id = item._id      
      }
//console.log( item )
      return item
    } catch (err) {
      throw new Error('Error , get_item');
    }          
  },
  add_item :async function(args){
    try {
      const user_id = args.user_id
      const key = args.key
      this.delete_uid(user_id, key)
      var item = {
        user_id: user_id,
        key: key,
        value: args.value,
        created_at: new Date(),
      };
      const itemOne = await LibMongo.add_item("sessions" ,item )
      itemOne.id = itemOne._id
//      item.id="0"
//console.log( itemOne )  
      return itemOne
    } catch (err) {
      throw new Error('Error , add_item');
    }          
  },
  update_item :async function(args){
    try {
    } catch (err) {
      throw new Error('Error , update_item');
    }          
  },
  delete_item :async function(args){
    try {
      var id = args.id
      var where = { "_id": new ObjectID( id ) };
      await LibMongo.delete_item("sessions" , where )
      var ret ={
        id: id
      }      
      return args
    } catch (err) {
      throw new Error('Error , delete_item');
    }          
  },  
  delete_uid :async function(user_id, key){
    try {
      var where = {
         user_id: user_id ,key: key
      };
      await LibMongo.delete_item("sessions" , where )
      where.id = 0
      return where
    } catch (err) {
      throw new Error('Error , delete_uid');
    }          
  },

  
}
