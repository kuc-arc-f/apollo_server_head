var ObjectID = require('mongodb').ObjectID;
import LibCommon from "../lib/LibCommon"
import LibMongo from "../lib/LibMongo"
const bcrypt = require('bcrypt');

export default {  
  get_items :async function(){
    try {
      var where = {}
      var items = await LibMongo.get_arrayWhere("users" , where) 
      items = LibCommon.convert_items(items)
// console.log(items)
      return items
    } catch (err) {
      throw new Error('Error , get_items');
    }          
  },  
  get_item :async function(args){
    try {
      var ret = {}
      const mail = args.mail
      const password = args.password
      var where = { mail: mail }
      var item = await LibMongo.get_item("users" , where ) 

      if(item == null){ return item; }
      if (mail === item.mail
        && bcrypt.compareSync(password,  item.password )){
//          item.password = ""
          item.id = item._id
          ret = item
//console.log(item)
      }      
      return ret
    } catch (err) {
      throw new Error('Error , get_item');
    }          
  },
 
}
